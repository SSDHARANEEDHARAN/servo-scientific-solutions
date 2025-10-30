import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, Download, MessageCircle, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ProductCategoryPageProps {
  categoryName: string;
  products: any[];
  onBack: () => void;
  onInquiryClick: () => void;
}

const ProductCategoryPage: React.FC<ProductCategoryPageProps> = ({
  categoryName,
  products,
  onBack,
  onInquiryClick
}) => {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const currentProduct = products[currentProductIndex];

  const scrollToProduct = (index: number) => {
    setCurrentProductIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const productWidth = container.offsetWidth / 3; // Show 3 products at a time
      const scrollPosition = index * productWidth - container.offsetWidth / 2 + productWidth / 2;
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrevious = () => {
    const newIndex = currentProductIndex > 0 ? currentProductIndex - 1 : products.length - 1;
    scrollToProduct(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentProductIndex < products.length - 1 ? currentProductIndex + 1 : 0;
    scrollToProduct(newIndex);
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Download Started",
      description: `${currentProduct.name} brochure is being downloaded.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-primary-foreground hover:bg-primary-foreground/10 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Explore our comprehensive range of {categoryName.toLowerCase()} designed for precision, reliability, and performance.
          </p>
        </div>
      </div>

      {/* Product Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-8">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrevious}
            className="h-12 w-12"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              {currentProduct?.name}
            </h2>
            <p className="text-muted-foreground">
              {currentProductIndex + 1} of {products.length}
            </p>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="h-12 w-12"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Horizontal Scrollable Product Images */}
        <div className="relative mb-12">
          <div
            ref={scrollContainerRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-4"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {products.map((product, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-80 cursor-pointer transition-all duration-300 ${
                  index === currentProductIndex
                    ? 'scale-105 ring-4 ring-primary ring-opacity-50'
                    : 'opacity-70 hover:opacity-90'
                }`}
                style={{ scrollSnapAlign: 'center' }}
                onClick={() => scrollToProduct(index)}
              >
                <Card className="overflow-hidden bg-card">
                  <div className="aspect-square bg-gradient-card p-8 flex items-center justify-center">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={`${product.name} by Servo Scientific – High-quality ${categoryName} equipment`}
                      title={`${product.name} - Professional ${categoryName}`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg text-foreground mb-2">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {product.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Current Product Details */}
        {currentProduct && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Information */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Product Overview
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentProduct.description || `Professional ${currentProduct.name} designed for laboratory and industrial applications. Built with precision engineering and high-quality materials for reliable performance.`}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-foreground mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentProduct.features?.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  )) || [
                    "High precision control",
                    "Digital display",
                    "Safety features",
                    "Energy efficient",
                    "Easy maintenance",
                    "Durable construction"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h4 className="text-xl font-semibold text-foreground mb-4">Applications</h4>
                <div className="flex flex-wrap gap-2">
                  {currentProduct.applications?.map((app: string, index: number) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {app}
                    </Badge>
                  )) || [
                    "Laboratory Testing",
                    "Quality Control",
                    "Research & Development",
                    "Industrial Processing"
                  ].map((app, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Technical Specifications */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Technical Specifications
              </h3>
              
              <Card className="bg-card mb-8">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {currentProduct.specifications ? (
                      Object.entries(currentProduct.specifications).map(([key, value], index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                          <span className="font-medium text-foreground">{key}</span>
                          <span className="text-muted-foreground">{value as string}</span>
                        </div>
                      ))
                    ) : (
                      // Default specifications
                      [
                        { label: "Temperature Range", value: "Ambient to 300°C" },
                        { label: "Accuracy", value: "±1°C" },
                        { label: "Capacity", value: "50 Liters" },
                        { label: "Power Supply", value: "220V, 50Hz" },
                        { label: "Power Consumption", value: "2000W" },
                        { label: "Dimensions", value: "600 x 500 x 400 mm" },
                        { label: "Weight", value: "45 kg" },
                        { label: "Material", value: "Stainless Steel" }
                      ].map((spec, index) => (
                        <div key={index} className="flex justify-between py-2 border-b border-border last:border-b-0">
                          <span className="font-medium text-foreground">{spec.label}</span>
                          <span className="text-muted-foreground">{spec.value}</span>
                        </div>
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  onClick={onInquiryClick}
                  className="w-full bg-primary text-muted-foreground dark:text-foreground hover:text-primary dark:hover:text-primary hover:bg-primary/90 transition-all duration-300"
                  size="lg"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Make Enquiry for {currentProduct.name}
                </Button>
                
                <Button
                  variant="outline"
                  onClick={handleDownloadBrochure}
                  className="w-full text-muted-foreground dark:text-foreground hover:text-primary dark:hover:text-primary transition-all duration-300"
                  size="lg"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCategoryPage;