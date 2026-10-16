import { createRequire } from "node:module";
import { mkdir, readFile, writeFile } from "node:fs/promises";

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE ?? "playwright");
const axeSource = await readFile(require.resolve("axe-core/axe.min.js"), "utf8");
const base = process.env.BROWSER_CHECK_URL ?? "http://localhost:3100";
const axeVersion = require("axe-core/package.json").version;
await mkdir("artifacts", { recursive: true });
const browser = await chromium.launch({ channel: process.env.BROWSER_CHANNEL ?? "msedge", headless: true });
const paths = ["/", "/proyectos", "/proyectos/psicotestpol", "/proyectos/being-fit", "/proyectos/alter-ego-experience", "/proyectos/fast-image-convert"];
const report = { base, engine: "axe-core 4.11.1", browser: browser.version(), scope: "Automated accessibility and computed text contrast; no full WCAG conformance assessment", limits: ["No assistive technology user testing", "No text contrast analysis inside project screenshots", "Computed contrast composites ancestor backgrounds, converts CSS colors to sRGB through canvas, and skips complex backgrounds or ancestor opacity", "44px controls are a usability target; WCAG AA target size has different thresholds and exceptions", "The homepage is checked with disclosures and the mobile menu both closed and open"], pages: [] };

try {
  report.engine = `axe-core ${axeVersion}`;
  for (const width of [390, 1440]) {
    const page = await browser.newPage({ viewport: { width, height: 1000 } });
    for (const path of paths) {
      for (const expanded of path === "/" ? [false, true] : [false]) {
        await page.goto(report.base + path, { waitUntil: "networkidle" });
        await page.evaluate(() => document.fonts.ready);
        if (expanded) {
          await page.locator("main details").evaluateAll((elements) => elements.forEach((element) => { element.open = true; }));
          if (width === 390) await page.locator('button[aria-controls="mobile-navigation"]').click();
        }
        await page.addScriptTag({ content: axeSource });
        const axe = await page.evaluate(async () => window.axe.run(document, { runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"] } }));
        const dom = await page.evaluate(() => {
          const visible = (el) => {
            const r = el.getBoundingClientRect();
            const s = getComputedStyle(el);
            return r.width > 1 && r.height > 1 && s.visibility !== "hidden" && s.display !== "none" && !el.closest("[hidden],[inert],.sr-only");
          };
          const identify = (el) => ({ tag: el.tagName.toLowerCase(), text: el.textContent.trim().replace(/\s+/g, " ").slice(0, 130), id: el.id || undefined, label: el.getAttribute("aria-label") || undefined, class: String(el.className).slice(0, 120) });
          const colorProbe = document.createElement("canvas");
          colorProbe.width = colorProbe.height = 1;
          const colorContext = colorProbe.getContext("2d", { willReadFrequently: true });
          const parseColor = (color) => {
            colorContext.clearRect(0, 0, 1, 1);
            colorContext.fillStyle = color;
            colorContext.fillRect(0, 0, 1, 1);
            const rgba = [...colorContext.getImageData(0, 0, 1, 1).data];
            return [...rgba.slice(0, 3), rgba[3] / 255];
          };
          const blend = (front, back) => [0, 1, 2].map((i) => front[i] * front[3] + back[i] * (1 - front[3])).concat(1);
          const luminance = (color) => color.slice(0, 3).map((v) => { v /= 255; return v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4; }).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
          const contrast = [];
          let skippedComplexBackgrounds = 0;
          const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
          while (walker.nextNode()) {
            const text = walker.currentNode;
            const el = text.parentElement;
            if (!text.textContent.trim() || !el || !visible(el) || ["SCRIPT", "STYLE", "NOSCRIPT"].includes(el.tagName)) continue;
            const range = document.createRange(); range.selectNodeContents(text);
            if (![...range.getClientRects()].some((r) => r.width > 0 && r.height > 0)) continue;
            const style = getComputedStyle(el);
            const ancestry = []; let current = el; let complex = false;
            while (current) {
              const s = getComputedStyle(current);
              if (s.backgroundImage !== "none" || Number(s.opacity) < 1) complex = true;
              ancestry.unshift(parseColor(s.backgroundColor)); current = current.parentElement;
            }
            if (complex) { skippedComplexBackgrounds++; continue; }
            let background = [255, 255, 255, 1];
            for (const c of ancestry) if (c) background = blend(c, background);
            const foreground = parseColor(style.color);
            if (!foreground) continue;
            const f = luminance(blend(foreground, background)); const b = luminance(background);
            const ratio = (Math.max(f, b) + .05) / (Math.min(f, b) + .05);
            const large = parseFloat(style.fontSize) >= 24 || (parseFloat(style.fontSize) >= 18.66 && Number(style.fontWeight) >= 700);
            contrast.push({ ...identify(el), text: text.textContent.trim().slice(0, 100), color: style.color, background, size: style.fontSize, weight: style.fontWeight, ratio: Math.round(ratio * 100) / 100, required: large ? 3 : 4.5, pass: ratio >= (large ? 3 : 4.5) });
          }
          const controls = [...document.querySelectorAll("button,[role=button],summary,a.button-primary,a.button-secondary,header nav a")].filter(visible).map((el) => { const r = el.getBoundingClientRect(); return { ...identify(el), width: Math.round(r.width), height: Math.round(r.height), meets44: r.width >= 43.99 && r.height >= 43.99 }; });
          const names = [...document.querySelectorAll("a,button,[role=button],summary")].filter(visible).map((el) => {
            const labelled = (el.getAttribute("aria-labelledby") || "").split(/\s+/).map((id) => document.getElementById(id)?.textContent || "").join(" ").trim();
            const name = labelled || el.getAttribute("aria-label") || el.textContent.trim() || [...el.querySelectorAll("img")].map((img) => img.alt).join(" ") || el.getAttribute("title") || "";
            return { ...identify(el), name: name.replace(/\s+/g, " ").slice(0, 180) };
          });
          return {
            lang: document.documentElement.lang,
            landmarks: { main: document.querySelectorAll("main").length, header: document.querySelectorAll("header").length, footer: document.querySelectorAll("footer").length },
            headings: [...document.querySelectorAll("h1,h2,h3,h4,h5,h6")].filter(visible).map((el) => ({ level: Number(el.tagName[1]), text: el.textContent.trim() })),
            imagesWithoutAlt: [...document.images].filter((el) => !el.hasAttribute("alt")).map(identify),
            unnamedInteractive: names.filter((el) => !el.name),
            decoratedSvgWithoutAriaHidden: [...document.querySelectorAll("a svg,button svg,summary svg")].filter((el) => !el.hasAttribute("aria-hidden") && !el.hasAttribute("role")).map(identify),
            controls,
            controlsBelow44: controls.filter((el) => !el.meets44),
            contrast: { measuredTextNodes: contrast.length, skippedComplexBackgrounds, minimumRatio: Math.min(...contrast.map((r) => r.ratio)), failures: contrast.filter((r) => !r.pass), samples: contrast.sort((a, b) => a.ratio - b.ratio).slice(0, 10) },
          };
        });
        report.pages.push({ path, width, axe: { violations: axe.violations, incomplete: axe.incomplete.map(({ id, impact, nodes }) => ({ id, impact, count: nodes.length, nodes: nodes.map(({ target, failureSummary }) => ({ target, failureSummary })) })), passRuleCount: axe.passes.length }, ...dom });
        console.log(JSON.stringify({ path, width, violations: axe.violations.map((r) => r.id), incomplete: axe.incomplete.map((r) => r.id), contrast: dom.contrast.measuredTextNodes, contrastFailures: dom.contrast.failures.length, controlsBelow44: dom.controlsBelow44.length, unnamed: dom.unnamedInteractive.length }));
        report.pages.at(-1).expanded = expanded;
      }
    }
    await page.close();
  }
} finally {
  await writeFile("artifacts/accessibility-results.json", JSON.stringify(report, null, 2));
  await browser.close();
}

const failed = report.pages.filter((page) => page.axe.violations.length || page.contrast.failures.length || page.unnamedInteractive.length || page.imagesWithoutAlt.length);
if (failed.length) {
  console.error(`Fallos de accesibilidad en ${failed.length} vistas; revisa artifacts/accessibility-results.json.`);
  process.exitCode = 1;
}
