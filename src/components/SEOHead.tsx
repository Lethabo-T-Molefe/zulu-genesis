import { useEffect } from "react";
import {
  SITE_URL,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  MASTER_KEYWORDS,
  mergeKeywords,
  breadcrumbItemsForPath,
} from "@/lib/seo";

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  /** Extra phrases merged with the site-wide keyword set */
  keywords?: string;
  ogImage?: string;
  /** Use on error/404 pages so soft 404s are not indexed */
  noindex?: boolean;
}

const setMeta = (selector: string, attr: string, content: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.setAttribute(attr, content);
};

const setOrCreateMeta = (attr: "name" | "property", key: string, content: string) => {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const WEBPAGE_SCRIPT_ID = "seo-jsonld-webpage";
const BREADCRUMB_SCRIPT_ID = "seo-jsonld-breadcrumb";

const SEOHead = ({
  title,
  description,
  path = "",
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const normalizedPath =
      !path || path === "/" ? "/" : path.startsWith("/") ? path.replace(/\/$/, "") || "/" : `/${path}`;
    const url =
      normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
    const keywordContent = mergeKeywords(MASTER_KEYWORDS, keywords);
    const robotsContent = noindex
      ? "noindex, follow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

    document.title = fullTitle;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", robotsContent);
    setOrCreateMeta("name", "googlebot", robotsContent);
    setOrCreateMeta("name", "bingbot", robotsContent);
    setMeta('meta[name="keywords"]', "content", keywordContent);

    setOrCreateMeta("property", "og:type", "website");
    setOrCreateMeta("property", "og:site_name", SITE_NAME);
    setOrCreateMeta("property", "og:locale", "en_ZA");
    setOrCreateMeta("property", "og:title", fullTitle);
    setOrCreateMeta("property", "og:description", description);
    setOrCreateMeta("property", "og:url", url);
    setOrCreateMeta("property", "og:image", ogImage);
    if (ogImage.startsWith("https://")) {
      setOrCreateMeta("property", "og:image:secure_url", ogImage);
    }
    setOrCreateMeta("property", "og:image:alt", `${SITE_NAME} — ${title}`);

    setOrCreateMeta("name", "twitter:card", "summary_large_image");
    setOrCreateMeta("name", "twitter:title", fullTitle);
    setOrCreateMeta("name", "twitter:description", description);
    setOrCreateMeta("name", "twitter:image", ogImage);
    setOrCreateMeta("name", "twitter:image:alt", `${SITE_NAME} — ${title}`);

    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    let hreflangEnZa = document.querySelector('link[rel="alternate"][hreflang="en-ZA"]') as HTMLLinkElement | null;
    if (!hreflangEnZa) {
      hreflangEnZa = document.createElement("link");
      hreflangEnZa.rel = "alternate";
      hreflangEnZa.hreflang = "en-ZA";
      document.head.appendChild(hreflangEnZa);
    }
    hreflangEnZa.href = url;

    let hreflangDefault = document.querySelector('link[rel="alternate"][hreflang="x-default"]') as HTMLLinkElement | null;
    if (!hreflangDefault) {
      hreflangDefault = document.createElement("link");
      hreflangDefault.rel = "alternate";
      hreflangDefault.hreflang = "x-default";
      document.head.appendChild(hreflangDefault);
    }
    hreflangDefault.href = url;

    const setJsonLd = (id: string, data: object | null) => {
      const existing = document.getElementById(id);
      if (data === null) {
        existing?.remove();
        return;
      }
      let node = existing;
      if (!node) {
        node = document.createElement("script");
        node.id = id;
        node.type = "application/ld+json";
        document.head.appendChild(node);
      }
      node.textContent = JSON.stringify(data);
    };

    if (noindex) {
      setJsonLd(WEBPAGE_SCRIPT_ID, null);
      setJsonLd(BREADCRUMB_SCRIPT_ID, null);
    } else {
      const crumbs = breadcrumbItemsForPath(normalizedPath);
      const webPageLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: fullTitle,
        description,
        url,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        inLanguage: "en-ZA",
        isAccessibleForFree: true,
      };

      const breadcrumbLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((c, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: c.name,
          item: `${SITE_URL}${c.path === "/" ? "/" : c.path}`,
        })),
      };

      setJsonLd(WEBPAGE_SCRIPT_ID, webPageLd);
      if (normalizedPath === "/") {
        setJsonLd(BREADCRUMB_SCRIPT_ID, null);
      } else {
        setJsonLd(BREADCRUMB_SCRIPT_ID, breadcrumbLd);
      }
    }
  }, [title, description, path, keywords, ogImage, noindex]);

  return null;
};

export default SEOHead;
