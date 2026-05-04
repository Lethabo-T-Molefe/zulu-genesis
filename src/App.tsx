import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider, type FilledContext } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Philosophies from "./pages/Philosophies.tsx";
import Fields from "./pages/Fields.tsx";
import FieldDetail from "./pages/FieldDetail.tsx";
import SolutionLab from "./pages/SolutionLab.tsx";
import Academia from "./pages/Academia.tsx";
import Join from "./pages/Join.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import NotFound from "./pages/NotFound.tsx";
import UnderConstruction from "./pages/UnderConstruction.tsx";
import { MAINTENANCE_MODE } from "./lib/maintenance.ts";

const queryClient = new QueryClient();

const AppRoutes = () => {
  if (MAINTENANCE_MODE) {
    return (
      <Routes>
        <Route path="*" element={<UnderConstruction />} />
      </Routes>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/philosophies" element={<Philosophies />} />
      <Route path="/fields" element={<Fields />} />
      <Route path="/fields/:slug" element={<FieldDetail />} />
      <Route path="/solution-lab" element={<SolutionLab />} />
      <Route path="/academia" element={<Academia />} />
      <Route path="/join" element={<Join />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

interface AppProps {
  router?: "browser" | "memory";
  initialPath?: string;
  helmetContext?: FilledContext;
}

const App = ({ router = "browser", initialPath = "/", helmetContext }: AppProps) => {
  const Router = router === "memory" ? MemoryRouter : BrowserRouter;
  const routerProps =
    router === "memory" ? { initialEntries: [initialPath] } : {};

  return (
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Router {...routerProps}>
            <AppRoutes />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
