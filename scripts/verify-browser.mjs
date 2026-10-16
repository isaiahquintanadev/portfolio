import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE ?? "playwright");
const base = process.env.BROWSER_CHECK_URL ?? "http://localhost:3100";
const output = "artifacts";
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL ?? "msedge", headless: true });
const paths = ["/", "/proyectos", "/proyectos/psicotestpol", "/proyectos/being-fit", "/proyectos/alter-ego-experience", "/proyectos/fast-image-convert"];
const results = { base, browser: browser.version(), viewports: [], interactions: [], metrics: [], errors: [] };
const pageErrors = [];
const context = await browser.newContext();
const page = await context.newPage();
page.on("pageerror", (error) => pageErrors.push(error.message));

try {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    for (const path of paths) {
      const response = await page.goto(base + path, { waitUntil: "networkidle" });
      assert.equal(response.status(), 200, path);
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("h1").count(), 1);
      const overflow = await page.evaluate(() => ({
        viewport: window.innerWidth,
        document: document.documentElement.scrollWidth,
        offenders: [...document.querySelectorAll("main *,header *,footer *")].filter((el) => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && (r.right > window.innerWidth + 1 || r.left < -1);
        }).slice(0, 5).map((el) => el.outerHTML.slice(0, 150)),
      }));
      assert(overflow.document <= width + 1, JSON.stringify({ path, width, overflow }));
      const headings = await page.locator("main :is(h1,h2,h3,h4)").evaluateAll((elements) => elements.map((el) => Number(el.tagName[1])));
      headings.forEach((level, i) => { if (i) assert(level <= headings[i - 1] + 1, `Saltos de encabezado: ${path}`); });
      for (const image of await page.locator("main img").all()) {
        if (!await image.isVisible()) continue;
        await image.scrollIntoViewIfNeeded();
        await image.evaluate((el) => el.decode());
        assert(await image.evaluate((el) => el.naturalWidth > 0), `Imagen rota: ${path}`);
      }
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
      results.viewports.push({ width, path, overflow: false, images: "OK", headings: "OK" });
      if ((width === 390 && ["/", "/proyectos/being-fit"].includes(path)) || (width === 1440)) {
        const name = path === "/" ? "home" : path.slice(1).replaceAll("/", "-");
        await page.screenshot({ path: `${output}/${name}-${width}.png`, fullPage: true });
        await page.screenshot({ path: `${output}/${name}-${width}-viewport.png` });
      }
    }
  }

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base, { waitUntil: "networkidle" });
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").textContent(), "Saltar al contenido");
  await page.keyboard.press("Enter");
  assert.equal(await page.locator(":focus").getAttribute("id"), "main-content");
  results.interactions.push("Enlace para saltar al contenido con teclado");

  const menuButton = page.locator('button[aria-controls="mobile-navigation"]');
  await menuButton.click();
  assert.equal(await menuButton.getAttribute("aria-expanded"), "true");
  await page.keyboard.press("Tab");
  assert.equal(await page.locator(":focus").textContent(), "Proyectos");
  await page.keyboard.press("Escape");
  assert.equal(await page.locator(":focus").getAttribute("aria-label"), "Abrir menú");
  assert.equal(await page.locator("#mobile-navigation").isVisible(), false);
  await menuButton.click();
  await page.locator("#mobile-navigation").getByRole("link", { name: "Servicios", exact: true }).click();
  assert.equal(new URL(page.url()).hash, "#services");
  assert.equal(await menuButton.getAttribute("aria-expanded"), "false");
  results.interactions.push("Menú móvil, foco, Escape, navegación por ancla y cierre");

  const summary = page.locator("#experience summary").first();
  await summary.focus();
  await page.keyboard.press("Enter");
  assert(await page.locator("#experience details").first().getAttribute("open") !== null);
  await page.keyboard.press("Enter");
  assert(await page.locator("#experience details").first().getAttribute("open") === null);
  results.interactions.push("Experiencia desplegable con teclado");

  const techSummary = page.locator("#tech summary");
  await techSummary.focus();
  await page.keyboard.press("Enter");
  assert(await page.locator("#tech details").getAttribute("open") !== null);
  assert((await page.locator("#tech details").innerText()).includes("PostgreSQL"));
  await page.keyboard.press("Enter");
  results.interactions.push("Tecnologías desplegables con teclado");

  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.getByRole("button", { name: "Copiar email", exact: true }).click();
  assert.equal(await page.evaluate(() => navigator.clipboard.readText()), "isaiahquintanadev@gmail.com");
  await page.getByRole("status").filter({ hasText: "Correo copiado" }).waitFor();
  const mail = await page.getByRole("link", { name: "Hablemos por email" }).getAttribute("href");
  assert(mail.startsWith("mailto:isaiahquintanadev@gmail.com?subject="));
  assert(mail.includes("body="));
  results.interactions.push("Copiar correo, confirmación aria-live y enlace mailto");

  await page.evaluate(() => { Object.defineProperty(navigator.clipboard, "writeText", { value: async () => { throw new Error("Bloqueado en prueba"); }, configurable: true }); });
  await page.getByRole("button", { name: "Email copiado", exact: true }).click();
  await page.getByRole("status").filter({ hasText: "No se ha podido copiar automáticamente" }).waitFor();
  assert.equal(await page.evaluate(() => window.getSelection().toString()), "isaiahquintanadev@gmail.com");
  results.interactions.push("Error de portapapeles y selección manual del correo");

  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior), "auto");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator("#contact").scrollIntoViewIfNeeded();
  await page.getByRole("button", { name: "Volver al inicio" }).click();
  assert.equal(await page.evaluate(() => window.scrollY), 0);
  results.interactions.push("Movimiento reducido y volver al inicio");

  await page.goto(base + "/proyectos/being-fit", { waitUntil: "networkidle" });
  await page.getByRole("link", { name: "Hablemos de tu proyecto", exact: true }).click();
  await page.waitForURL(base + "/#contact");
  assert(await page.locator("#contact").isVisible());
  results.interactions.push("CTA de caso de estudio a contacto");

  const noJs = await browser.newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  for (const path of paths) {
    const staticPage = await noJs.newPage();
    await staticPage.goto(base + path);
    assert(await staticPage.locator("h1").isVisible());
    if (path === "/") {
      assert(await staticPage.locator("#contact h2").isVisible());
      assert.equal(await staticPage.locator("#services article").count(), 3);
    }
    assert((await staticPage.locator("main").innerText()).length > 500);
    await staticPage.close();
  }
  await noJs.close();
  results.interactions.push("Contenido público y contacto visibles sin JavaScript en seis páginas");

  for (const width of [390, 1440]) {
    for (let run = 1; run <= 3; run++) {
      const measurement = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : 1000 } });
      await measurement.addInitScript(() => {
        window.__labMetrics = { lcp: 0, cls: 0 };
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) window.__labMetrics.lcp = entry.startTime;
        }).observe({ type: "largest-contentful-paint", buffered: true });
        new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) if (!entry.hadRecentInput) window.__labMetrics.cls += entry.value;
        }).observe({ type: "layout-shift", buffered: true });
      });
      const measuredPage = await measurement.newPage();
      await measuredPage.goto(base, { waitUntil: "networkidle" });
      await measuredPage.evaluate(() => document.fonts.ready);
      const metrics = await measuredPage.evaluate(() => {
        const nav = performance.getEntriesByType("navigation")[0];
        const resources = performance.getEntriesByType("resource");
        return {
          ...window.__labMetrics,
          ttfb: nav.responseStart,
          documentBytes: nav.encodedBodySize,
          jsBytes: resources.filter((r) => r.initiatorType === "script").reduce((sum, r) => sum + r.encodedBodySize, 0),
        };
      });
      results.metrics.push({ width, run, ...metrics });
      await measurement.close();
    }
  }

  assert.equal(pageErrors.length, 0, JSON.stringify(pageErrors));
  console.log(`OK: ${results.viewports.length} vistas, ${results.interactions.length} grupos de interacción, sin errores JavaScript.`);
  console.log(JSON.stringify(results.metrics, null, 2));
} catch (error) {
  results.errors.push(error.stack);
  throw error;
} finally {
  await writeFile(`${output}/browser-results.json`, JSON.stringify(results, null, 2));
  await browser.close();
}
