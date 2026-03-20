import PageLayout from "@/components/PageLayout";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HutGrid from "@/components/HutGrid";
import PhilosophySection from "@/components/PhilosophySection";
import AcademiaSection from "@/components/AcademiaSection";

const Index = () => {
  return (
    <PageLayout>
      <HeroSection />
      <AboutSection />
      <HutGrid />
      <PhilosophySection />
      <AcademiaSection />
    </PageLayout>
  );
};

export default Index;
