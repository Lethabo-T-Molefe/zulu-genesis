import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import HutGrid from "@/components/HutGrid";
import PhilosophySection from "@/components/PhilosophySection";
import AcademiaSection from "@/components/AcademiaSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <HutGrid />
      <PhilosophySection />
      <AcademiaSection />
      <FooterSection />
    </div>
  );
};

export default Index;
