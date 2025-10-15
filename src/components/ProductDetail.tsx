import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Package, Thermometer, Timer, Zap } from 'lucide-react';

interface ProductDetailProps {
  isOpen: boolean;
  onClose: () => void;
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

const ProductDetail: React.FC<ProductDetailProps> = ({ isOpen, onClose, onInquiry, product }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-technical-gray dark:text-white">
            {product.name}
          </DialogTitle>
          <Badge variant="secondary" className="w-fit">
            {product.category}
          </Badge>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* All Images Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-technical-gray dark:text-white">
              All Product Images ({product.images.length})
            </h3>
            <div className="grid grid-cols-2 gap-3 max-h-[500px] overflow-y-auto pr-2">
              {product.images.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-square bg-surface-blue dark:bg-slate-800 rounded-lg flex items-center justify-center border-2 border-slate-200 dark:border-slate-700 hover:border-primary transition-all duration-300 overflow-hidden group"
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

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-technical-gray dark:text-white mb-3">
                Product Description
              </h3>
              <p className="text-technical-gray dark:text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator className="bg-slate-200 dark:bg-slate-700" />

            <div>
              <h3 className="text-lg font-semibold text-technical-gray dark:text-white mb-3 flex items-center">
                <Package className="w-5 h-5 mr-2 text-professional-blue" />
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-technical-gray dark:text-slate-300 text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Specifications */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-technical-gray dark:text-white mb-4 flex items-center">
            <Thermometer className="w-5 h-5 mr-2 text-professional-blue" />
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-blue dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-600 last:border-b-0">
                <span className="font-medium text-technical-gray dark:text-slate-300">
                  {key}:
                </span>
                <span className="text-technical-gray dark:text-white font-semibold">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Enquiry Button */}
        <div className="mt-8 flex justify-center">
          <Button 
            onClick={onInquiry}
            size="lg"
            className="bg-professional-blue hover:bg-professional-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-professional hover:shadow-professional-hover"
          >
            Make Enquiry for {product.name}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;