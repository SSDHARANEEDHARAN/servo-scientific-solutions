import React from 'react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Package, Thermometer, ArrowLeft } from 'lucide-react';

interface ProductDetailPageProps {
  onBack: () => void;
  onInquiry: () => void;
  product: {
    name: string;
    category: string;
    images: string[];
    specifications: {
      [key: string]: string;
    };
    features: string[];
    description: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onBack, onInquiry, product }) => {
  return (
    <div className="min-h-screen bg-surface-blue dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        {/* Product Header */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-card p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-technical-gray dark:text-white mb-2">
                {product.name}
              </h1>
              <Badge variant="secondary" className="w-fit">
                {product.category}
              </Badge>
            </div>
            <Button 
              onClick={onInquiry}
              size="lg"
              className="bg-professional-blue hover:bg-professional-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-professional hover:shadow-professional-hover mt-4 md:mt-0"
            >
              Make Enquiry
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* All Images Gallery */}
          <div className="bg-white dark:bg-slate-800 rounded-lg shadow-card p-6">
            <h2 className="text-xl font-semibold text-technical-gray dark:text-white mb-4">
              Product Images ({product.images.length})
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square bg-surface-blue dark:bg-slate-700 rounded-lg flex items-center justify-center border-2 border-slate-200 dark:border-slate-600 hover:border-primary transition-all duration-300 overflow-hidden group"
                >
                  <img 
                    src={image} 
                    alt={`${product.name} - View ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Description */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-card p-6">
              <h2 className="text-xl font-semibold text-technical-gray dark:text-white mb-4">
                Product Description
              </h2>
              <p className="text-technical-gray dark:text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-card p-6">
              <h2 className="text-xl font-semibold text-technical-gray dark:text-white mb-4 flex items-center">
                <Package className="w-5 h-5 mr-2 text-professional-blue" />
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-technical-gray dark:text-slate-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        <div className="bg-white dark:bg-slate-800 rounded-lg shadow-card p-8 mt-8">
          <h2 className="text-2xl font-semibold text-technical-gray dark:text-white mb-6 flex items-center">
            <Thermometer className="w-6 h-6 mr-3 text-professional-blue" />
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="bg-surface-blue dark:bg-slate-700 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                <div className="font-medium text-technical-gray dark:text-slate-300 text-sm mb-1">
                  {key}
                </div>
                <div className="text-technical-gray dark:text-white font-semibold">
                  {value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-hero rounded-lg p-8 mt-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Purchase {product.name}?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get in touch with our technical team for detailed specifications, pricing, and custom configurations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onInquiry}
              size="lg"
              variant="secondary"
              className="bg-white text-professional-blue hover:bg-slate-100"
            >
              Request Quote
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-professional-blue"
            >
              Download Datasheet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;