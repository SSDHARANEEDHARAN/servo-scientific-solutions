import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AllProducts from "./pages/AllProducts";
import ServicesSupport from "./pages/ServicesSupport";
import QualityAssurance from "./pages/QualityAssurance";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<AllProducts onBackToHome={() => window.location.href = '/'} onInquiryClick={() => {}} />} />
          <Route path="/services" element={<ServicesSupport onBackToHome={() => window.location.href = '/'} onInquiryClick={() => {}} />} />
          <Route path="/quality" element={<QualityAssurance onBackToHome={() => window.location.href = '/'} />} />
          <Route path="/contact" element={<Contact onBackToHome={() => window.location.href = '/'} onInquiryClick={() => {}} />} />
          <Route path="/privacy" element={<PrivacyPolicy onBackToHome={() => window.location.href = '/'} />} />
          <Route path="/terms" element={<TermsOfService onBackToHome={() => window.location.href = '/'} />} />
          <Route path="/cookies" element={<CookiePolicy onBackToHome={() => window.location.href = '/'} />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
