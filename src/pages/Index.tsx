import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProductShowcase from '@/components/ProductShowcase';
import ProductDetailPage from '@/components/ProductDetailPage';
import ProductCategoryPage from '@/components/ProductCategoryPage';
import BrandsSection from '@/components/BrandsSection';
import InquiryForm from '@/components/InquiryForm';
import Footer from '@/components/Footer';
import { productCategories, productDatabase } from '@/data';

const Index = () => {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [showProductDetail, setShowProductDetail] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showCategoryPage, setShowCategoryPage] = useState(false);

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
  };

  const getCategoryProducts = (categoryName: string) => {
    const productNames = productCategories[categoryName as keyof typeof productCategories];
    return productNames?.map(name => productDatabase[name as keyof typeof productDatabase]).filter(Boolean) || [];
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation 
        onInquiryClick={handleInquiryClick} 
        onProductSelect={handleProductSelect}
      />
      
      {showCategoryPage && selectedCategory ? (
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
