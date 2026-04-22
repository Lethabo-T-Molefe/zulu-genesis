import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
