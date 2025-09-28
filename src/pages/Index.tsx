import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import ProductDetailPage from '@/components/ProductDetailPage';
import BrandsSection from '@/components/BrandsSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductDetail, setShowProductDetail] = useState(false);

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

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onInquiryClick={handleInquiryClick} 
        onProductSelect={handleProductSelect}
      />
      
      {showProductDetail && selectedProduct ? (
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
        </>
      )}
      
      <Footer onInquiryClick={handleInquiryClick} />
      <InquiryForm isOpen={isInquiryOpen} onClose={handleInquiryClose} />
    </div>
  );
};

export default Index;
