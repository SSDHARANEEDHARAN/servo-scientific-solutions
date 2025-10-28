import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import ProductDetailPage from '@/components/ProductDetailPage';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import AboutPage from '@/components/AboutPage';
import BrandsSection from '@/components/BrandsSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { productCategories, productDatabase } from '@/data';

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategoryPage, setShowCategoryPage] = useState(false);
  const [showAboutPage, setShowAboutPage] = useState(false);

  const handleInquiryClick = () => {
    setIsInquiryOpen(true);
  };

  const handleInquiryClose = () => {
    setIsInquiryOpen(false);
  };

  const handleProductSelect = (product: any) => {
    setSelectedProduct(product);
    setShowProductDetail(true);
    // Scroll to top when showing product detail
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToProducts = () => {
    setShowProductDetail(false);
    setSelectedProduct(null);
  };

  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowCategoryPage(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setShowCategoryPage(false);
    setSelectedCategory(null);
    setShowProductDetail(false);
    setSelectedProduct(null);
    setShowAboutPage(false);
  };

  const handleAboutClick = () => {
    setShowAboutPage(true);
    setShowCategoryPage(false);
    setShowProductDetail(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryProducts = (categoryName: string) => {
    const productNames = productCategories[categoryName as keyof typeof productCategories];
    return productNames?.map(name => productDatabase[name as keyof typeof productDatabase]).filter(Boolean) || [];
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Servo Scientific Supplier",
    "description": "Leading provider of laboratory and industrial instruments including ovens, furnaces, heaters, autoclaves, and sensors",
    "url": "https://servo-scientific-supplier.lovable.app",
    "logo": "https://servo-scientific-supplier.lovable.app/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "email": "info@servoscientific.com"
    },
    "sameAs": [],
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "itemOffered": [
        {
          "@type": "Product",
          "name": "Laboratory Heating Instruments",
          "category": "Scientific Equipment"
        },
        {
          "@type": "Product",
          "name": "Industrial Furnaces",
          "category": "Scientific Equipment"
        },
        {
          "@type": "Product",
          "name": "Environmental Chambers",
          "category": "Scientific Equipment"
        },
        {
          "@type": "Product",
          "name": "Microbiology Instruments",
          "category": "Scientific Equipment"
        },
        {
          "@type": "Product",
          "name": "Thermocouples & Sensors",
          "category": "Scientific Equipment"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Servo Scientific Supplier | Scientific & Laboratory Equipment Manufacturer"
        description="Servo Scientific Supplier — leading provider of lab and industrial instruments including ovens, furnaces, heaters, autoclaves, and sensors."
        canonical="https://servo-scientific-supplier.lovable.app/"
        structuredData={structuredData}
      />
      <Navigation
        onInquiryClick={handleInquiryClick} 
        onProductSelect={handleProductSelect}
        onAboutClick={handleAboutClick}
      />
      
      {showAboutPage ? (
        <AboutPage
          onBack={handleBackToHome}
          onInquiryClick={handleInquiryClick}
        />
      ) : showCategoryPage && selectedCategory ? (
        <ProductCategoryPage
          categoryName={selectedCategory}
          products={getCategoryProducts(selectedCategory)}
          onBack={handleBackToHome}
          onInquiryClick={handleInquiryClick}
        />
      ) : showProductDetail && selectedProduct ? (
        <ProductDetailPage
          product={selectedProduct}
          onBack={handleBackToProducts}
          onInquiry={handleInquiryClick}
        />
      ) : (
        <>
          <HeroSection onInquiryClick={handleInquiryClick} />
          <ProductShowcase 
            onInquiryClick={handleInquiryClick}
            onProductSelect={handleProductSelect}
          />
          <BrandsSection />
          <Footer 
            onInquiryClick={handleInquiryClick} 
            onCategorySelect={handleCategorySelect}
          />
        </>
      )}
      <InquiryForm isOpen={isInquiryOpen} onClose={handleInquiryClose} />
    </div>
  );
};

export default Index;
