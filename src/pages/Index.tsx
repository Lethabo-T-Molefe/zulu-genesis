import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HutGrid from "@/components/HutGrid";
import PhilosophySection from "@/components/PhilosophySection";
import AcademiaSection from "@/components/AcademiaSection";
import SEOHead from "@/components/SEOHead";
import { SITE_URL } from "@/lib/seo";

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/#home`,
    name: "Sec(t) Infinity SolutionZ Home",
    description:
      "Explore the Sec(t) Infinity innovation ecosystem, including the 12 fields of mastery, Solution Lab, services, and Sec(t) Academia.",
    url: `${SITE_URL}/`,
    about: { "@id": `${SITE_URL}/#organization` },
    hasPart: [
      `${SITE_URL}/about`,
      `${SITE_URL}/fields`,
      `${SITE_URL}/solution-lab`,
      `${SITE_URL}/academia`,
      `${SITE_URL}/services`,
      `${SITE_URL}/contact`,
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Sec(t) Infinity main sections",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "About", url: `${SITE_URL}/about` },
      { "@type": "ListItem", position: 2, name: "Fields", url: `${SITE_URL}/fields` },
      { "@type": "ListItem", position: 3, name: "Solution Lab", url: `${SITE_URL}/solution-lab` },
      { "@type": "ListItem", position: 4, name: "Sec(t) Academia", url: `${SITE_URL}/academia` },
      { "@type": "ListItem", position: 5, name: "Services", url: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 6, name: "Contact", url: `${SITE_URL}/contact` },
    ],
  },
];

const Index = () => {
  return (
    <PageLayout>
      <SEOHead
        title="African Innovation Ecosystem | 12 Fields, Solution Lab, Academia"
        description="Sec(t) Infinity SolutionZ is a South African multidisciplinary innovation ecosystem uniting 12 fields of mastery, the Central Hall Solution Lab, and Sec(t) Academia to build research-led, scalable solutions for Africa through Deep Work, Kaizen, and the Goldilocks Rule."
        path="/"
        keywords="Sec(t) Infinity SolutionZ, multidisciplinary innovation, Africa innovation ecosystem, Deep Work, Kaizen, Goldilocks Rule, 12 fields of mastery, United Minds Infinite Solutions"
        structuredData={homeStructuredData}
      />
      <HeroSection />
      <AboutSection />
      <HutGrid />
      <PhilosophySection />
      <AcademiaSection />
    </PageLayout>
  );
};

export default Index;
