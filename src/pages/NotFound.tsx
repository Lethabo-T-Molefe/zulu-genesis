import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageLayout from "@/components/PageLayout";
import { brandLogos } from "@/lib/brand-assets";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex min-h-[65vh] flex-col items-center justify-center px-6 py-24 text-center">
        <img
          src={brandLogos.submark}
          alt=""
          className="mb-8 h-16 w-16 object-contain opacity-90 sm:h-20 sm:w-20"
        />
        <h1 className="text-display text-5xl text-foreground md:text-7xl">404</h1>
        <p className="mt-4 max-w-md text-ash">This page does not exist. The village path ends here.</p>
        <Link to="/" className="btn-ember mt-10 text-xs">
          Return Home <span className="text-base leading-none">→</span>
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
