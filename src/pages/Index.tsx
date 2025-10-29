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
    "name": "Servo Scientific Suppliers",
    "alternateName": "Servo Scientific Supplier",
    "description": "Leading manufacturer and supplier of laboratory and industrial instruments including hot air ovens, muffle furnaces, industrial heaters, autoclaves, environmental chambers, and temperature sensors across India",
    "url": "https://www.nextcraft.co.in",
    "logo": "https://www.nextcraft.co.in/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "telephone": "+91-XXXXXXXXXX",
      "email": "info@servoscientific.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laboratory & Industrial Equipment",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Heating Instruments",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Hot Air Oven",
                "category": "Heating Instruments"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Muffle Furnace",
                "category": "Heating Instruments"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Laboratory Incubator",
                "category": "Heating Instruments"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Industrial Furnaces",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Box Furnace",
                "category": "Industrial Furnace"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Tube Furnace",
                "category": "Industrial Furnace"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Environmental Chambers",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Humidity Chamber",
                "category": "Environmental Chamber"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Temperature Chamber",
                "category": "Environmental Chamber"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Industrial Heaters",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Cartridge Heater",
                "category": "Heater"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Band Heater",
                "category": "Heater"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Microbiology Instruments",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Laminar Air Flow",
                "category": "Microbiology Instruments"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Autoclave",
                "category": "Microbiology Instruments"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Temperature Sensors",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "K Type Thermocouple",
                "category": "Thermocouple"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "RTD Sensors",
                "category": "Thermocouple"
              }
            }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Servo Scientific Suppliers | Laboratory & Industrial Equipment Manufacturer India"
        description="Leading manufacturer of laboratory instruments - Hot Air Ovens, Muffle Furnaces, Industrial Heaters, Autoclaves, Environmental Chambers & Temperature Sensors. Quality equipment for research, testing & industrial applications across India."
        keywords="laboratory equipment manufacturer, hot air oven, muffle furnace, industrial heaters, autoclave, environmental chamber, thermocouple, scientific instruments India"
        canonical="https://www.nextcraft.co.in/"
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
