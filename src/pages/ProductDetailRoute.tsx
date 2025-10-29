import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductDetailPage from '@/components/ProductDetailPage';
import InquiryForm from '@/components/InquiryForm';
import Navigation from '@/components/Navigation';
import SEOHead from '@/components/SEOHead';
import { productDatabase, productCategories } from '@/data';
import { slugToName, findCategoryForProduct } from '@/lib/urlHelpers';
import NotFound from './NotFound';

// Helper function to find product by matching name (handles various formats)
const findProductBySlug = (slug: string) => {
  const targetName = slugToName(slug);
  
  // Try exact match first
  let product = productDatabase[targetName as keyof typeof productDatabase];
  if (product) return { product, name: targetName };
  
  // Try fuzzy match (case-insensitive, ignore spaces/special chars)
  const allProducts = Object.entries(productDatabase);
  for (const [name, data] of allProducts) {
    const normalizedName = name.toLowerCase().replace(/[^a-z0-9]/g, '');
    const normalizedTarget = targetName.toLowerCase().replace(/[^a-z0-9]/g, '');
    if (normalizedName === normalizedTarget) {
      return { product: data, name };
    }
  }
  
  return null;
};

const ProductDetailRoute: React.FC = () => {
  const { category, product } = useParams<{ category: string; product: string }>();
  const navigate = useNavigate();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  if (!category || !product) {
    return <NotFound />;
  }

  const result = findProductBySlug(product);

  if (!result) {
    return <NotFound />;
  }

  const { product: productData, name: productName } = result;
  const categoryName = slugToName(category);

  // Verify the product belongs to the category
  const actualCategory = findCategoryForProduct(productName, productCategories);
  if (!actualCategory || actualCategory.toLowerCase().replace(/[^a-z0-9]/g, '') !== categoryName.toLowerCase().replace(/[^a-z0-9]/g, '')) {
    return <NotFound />;
  }

  const handleBack = () => {
    navigate('/');
  };

  const handleInquiry = () => {
    setIsInquiryOpen(true);
  };

  const handleProductSelect = (selectedProduct: any) => {
    // This will be handled by Navigation component's navigation
  };

  // Generate structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "category": categoryName,
    "description": productData.description,
    "image": productData.images,
    "brand": {
      "@type": "Brand",
      "name": "Servo Scientific Suppliers"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "url": `https://servoscientific.com/${category}/${product}`,
      "seller": {
        "@type": "Organization",
        "name": "Servo Scientific Suppliers"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${productName} | ${categoryName} | Servo Scientific`}
        description={`${productName} - ${productData.description}. High-quality ${categoryName.toLowerCase()} from Servo Scientific Suppliers.`}
        canonical={`https://servoscientific.com/${category}/${product}`}
        structuredData={structuredData}
      />
      <Navigation
        onInquiryClick={handleInquiry}
        onProductSelect={handleProductSelect}
        onAboutClick={() => navigate('/')}
        onContactClick={() => navigate('/contact')}
      />
      <ProductDetailPage
        product={productData}
        onBack={handleBack}
        onInquiry={handleInquiry}
      />
      <InquiryForm isOpen={isInquiryOpen} onClose={() => setIsInquiryOpen(false)} />
    </div>
  );
};

export default ProductDetailRoute;

