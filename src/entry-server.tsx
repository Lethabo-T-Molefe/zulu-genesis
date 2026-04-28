import { renderToString } from "react-dom/server";
import type { FilledContext } from "react-helmet-async";
import App from "./App";
import { SITE_URL } from "@/lib/seo";
import { getAllPublicRouteEntries } from "@/lib/site-routes";

export interface RenderedPage {
  appHtml: string;
  htmlAttributes: string;
  bodyAttributes: string;
  headTags: string;
}

function attrsToString(
  attrs: Record<string, string | undefined> | undefined,
): string {
  if (!attrs) return "";

  return Object.entries(attrs)
    .filter(([, value]) => value !== undefined)
    .map(([key, value]) => `${key}="${String(value).replace(/"/g, "&quot;")}"`)
    .join(" ");
}

export function render(url: string): RenderedPage {
  const helmetContext = {} as FilledContext;
  const appHtml = renderToString(
    <App router="memory" initialPath={url} helmetContext={helmetContext} />,
  );
  const { helmet } = helmetContext;

  return {
    appHtml,
    htmlAttributes: attrsToString(helmet?.htmlAttributes.toComponent()),
    bodyAttributes: attrsToString(helmet?.bodyAttributes.toComponent()),
    headTags: [
      helmet?.title.toString() ?? "",
      helmet?.priority.toString() ?? "",
      helmet?.meta.toString() ?? "",
      helmet?.link.toString() ?? "",
      helmet?.script.toString() ?? "",
    ].join(""),
  };
}

export function getPrerenderRoutes() {
  return getAllPublicRouteEntries().map((route) => route.path);
}

export function getSitemapXml(buildDate: string): string {
  const urls = getAllPublicRouteEntries()
    .map((route) => {
      const loc = route.path === "/" ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;

      return `  <url>
    <loc>${loc}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    })
    .join("\n\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls}

</urlset>
`;
}
