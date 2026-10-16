import assert from "node:assert/strict";
import { get as httpGet } from "node:http";
import { get as httpsGet } from "node:https";

// Ejecutar contra npm run start -- --port 3100 después del build.
// SEO_EXPECT_NOINDEX=1 comprueba previews sin exigir indexación.
const base = new URL(process.env.SEO_CHECK_URL ?? "http://localhost:3100");
const canonicalOrigin = "https://isaiahhub.com";
const expectNoindex = process.env.SEO_EXPECT_NOINDEX === "1" || process.env.VERCEL_ENV === "preview";
const htmlCache = new Map();
const titles = new Set();
const descriptions = new Set();

function decodeHtml(value) {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#39|#x[\da-f]+|#\d+);/gi, (entity) => {
    const named = { "&amp;": "&", "&quot;": '"', "&apos;": "'", "&#39;": "'", "&lt;": "<", "&gt;": ">" };
    if (named[entity]) return named[entity];
    const hex = entity[2].toLowerCase() === "x";
    return String.fromCodePoint(Number.parseInt(entity.slice(hex ? 3 : 2, -1), hex ? 16 : 10));
  });
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)=(["'])(.*?)\2/g)].map((match) => [match[1], decodeHtml(match[3])]));
}

function meta(html, key) {
  for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
    const attrs = attributes(match[0]);
    if (attrs.name === key || attrs.property === key) return attrs.content;
  }
}

async function pageHtml(path) {
  if (!htmlCache.has(path)) {
    htmlCache.set(path, (async () => {
      const page = await fetch(new URL(path, base));
      assert.equal(page.status, 200, "Página no disponible: " + path);
      if (!expectNoindex) {
        assert(!/\b(?:noindex|none)\b/i.test(page.headers.get("x-robots-tag") ?? ""), "Cabecera que impide indexación: " + path);
      }
      return page.text();
    })());
  }
  return htmlCache.get(path);
}

function visitReferences(value, ids, path) {
  if (!value || typeof value !== "object") return;
  if (!Array.isArray(value) && Object.keys(value).length === 1 && value["@id"]) {
    assert(ids.has(value["@id"]), "Referencia JSON-LD sin entidad en " + path + ": " + value["@id"]);
  }
  for (const child of Object.values(value)) visitReferences(child, ids, path);
}

const response = await fetch(new URL("/sitemap.xml", base));
assert.equal(response.status, 200, "El sitemap debe responder 200");
const sitemap = await response.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => decodeHtml(match[1]));
assert.equal(new Set(urls).size, urls.length, "El sitemap contiene URLs duplicadas");
assert(urls.includes(canonicalOrigin + "/"));
assert(urls.includes(canonicalOrigin + "/proyectos"));

for (const url of urls) {
  assert.equal(new URL(url).origin, canonicalOrigin, "Dominio incorrecto en el sitemap");
  const path = new URL(url).pathname;
  const html = await pageHtml(path);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, "Debe existir un H1: " + path);
  const title = decodeHtml(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "").trim();
  assert(title, "Falta title: " + path);
  assert(!titles.has(title), "Title duplicado: " + path);
  titles.add(title);
  const description = meta(html, "description")?.trim();
  assert(description, "Falta description: " + path);
  assert(!descriptions.has(description), "Description duplicada: " + path);
  descriptions.add(description);
  const canonical = [...html.matchAll(/<link\b[^>]*>/gi)].map((match) => attributes(match[0])).filter((attrs) => attrs.rel === "canonical");
  assert.equal(canonical.length, 1, "Debe existir un único canonical: " + path);
  assert.equal(new URL(canonical[0].href).href, url, "Canonical incorrecto: " + path);
  assert.equal(new URL(meta(html, "og:url")).href, url, "URL Open Graph incorrecta: " + path);
  assert.equal(meta(html, "og:title"), title, "Title Open Graph inconsistente: " + path);
  assert.equal(meta(html, "og:description"), description, "Description Open Graph inconsistente: " + path);
  const noindex = [meta(html, "robots"), meta(html, "googlebot")].some((value) => /\b(?:noindex|none)\b/i.test(value ?? ""));
  assert.equal(noindex, expectNoindex, "Indexabilidad incorrecta: " + path);
  assert.equal(meta(html, "twitter:card"), "summary_large_image");

  const schemas = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  assert(schemas.length >= 2, "Faltan datos estructurados: " + path);
  const entities = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
  const ids = new Set();
  for (const entity of entities) {
    if (!entity["@id"]) continue;
    assert(!ids.has(entity["@id"]), "Entidad JSON-LD duplicada en " + path + ": " + entity["@id"]);
    ids.add(entity["@id"]);
  }
  visitReferences(entities, ids, path);
  assert.equal(entities.filter((entity) => entity["@type"] === "Person" && entity.name === "Isaiah Quintana").length, 1);
  assert(entities.some((entity) => entity["@type"] === "WebSite" && entity.name === "Isaiah Hub"));
  if (path === "/") {
    const services = entities.filter((entity) => entity["@type"] === "Service");
    assert.equal(services.length, 3, "La home debe describir los tres servicios visibles");
    const visibleText = decodeHtml(html.replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, "").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
    const homePage = entities.find((entity) => entity["@type"] === "WebPage");
    assert(homePage, "Falta WebPage en home");
    for (const service of services) {
      assert(visibleText.includes(service.name), "Servicio sin contenido visible: " + service.name);
      assert(visibleText.includes(service.description), "Descripción de servicio sin contenido visible: " + service.name);
      assert.equal(service.provider["@id"], canonicalOrigin + "/#person");
      assert(homePage.mainEntity.some((reference) => reference["@id"] === service["@id"]));
    }
  } else {
    const breadcrumb = entities.find((entity) => entity["@type"] === "BreadcrumbList");
    assert(breadcrumb?.["@id"], "Falta breadcrumb con @id: " + path);
    assert(breadcrumb.itemListElement.length >= 2, "Google requiere al menos dos elementos en breadcrumbs: " + path);
    assert.equal(breadcrumb.itemListElement.at(-1).item, url);
    assert.equal(breadcrumb.itemListElement[0].item, canonicalOrigin + "/");
    for (const [index, item] of breadcrumb.itemListElement.entries()) {
      assert.equal(item.position, index + 1);
      assert(item.name?.trim(), "Breadcrumb sin nombre: " + path);
    }
  }
  if (path.startsWith("/proyectos/")) {
    const work = entities.find((entity) => entity["@type"] === "CreativeWork");
    assert(work, "Falta CreativeWork: " + path);
    assert.equal(work.creator["@id"], canonicalOrigin + "/#person", "Autor del proyecto incorrecto: " + path);
    const h1 = decodeHtml(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g, "") ?? "").trim();
    assert.equal(work.name, h1, "El nombre del proyecto debe coincidir con el H1: " + path);
    if (work.image) {
      const imagePath = new URL(work.image).pathname;
      const renderedImages = [...html.matchAll(/<img\b[^>]*>/gi)].map((match) => {
        const src = attributes(match[0]).src;
        if (!src) return null;
        const address = new URL(src, base);
        return address.searchParams.get("url") ?? address.pathname;
      });
      assert(renderedImages.includes(imagePath), "La imagen de CreativeWork no aparece en la ficha: " + path);
      const image = await fetch(new URL(imagePath, base));
      assert.equal(image.status, 200, "Imagen de CreativeWork no accesible: " + path);
      assert(image.headers.get("content-type")?.startsWith("image/"));
    }
    assert(html.includes('href="/#contact"'), "Falta contacto: " + path);
  }

  const imageUrl = meta(html, "og:image");
  assert(imageUrl, "Falta imagen OG: " + path);
  const imageAddress = new URL(imageUrl);
  const image = await fetch(imageAddress.origin === canonicalOrigin ? new URL(imageAddress.pathname + imageAddress.search, base) : imageUrl);
  assert.equal(image.status, 200, "Imagen OG no disponible: " + path);
  const bytes = Buffer.from(await image.arrayBuffer());
  assert(image.headers.get("content-type")?.startsWith("image/"));
  assert(bytes.length > 0);
  if (imageAddress.pathname.endsWith("/social-image") || imageAddress.pathname === "/opengraph-image") {
    assert.equal(bytes.toString("hex", 0, 8), "89504e470d0a1a0a", "Se esperaba una imagen PNG");
    assert.equal(bytes.readUInt32BE(16), 1200);
    assert.equal(bytes.readUInt32BE(20), 630);
  }

  const hrefs = [...html.matchAll(/<a\b[^>]*>/gi)].map((match) => attributes(match[0]).href).filter(Boolean);
  for (const href of new Set(hrefs)) {
    const address = new URL(href, url);
    if (address.origin !== canonicalOrigin) continue;
    const linkedHtml = await pageHtml(address.pathname);
    if (address.hash) {
      const target = decodeURIComponent(address.hash.slice(1));
      const ids = new Set([...linkedHtml.matchAll(/\bid="([^"]+)"/g)].map((match) => decodeHtml(match[1])));
      assert(ids.has(target), "Ancla rota en " + path + ": " + href);
    }
  }
  console.log("OK " + path + ": metadata única, JSON-LD, enlaces, anclas e imagen social");
}

const robotsResponse = await fetch(new URL("/robots.txt", base));
assert.equal(robotsResponse.status, 200);
const robots = await robotsResponse.text();
assert(robots.includes("Allow: /"));
assert(!/^Disallow:\s*\/\s*$/m.test(robots), "Robots no debe bloquear el rastreo, tampoco en previews con noindex");
assert(robots.includes("Sitemap: " + canonicalOrigin + "/sitemap.xml"));
for (const path of ["/no-existe", "/proyectos/no-existe"]) {
  const page = await fetch(new URL(path, base));
  assert.equal(page.status, 404);
  assert(/\bnoindex\b/.test(meta(await page.text(), "robots") ?? ""));
}
if (["localhost", "127.0.0.1", "[::1]"].includes(base.hostname)) {
  for (const path of ["/", "/proyectos?origen=seo-check"]) {
    // node:http permite enviar el Host real; fetch puede ignorar esa cabecera.
    const redirect = await new Promise((resolve, reject) => {
      const get = base.protocol === "https:" ? httpsGet : httpGet;
      const request = get(new URL(path, base), { headers: { Host: "www.isaiahhub.com" } }, (response) => {
        response.resume();
        resolve({ status: response.statusCode, location: response.headers.location });
      });
      request.on("error", reject);
      request.setTimeout(10000, () => request.destroy(new Error("Timeout al verificar www")));
    });
    assert.equal(redirect.status, 308, "Falta redirección permanente www: " + path);
    assert.equal(new URL(redirect.location).href, canonicalOrigin + path, "La redirección debe conservar ruta y parámetros");
  }
  console.log("OK redirección local www → sin www (308, ruta y parámetros)");
} else {
  console.log("No ejecutada: comprobación Host www reservada a servidor local");
}
console.log("OK robots, 404 y sitemap (" + urls.length + " páginas)");
