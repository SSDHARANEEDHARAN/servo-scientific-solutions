import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { CheckCircle, Package, Thermometer, Timer, Zap, Download } from 'lucide-react';
import { generateProductDatasheet } from '@/utils/pdf';
import { toast } from 'sonner';

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
  const handleDownloadDatasheet = async () => {
    try {
      toast.info('Generating datasheet...');
      await generateProductDatasheet(product);
      toast.success('Datasheet downloaded successfully!');
    } catch (error) {
      console.error('Error generating datasheet:', error);
      toast.error('Failed to generate datasheet. Please try again.');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            {product.name}
          </DialogTitle>
          <Badge variant="secondary" className="w-fit">
            {product.category}
          </Badge>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          {/* Product Images Carousel */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Product Images ({product.images.length})
            </h3>
            <Carousel className="w-full">
              <CarouselContent>
                {product.images.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="aspect-square bg-surface-blue dark:bg-slate-800 rounded-lg flex items-center justify-center border-2 border-slate-200 dark:border-slate-700 overflow-hidden">
                      <img 
                        src={image} 
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Product Description
              </h3>
              <p className="text-technical-gray dark:text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator className="bg-slate-200 dark:bg-slate-700" />

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center">
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
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <Thermometer className="w-5 h-5 mr-2 text-professional-blue" />
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-surface-blue dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center py-2 border-b border-slate-200 dark:border-slate-600 last:border-b-0">
                <span className="font-medium text-technical-gray dark:text-slate-300">
                  {key}:
                </span>
                <span className="text-foreground font-semibold">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={onInquiry}
            size="lg"
            className="bg-professional-blue hover:bg-professional-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-professional hover:shadow-professional-hover"
          >
            Make Enquiry for {product.name}
          </Button>
          <Button 
            onClick={handleDownloadDatasheet}
            size="lg"
            variant="outline"
            className="border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Datasheet
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductDetail;