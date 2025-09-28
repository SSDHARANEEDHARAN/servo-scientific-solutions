import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import BrandsSection from '@/components/BrandsSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleInquiryClick = () => {
    setIsInquiryOpen(true);
  };

  const handleInquiryClose = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onInquiryClick={handleInquiryClick} />
      <HeroSection onInquiryClick={handleInquiryClick} />
      <ProductShowcase onInquiryClick={handleInquiryClick} />
      <BrandsSection />
      <Footer onInquiryClick={handleInquiryClick} />
      <InquiryForm isOpen={isInquiryOpen} onClose={handleInquiryClose} />
    </div>
  );
};

export default Index;
