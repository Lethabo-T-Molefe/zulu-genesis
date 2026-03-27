import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HutGrid from "@/components/HutGrid";
import PhilosophySection from "@/components/PhilosophySection";
import AcademiaSection from "@/components/AcademiaSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <PageLayout>
      <SEOHead
        title="United Minds. Infinite Solutions."
        description="Sec(t) Infinity SolutionZ is a multidisciplinary innovation ecosystem uniting 12 fields of mastery to position Africa as a global producer of science, technology, and entrepreneurial excellence. Guided by Deep Work, Kaizen, and the Goldilocks Rule."
        path="/"
        keywords="Sec(t) Infinity SolutionZ, multidisciplinary innovation, Africa innovation ecosystem, Deep Work, Kaizen, Goldilocks Rule, 12 fields of mastery, United Minds Infinite Solutions"
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
