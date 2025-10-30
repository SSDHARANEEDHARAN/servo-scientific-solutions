import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Package, ArrowLeft } from 'lucide-react';
import { productDatabase, productCategories } from '@/data';
import { generateProductUrl, findCategoryForProduct } from '@/lib/urlHelpers';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import InquiryForm from '@/components/InquiryForm';
import SEOHead from '@/components/SEOHead';

const ProductCategoryPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const categoryParam = searchParams.get('category') || '';
  
  // Get products for this category
  const categoryProducts = productCategories[categoryParam] || [];
  
  const handleProductClick = (productName: string) => {
    const category = findCategoryForProduct(productName, productCategories);
    if (category) {
      const url = generateProductUrl(category, productName);
      navigate(url);
    }
  };

  return (
    <>
      <SEOHead
        title={`${categoryParam} | Scientific & Laboratory Equipment | Servo Scientific`}
        description={`Browse our range of ${categoryParam} including high-quality scientific and laboratory equipment designed for precision and reliability.`}
        keywords={`${categoryParam}, scientific equipment, laboratory instruments`}
        canonical={`https://servoscientific.com/products?category=${encodeURIComponent(categoryParam)}`}
      />
      
      <Navigation 
        onInquiryClick={() => setIsInquiryOpen(true)}
        onAboutClick={() => navigate('/about')}
        onContactClick={() => navigate('/contact')}
      />

      <div className="min-h-screen bg-background">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-primary to-primary/80 dark:from-primary-dark dark:to-primary-dark/80 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="mb-6 border-white text-white hover:bg-white hover:text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary-dark transition-all duration-300"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryParam}</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Explore our range of high-quality {categoryParam.toLowerCase()} designed for precision and reliability.
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((productName) => {
              const product = productDatabase[productName];
              if (!product) return null;

              return (
                <Card
                  key={productName}
                  onClick={() => handleProductClick(productName)}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card dark:bg-card border border-border dark:border-border overflow-hidden"
                >
                  <CardContent className="p-0">
                    <div className="aspect-square bg-muted dark:bg-muted flex items-center justify-center overflow-hidden">
                      {product.images && product.images.length > 0 ? (
                        <img
                          src={product.images[0]}
                          alt={`${product.name} by Servo Scientific - ${categoryParam}`}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          loading="lazy"
                        />
                      ) : (
                        <div className="text-muted-foreground dark:text-muted-foreground">
                          <Package className="h-16 w-16" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-foreground dark:text-foreground group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 text-center">
                        {product.name}
                      </h3>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {categoryProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground dark:text-muted-foreground text-lg">
                No products found in this category.
              </p>
              <Button
                variant="outline"
                onClick={() => navigate('/')}
                className="mt-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back Home
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer 
        onInquiryClick={() => setIsInquiryOpen(true)}
        onAboutClick={() => navigate('/about')}
        onAllProductsClick={() => navigate('/all-products')}
        onServicesClick={() => navigate('/services')}
        onQualityClick={() => navigate('/quality')}
        onContactClick={() => navigate('/contact')}
      />
      
      <InquiryForm 
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />
    </>
  );
};

export default ProductCategoryPage;
