import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  MASTER_KEYWORDS,
  mergeKeywords,
  breadcrumbItemsForPath,
  buildBaseStructuredData,
  getAbsoluteUrl,
  normalizeSitePath,
  SITE_LOCALE,
  type SeoMetaInput,
} from "@/lib/seo";
type SEOHeadProps = SeoMetaInput;

const SEOHead = ({
  title,
  description,
  path = "",
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  breadcrumbLabel,
  structuredData,
}: SEOHeadProps) => {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const normalizedPath = normalizeSitePath(path);
  const url = getAbsoluteUrl(normalizedPath);
  const keywordContent = mergeKeywords(MASTER_KEYWORDS, keywords);
  const robotsContent = noindex
    ? "noindex, follow"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  const crumbs = breadcrumbItemsForPath(normalizedPath, breadcrumbLabel);

  const pageStructuredData = noindex
    ? []
    : [
        ...buildBaseStructuredData(normalizedPath).slice(0, 2),
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          name: fullTitle,
          description,
          url,
          isPartOf: { "@id": `${getAbsoluteUrl("/")}#website` },
          about: { "@id": `${getAbsoluteUrl("/")}#organization` },
          inLanguage: "en-ZA",
          isAccessibleForFree: true,
        },
        ...(normalizedPath === "/"
          ? []
          : [
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: crumbs.map((crumb, index) => ({
                  "@type": "ListItem",
                  position: index + 1,
                  name: crumb.name,
                  item: getAbsoluteUrl(crumb.path),
                })),
              },
            ]),
        ...(Array.isArray(structuredData)
          ? structuredData
          : structuredData
            ? [structuredData]
            : []),
      ];

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en-ZA" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordContent} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      <meta name="bingbot" content={robotsContent} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      {ogImage.startsWith("https://") && (
        <meta property="og:image:secure_url" content={ogImage} />
      )}
      <meta property="og:image:alt" content={`${SITE_NAME} - ${title}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} - ${title}`} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-ZA" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
      {pageStructuredData.map((item, index) => (
        <script key={`${normalizedPath}-ld-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
