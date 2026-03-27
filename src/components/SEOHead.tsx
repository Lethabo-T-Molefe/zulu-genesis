import { useEffect } from "react";

const BASE_URL = "https://sectinfinity.com";
const SITE_NAME = "Sec(t) Infinity SolutionZ";
const DEFAULT_IMAGE = `${BASE_URL}/primary-logo.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
}

const setMeta = (selector: string, attr: string, content: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.setAttribute(attr, content);
};

const SEOHead = ({
  title,
  description,
  path = "",
  keywords,
  ogImage = DEFAULT_IMAGE,
}: SEOHeadProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${BASE_URL}${path}`;

    document.title = fullTitle;

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[name="robots"]', "content", "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1");

    if (keywords) setMeta('meta[name="keywords"]', "content", keywords);

    // Open Graph
    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:image"]', "content", ogImage);

    // Twitter
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", ogImage);

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) canonical.href = url;
  }, [title, description, path, keywords, ogImage]);

  return null;
};

export default SEOHead;
