import { useEffect } from "react";
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
import ProductDetailRoute from "./pages/ProductDetailRoute";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Disable right-click context menu
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable common developer tool shortcuts
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U, Ctrl+Shift+C
      if (
        e.keyCode === 123 || // F12
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) || // Ctrl+Shift+J
        (e.ctrlKey && e.keyCode === 85) || // Ctrl+U
        (e.ctrlKey && e.shiftKey && e.keyCode === 67) // Ctrl+Shift+C
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Disable text selection and copy
    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      return false;
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
    };
  }, []);

  return (
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
          <Route path="/:category/:product" element={<ProductDetailRoute />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
