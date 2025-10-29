import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import BrandsSection from '@/components/BrandsSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const navigate = useNavigate();

  const handleInquiryClick = () => {
    setIsInquiryOpen(true);
  };

  const handleInquiryClose = () => {
    setIsInquiryOpen(false);
  };

  const handleAllProductsClick = () => {
    navigate('/products');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handleContactClick = () => {
    navigate('/contact');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Servo Scientific Supplier",
    "description": "Leading provider of laboratory and industrial instruments including ovens, furnaces, heaters, autoclaves, and sensors",
    "url": "https://servoscientific.com",
    "logo": "https://servoscientific.com/logo.png",
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
        canonical="https://servoscientific.com/"
        structuredData={structuredData}
      />
      <Navigation
        onInquiryClick={handleInquiryClick} 
        onProductSelect={() => {}}
        onAboutClick={handleAboutClick}
        onContactClick={handleContactClick}
      />
      
      <HeroSection 
        onInquiryClick={handleInquiryClick} 
        onAllProductsClick={handleAllProductsClick}
      />
      <ProductShowcase 
        onInquiryClick={handleInquiryClick}
        onProductSelect={() => {}}
      />
      <BrandsSection />
      <Footer 
        onInquiryClick={handleInquiryClick} 
        onCategorySelect={() => {}}
        onAboutClick={handleAboutClick}
        onAllProductsClick={handleAllProductsClick}
        onServicesClick={() => navigate('/services')}
        onQualityClick={() => navigate('/quality')}
        onContactClick={handleContactClick}
      />
      
      <InquiryForm isOpen={isInquiryOpen} onClose={handleInquiryClose} />
    </div>
  );
};

export default Index;
