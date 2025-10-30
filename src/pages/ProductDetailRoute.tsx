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
  const generateSKU = (name: string) => {
    return `SSI-${name.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10)}`;
  };

  const structuredData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productName,
    "category": categoryName,
    "image": productData.images.map(img => `https://servoscientific.com${img}`),
    "description": `High-performance ${productName} by Servo Scientific, designed for industrial and laboratory applications. ${productData.description}`,
    "sku": generateSKU(productName),
    "brand": {
      "@type": "Brand",
      "name": "Servo Scientific"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Servo Scientific"
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://servoscientific.com/products/${category}/${product}`,
      "itemCondition": "https://schema.org/NewCondition"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "125"
    }
  };

  // Breadcrumb structured data for SEO
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://servoscientific.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryName,
        "item": `https://servoscientific.com/products/${category}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": productName,
        "item": `https://servoscientific.com/products/${category}/${product}`
      }
    ]
  };

  // Combine structured data
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [structuredData, breadcrumbData]
  };

  // SEO-optimized title and description
  const seoTitle = `Buy ${productName} | ${categoryName} – Servo Scientific`;
  const seoDescription = `High-performance ${productName} by Servo Scientific, designed for industrial and laboratory applications. Explore reliable ${categoryName} at competitive prices. ${productData.description.substring(0, 100)}`;
  const seoKeywords = `${productName}, ${categoryName}, laboratory equipment, industrial equipment, scientific instruments, ${productName.toLowerCase()}, buy ${productName.toLowerCase()}, ${categoryName.toLowerCase()}`;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        canonical={`https://servoscientific.com/products/${category}/${product}`}
        structuredData={combinedStructuredData}
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

