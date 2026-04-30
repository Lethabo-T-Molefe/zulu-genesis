/** Canonical site URL — must match production deploy. */
export const SITE_URL = "https://sectinfinity.com";
export const SITE_NAME = "Sec(t) Infinity SolutionZ";
export const SITE_TAGLINE = "United Minds. Infinite Solutions.";
export const DEFAULT_OG_IMAGE = `${SITE_URL}/primary-logo.png`;
export const SITE_PHONE = "+27 73 386 3841";
export const SITE_EMAIL = ["info", "sectinfinity.com"].join("@");
export const SITE_LOCALE = "en_ZA";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface SeoMetaInput {
  title: string;
  description: string;
  path?: string;
  keywords?: string;
  ogImage?: string;
  noindex?: boolean;
  breadcrumbLabel?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

/**
 * Broad keyword coverage for meta keywords and consistency across pages.
 * Modern search engines weight visible content and titles more heavily than meta keywords;
 * this list complements on-page copy and structured data.
 */
export const MASTER_KEYWORDS = [
  "sectinfinity",
  "sect infinity",
  "sec t infinity",
  "sec(t)infinity",
  "sec t infinity solutionz",
  "sectinfinity.com",
  "Sec(t) Infinity",
  "Sec(t) Infinity SolutionZ",
  "Sec Infinity",
  "Sec Infinity SolutionZ",
  "SolutionZ",
  "Infinity SolutionZ",
  "sectinfinity africa",
  "sectinfinity south africa",
  SITE_TAGLINE,
  "United Minds Infinite Solutions",
  "united minds",
  "infinite solutions",
  "African innovation",
  "Africa innovation ecosystem",
  "South Africa innovation",
  "Johannesburg innovation",
  "Pretoria innovation",
  "Cape Town innovation",
  "Durban innovation",
  "Pan African innovation",
  "innovation in Africa",
  "African research ecosystem",
  "multidisciplinary innovation",
  "innovation ecosystem",
  "innovation lab Africa",
  "research ecosystem",
  "future of African innovation",
  "12 fields of mastery",
  "12 fields of specialization",
  "Village of Knowledge",
  "knowledge village",
  "knowledge hub",
  "Infinity Business Department",
  "multidisciplinary business model",
  "Deep Work",
  "Kaizen",
  "Goldilocks Rule",
  "Divine Triangle of Success",
  "Deep Work Kaizen Goldilocks Rule",
  "productivity philosophy",
  "high performance framework",
  "continuous improvement framework",
  "Central Hall",
  "Solution Lab",
  "Sec(t) Solution Lab",
  "innovation solution lab",
  "integrated solutions",
  "Integrated Solution Models",
  "systems integration",
  "complex problem solving",
  "knowledge synthesis",
  "multidisciplinary research",
  "cross disciplinary collaboration",
  "interdisciplinary solutions",
  "transdisciplinary innovation",
  "Sec(t) Academia",
  "Sec(t) Infinity Academia",
  "Sec Infinity Academia",
  "hybrid tutoring",
  "holiday coding classes",
  "coding bootcamp South Africa",
  "coding classes for students",
  "programming classes South Africa",
  "python classes South Africa",
  "javascript classes South Africa",
  "typescript classes South Africa",
  "online tutoring South Africa",
  "physical and online tutoring",
  "grade 8 tutoring",
  "high school tutoring",
  "postgraduate tutoring",
  "academic support South Africa",
  "STEM Africa",
  "STEM education",
  "STEM tutoring",
  "AI education Africa",
  "future skills training",
  "research and development",
  "research partnerships",
  "applied research",
  "innovation research",
  "science and technology Africa",
  "engineering innovation",
  "technology innovation",
  "chemical engineering",
  "process engineering",
  "industrial engineering",
  "electrical engineering",
  "mechanical engineering",
  "civil engineering",
  "artificial intelligence",
  "machine learning",
  "AI solutions",
  "AI consulting",
  "AI and data science",
  "software engineering",
  "cybersecurity",
  "cloud architecture",
  "digital transformation",
  "human computer interaction",
  "data science",
  "statistical modelling",
  "data analytics",
  "entrepreneurship",
  "entrepreneurship Africa",
  "startup ecosystem Africa",
  "business strategy",
  "financial intelligence",
  "market intelligence",
  "circular economy",
  "systems thinking",
  "systems design",
  "strategic design",
  "organizational design",
  "strategic planning",
  "knowledge management",
  "intellectual network",
  "join innovation network",
  "join researchers network",
  "join engineers network",
  "join multidisciplinary team",
  "researchers and engineers",
  "scientists and innovators",
  "entrepreneurs and technologists",
  "African heritage innovation",
  "indigenous knowledge systems",
  "cultural heritage innovation",
  "visual arts and design",
  "graphic design Africa",
  "ui ux design Africa",
  "creative industries Africa",
  "creative technology",
  "film and storytelling Africa",
  "social sciences research",
  "community development research",
  "behavioral science Africa",
  "law and governance",
  "intellectual property",
  "patent law",
  "regulatory compliance",
  "policy design",
  "philosophy and ethics",
  "innovation ethics",
  "innovation consulting",
  "technology transfer",
  "rapid prototyping",
  "incubation services",
  "impact measurement",
  "project management",
  "sustainable innovation",
  "sustainable development Africa",
  "future focused solutions",
  "african talent development",
  "learn coding in South Africa",
  "best innovation ecosystem Africa",
  "where to join innovation network",
  "Sibusiso Gumede",
  "Sibusiso Bhekani Nhlonipho Gumede",
  "Mnguni",
  "Zafenate Infinity",
  "Lethabo Molefe",
  "Tebogo Sako",
  "Ngwako Brendan Lebea",
  "Brendan Lebea",
  "contact sectinfinity",
  "contact sec t infinity",
  "sectinfinity email",
].join(", ");

const PATH_LABELS: Record<string, string> = {
  about: "About",
  fields: "Fields of Specialization",
  philosophies: "Philosophies",
  "solution-lab": "Solution Lab",
  academia: "Sec(t) Academia",
  services: "Services",
  join: "Join the Network",
  contact: "Contact",
};

export function mergeKeywords(...chunks: (string | undefined)[]): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const chunk of chunks) {
    if (!chunk) continue;
    for (const part of chunk.split(",")) {
      const t = part.trim();
      if (!t || seen.has(t)) continue;
      seen.add(t);
      out.push(t);
    }
  }
  return out.join(", ");
}

export function normalizeSitePath(path = ""): string {
  if (!path || path === "/") return "/";
  return path.startsWith("/") ? path.replace(/\/$/, "") || "/" : `/${path}`;
}

export function getAbsoluteUrl(path = "/"): string {
  const normalizedPath = normalizeSitePath(path);
  return normalizedPath === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`;
}

export function breadcrumbItemsForPath(pathname: string, leafLabel?: string): BreadcrumbItem[] {
  const items: BreadcrumbItem[] = [{ name: "Home", path: "/" }];
  const clean = pathname.replace(/\/$/, "") || "/";
  if (clean === "/") return items;
  const parts = clean.slice(1).split("/");

  parts.forEach((segment, index) => {
    const path = `/${parts.slice(0, index + 1).join("/")}`;
    const isLeaf = index === parts.length - 1;
    const label =
      isLeaf && leafLabel
        ? leafLabel
        : PATH_LABELS[segment] ??
          segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

    if (!items.some((item) => item.path === path)) {
      items.push({ name: label, path });
    }
  });

  return items;
}

export function buildBaseStructuredData(path: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: ["Sec(t) Infinity", "sectinfinity", "SolutionZ"],
      slogan: SITE_TAGLINE,
      url: SITE_URL,
      logo: DEFAULT_OG_IMAGE,
      image: DEFAULT_OG_IMAGE,
      email: SITE_EMAIL,
      telephone: SITE_PHONE,
      areaServed: {
        "@type": "Place",
        name: "Africa",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: SITE_EMAIL,
          telephone: SITE_PHONE,
          areaServed: "ZA",
          availableLanguage: ["en"],
          url: getAbsoluteUrl("/contact"),
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      url: SITE_URL,
      description:
        "A multidisciplinary innovation ecosystem uniting 12 fields of mastery across research, engineering, technology, education, business, and strategic design in Africa.",
      inLanguage: "en-ZA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${getAbsoluteUrl(path)}#webpage`,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-ZA",
    },
  ];
}
