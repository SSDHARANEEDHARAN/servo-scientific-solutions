import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Thermometer, Factory, TestTube, Zap, Microscope, Activity } from 'lucide-react';
import ProductDetail from './ProductDetail';

interface ProductShowcaseProps {
  onInquiryClick: () => void;
}

const productCategories = [
  {
    title: "Heating Instruments",
    icon: Thermometer,
    description: "Precision heating solutions for laboratory and industrial applications",
    products: ["Hot Air Oven", "Water Bath", "Hot Plate"],
    image: "heating-instruments"
  },
  {
    title: "Industrial Furnace", 
    icon: Factory,
    description: "High-temperature furnaces for specialized manufacturing processes",
    products: ["High Temperature Furnace", "Lab Furnace", "Muffle Furnace"],
    image: "industrial-furnace"
  },
  {
    title: "Environmental Chamber",
    icon: TestTube,
    description: "Controlled environment testing solutions for quality assurance",
    products: ["Salt Spray Chamber", "Humidity Chamber", "Climate Chamber"],
    image: "environmental-chamber"
  },
  {
    title: "Heater",
    icon: Zap,
    description: "Specialized heating elements for diverse industrial applications",
    products: ["Cartridge Heater", "Immersion Heater", "Band Heater"],
    image: "heater"
  },
  {
    title: "Microbiology Instruments",
    icon: Microscope,
    description: "Complete range of microbiological and laboratory equipment",
    products: ["Autoclave", "Incubator", "Laminar Air Flow"],
    image: "microbiology"
  },
  {
    title: "Thermocouple",
    icon: Activity,
    description: "Temperature sensing solutions for accurate measurements",
    products: ["RTD Sensors", "J Type", "K Type"],
    image: "thermocouple"
  }
];

const hotAirOvenProduct = {
  name: "Hot Air Oven",
  category: "Heating Instruments",
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  specifications: {
    "Temperature Range": "50°C to 300°C",
    "Chamber Size": "450 x 450 x 450 mm",
    "Temperature Accuracy": "±2°C",
    "Power Rating": "3.5 kW",
    "Timer Range": "0-999 minutes",
    "Construction": "SS 304 Inner, MS Outer",
    "Insulation": "Glass Wool",
    "Controller": "Digital PID"
  },
  features: [
    "Uniform temperature distribution",
    "Digital temperature controller with timer",
    "Over temperature protection",
    "Powder coated exterior finish",
    "Double wall construction for energy efficiency",
    "Perforated shelves for better air circulation",
    "Door lock safety system",
    "Low maintenance and easy operation"
  ],
  description: "Our Hot Air Oven provides precise temperature control and uniform heat distribution for laboratory drying, sterilization, and heat treatment applications. Built with high-quality materials and advanced temperature control systems."
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onInquiryClick }) => {
  const [selectedProduct, setSelectedProduct] = useState<typeof hotAirOvenProduct | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const handleProductClick = (productName: string) => {
    if (productName === "Hot Air Oven") {
      setSelectedProduct(hotAirOvenProduct);
      setIsProductDetailOpen(true);
    }
  };

  const handleCloseProductDetail = () => {
    setIsProductDetailOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-20 bg-surface-blue dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-technical-gray dark:text-white mb-4">
            Our Product Categories
          </h2>
          <p className="text-xl text-technical-gray dark:text-slate-300 max-w-3xl mx-auto">
            Discover our comprehensive range of scientific and industrial equipment,
            engineered for precision and reliability across diverse applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card key={category.title} className="group hover:shadow-professional transition-all duration-300 bg-gradient-card dark:bg-slate-800 border-0 dark:border dark:border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-professional-blue-light rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-professional-blue" />
                    </div>
                    <h3 className="text-xl font-semibold text-technical-gray dark:text-white group-hover:text-professional-blue dark:group-hover:text-blue-300 transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  
                  <p className="text-technical-gray dark:text-slate-300 mb-4 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                   <div className="mb-6">
                     <h4 className="font-medium text-technical-gray dark:text-slate-300 mb-2">Popular Products:</h4>
                     <ul className="text-sm text-technical-gray dark:text-slate-400 space-y-1">
                       {category.products.map((product) => (
                         <li 
                           key={product} 
                           className="flex items-center cursor-pointer hover:text-professional-blue dark:hover:text-blue-300 transition-colors"
                           onClick={() => handleProductClick(product)}
                         >
                           <div className="w-1.5 h-1.5 bg-professional-blue rounded-full mr-2"></div>
                           {product}
                         </li>
                       ))}
                     </ul>
                   </div>
                  
                  <div className="flex space-x-2">
                    <Button 
                      variant="professional" 
                      size="sm" 
                      className="flex-1"
                    >
                      View Products
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    
                    <Button 
                      variant="inquiry" 
                      size="sm"
                      onClick={onInquiryClick}
                    >
                      Enquiry
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-card p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-technical-gray dark:text-white mb-4">
              Need Custom Solutions?
            </h3>
            <p className="text-technical-gray dark:text-slate-300 mb-6">
              Our engineering team can design and manufacture custom equipment 
              tailored to your specific requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="professional" size="lg" onClick={onInquiryClick}>
                Request Custom Quote
              </Button>
              <Button variant="outline" size="lg">
                Download Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Product Detail Modal */}
        {selectedProduct && (
          <ProductDetail
            isOpen={isProductDetailOpen}
            onClose={handleCloseProductDetail}
            onInquiry={onInquiryClick}
            product={selectedProduct}
          />
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;