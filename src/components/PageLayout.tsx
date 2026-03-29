import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import FooterSection from "./FooterSection";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="noise-overlay min-h-screen bg-background">
      <Navbar />
      <main id="main-content">{children}</main>
      <FooterSection />
    </div>
  );
};

export default PageLayout;
