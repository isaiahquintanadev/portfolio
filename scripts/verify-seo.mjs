import assert from "node:assert/strict";

// Ejecutar contra `npm run start -- --port 3100` después del build.
const base = process.env.SEO_CHECK_URL ?? "http://localhost:3100";
const canonicalOrigin = "https://isaiahhub.com";
const response = await fetch(`${base}/sitemap.xml`);
assert.equal(response.status, 200, "El sitemap debe responder 200");
const sitemap = await response.text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(new Set(urls).size, urls.length, "El sitemap contiene URLs duplicadas");
assert(urls.includes(`${canonicalOrigin}/`));
assert(urls.includes(`${canonicalOrigin}/proyectos`));

for (const url of urls) {
  assert.equal(new URL(url).origin, canonicalOrigin, "Dominio incorrecto en el sitemap");
  const path = new URL(url).pathname;
  const page = await fetch(`${base}${path}`);
  assert.equal(page.status, 200, `Página no disponible: ${path}`);
  const html = await page.text();
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1, `Debe existir un H1: ${path}`);
  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  assert(canonical, `Falta canonical: ${path}`);
  assert.equal(new URL(canonical).pathname, path, `Canonical incorrecto: ${path}`);
  assert.equal(new URL(canonical).origin, canonicalOrigin);
  assert(html.includes('name="description"'), `Falta description: ${path}`);
  assert(!/<meta name="robots" content="[^"]*noindex/.test(html), `Página pública noindex: ${path}`);
  assert(html.includes('name="twitter:card" content="summary_large_image"'));
  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  assert(schemas.length >= 2, `Faltan datos estructurados: ${path}`);
  const entities = schemas.flatMap((schema) => schema["@graph"] ?? [schema]);
  assert(entities.some((entity) => entity["@type"] === "Person" && entity.name === "Isaiah Quintana"));
  if (path.startsWith("/proyectos/")) {
    assert(entities.some((entity) => entity["@type"] === "CreativeWork"));
    assert(entities.some((entity) => entity["@type"] === "BreadcrumbList"));
    assert(html.includes('href="/#contact"'), `Falta contacto: ${path}`);
  }
  const imageUrl = html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];
  assert(imageUrl, `Falta imagen OG: ${path}`);
  const imageAddress = new URL(imageUrl);
  const image = await fetch(imageAddress.origin === canonicalOrigin ? `${base}${imageAddress.pathname}` : imageUrl);
  assert.equal(image.status, 200, `Imagen OG no disponible: ${path}`);
  const bytes = Buffer.from(await image.arrayBuffer());
  assert(image.headers.get("content-type")?.startsWith("image/"));
  assert(bytes.length > 0);
  if (new URL(imageUrl).pathname.endsWith("/social-image") || new URL(imageUrl).pathname === "/opengraph-image") {
    assert.equal(bytes.toString("hex", 0, 8), "89504e470d0a1a0a", "Se esperaba una imagen PNG");
    assert.equal(bytes.readUInt32BE(16), 1200);
    assert.equal(bytes.readUInt32BE(20), 630);
  }
  const links = [...html.matchAll(/<a\b[^>]*href="(\/[^"#?]*)[^"]*"/g)].map((match) => match[1]);
  for (const href of new Set(links)) {
    const linked = await fetch(`${base}${href}`);
    assert.equal(linked.status, 200, `Enlace interno roto en ${path}: ${href}`);
  }
  console.log(`OK ${path}: metadata, JSON-LD, enlaces e imagen social`);
}

const robots = await (await fetch(`${base}/robots.txt`)).text();
assert(robots.includes("Allow: /"));
assert(robots.includes(`Sitemap: ${canonicalOrigin}/sitemap.xml`));
for (const path of ["/no-existe", "/proyectos/no-existe"]) {
  const page = await fetch(`${base}${path}`);
  assert.equal(page.status, 404);
  assert((await page.text()).includes('name="robots" content="noindex"'));
}
console.log(`OK robots, 404 y sitemap (${urls.length} páginas)`);
