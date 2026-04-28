import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const distDir = path.join(rootDir, "dist");
const serverDir = path.join(rootDir, "dist-server");
const templatePath = path.join(distDir, "index.html");

const template = await readFile(templatePath, "utf8");
const serverEntryUrl = pathToFileURL(path.join(serverDir, "entry-server.js")).href;
const { render, getPrerenderRoutes, getSitemapXml } = await import(serverEntryUrl);

function extractLeadingHeadMarkup(html) {
  let remaining = html.trimStart();
  let headMarkup = "";
  const patterns = [
    /^<link\b[^>]*?>/i,
    /^<meta\b[^>]*?>/i,
    /^<title\b[^>]*>[\s\S]*?<\/title>/i,
    /^<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/i,
  ];

  while (true) {
    const match = patterns
      .map((pattern) => remaining.match(pattern))
      .find(Boolean);

    if (!match) break;

    headMarkup += match[0];
    remaining = remaining.slice(match[0].length).trimStart();
  }

  return { headMarkup, bodyMarkup: remaining };
}

function injectHtml(templateHtml, renderedPage) {
  const htmlOpenTag = renderedPage.htmlAttributes
    ? `<html ${renderedPage.htmlAttributes}>`
    : "<html>";
  const bodyOpenTag = renderedPage.bodyAttributes
    ? `<body ${renderedPage.bodyAttributes}>`
    : "<body>";
  const { headMarkup, bodyMarkup } = extractLeadingHeadMarkup(renderedPage.appHtml);

  return templateHtml
    .replace(/<html[^>]*>/i, htmlOpenTag)
    .replace(/<body[^>]*>/i, bodyOpenTag)
    .replace("<!--app-head-->", `${renderedPage.headTags}${headMarkup}`)
    .replace('<div id="root"></div>', `<div id="root">${bodyMarkup}</div>`);
}

function routeToOutputPath(route) {
  return route === "/"
    ? path.join(distDir, "index.html")
    : path.join(distDir, route.slice(1), "index.html");
}

const routes = getPrerenderRoutes();

for (const route of routes) {
  const renderedPage = render(route);
  const outputPath = routeToOutputPath(route);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, injectHtml(template, renderedPage), "utf8");
}

const buildDate = new Date().toISOString().slice(0, 10);
await writeFile(path.join(distDir, "sitemap.xml"), getSitemapXml(buildDate), "utf8");
await rm(serverDir, { recursive: true, force: true });
