import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { ArrowRight, Thermometer, Factory, TestTube, Zap, Microscope, Activity, ChevronDown } from 'lucide-react';
import ProductDetail from './ProductDetail';

interface ProductShowcaseProps {
  onInquiryClick: () => void;
  onProductSelect?: (product: any) => void;
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

const productDatabase = {
  "Hot Air Oven": {
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
  },
  "Water Bath": {
    name: "Water Bath",
    category: "Heating Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Ambient +5°C to 100°C",
      "Chamber Size": "300 x 200 x 150 mm",
      "Temperature Accuracy": "±0.5°C",
      "Power Rating": "2 kW",
      "Capacity": "9 Liters",
      "Construction": "SS 304 Inner Chamber",
      "Controller": "Digital Temperature Display",
      "Safety": "Over Temperature Cut-off"
    },
    features: [
      "Precise temperature control",
      "Digital display with timer",
      "Uniform heating throughout",
      "Corrosion resistant construction",
      "Energy efficient design",
      "Safety thermal cut-off",
      "Easy to clean and maintain",
      "Compact desktop design"
    ],
    description: "Laboratory water bath designed for consistent temperature heating applications in research, clinical, and industrial laboratories."
  },
  "Hot Plate": {
    name: "Hot Plate",
    category: "Heating Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "50°C to 350°C",
      "Plate Size": "200 x 200 mm",
      "Power Rating": "1.5 kW",
      "Material": "Aluminum Alloy Plate",
      "Controller": "Digital PID",
      "Display": "LED Digital",
      "Safety": "Over Heat Protection",
      "Accuracy": "±2°C"
    },
    features: [
      "Fast heating and cooling",
      "Digital temperature control",
      "Uniform heat distribution",
      "Chemical resistant surface",
      "Compact and portable",
      "Over temperature protection",
      "Easy operation",
      "Energy efficient"
    ],
    description: "Precision hot plate for laboratory heating applications with excellent temperature uniformity and control."
  },
  "High Temperature Furnace": {
    name: "High Temperature Furnace",
    category: "Industrial Furnace",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Up to 1800°C",
      "Chamber Size": "300 x 300 x 300 mm",
      "Heating Rate": "10°C/min",
      "Power Rating": "15 kW",
      "Controller": "PID with Programmer",
      "Insulation": "Ceramic Fiber",
      "Atmosphere": "Air/Inert Gas",
      "Accuracy": "±5°C"
    },
    features: [
      "Ultra-high temperature capability",
      "Programmable temperature controller",
      "Excellent insulation",
      "Multiple atmosphere options",
      "Precise temperature control",
      "Safety interlocks",
      "Data logging capability",
      "Robust construction"
    ],
    description: "Industrial high-temperature furnace for materials research, heat treatment, and specialized manufacturing processes."
  },
  "Lab Furnace": {
    name: "Lab Furnace",
    category: "Industrial Furnace",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Up to 1200°C",
      "Chamber Size": "200 x 200 x 200 mm",
      "Power Rating": "5 kW",
      "Controller": "Digital PID",
      "Heating Elements": "Silicon Carbide",
      "Insulation": "Refractory Bricks",
      "Timer": "0-999 minutes",
      "Construction": "Steel Cabinet"
    },
    features: [
      "Compact laboratory design",
      "Digital temperature control",
      "Uniform heating",
      "Energy efficient",
      "Safety features",
      "Easy maintenance",
      "Precise control",
      "Reliable operation"
    ],
    description: "Compact laboratory furnace ideal for research applications, material testing, and small-scale heat treatment processes."
  },
  "Muffle Furnace": {
    name: "Muffle Furnace",
    category: "Industrial Furnace",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "Up to 1100°C",
      "Chamber Size": "250 x 150 x 100 mm",
      "Power Rating": "3 kW",
      "Controller": "Digital with Timer",
      "Heating Elements": "Kanthal Wire",
      "Insulation": "Ceramic Fiber",
      "Door": "Hinged with Lock",
      "Accuracy": "±3°C"
    },
    features: [
      "High-quality muffle chamber",
      "Uniform temperature distribution",
      "Digital control system",
      "Safety door lock",
      "Excellent insulation",
      "Easy sample loading",
      "Compact design",
      "Low maintenance"
    ],
    description: "Precision muffle furnace for ashing, calcination, and other high-temperature laboratory applications."
  },
  "Salt Spray Chamber": {
    name: "Salt Spray Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Chamber Size": "600 x 450 x 400 mm",
      "Temperature Range": "35°C ± 2°C",
      "Salt Solution": "5% NaCl",
      "Spray Rate": "1-2 ml/hr/80cm²",
      "Air Pressure": "70-170 kPa",
      "Material": "FRP/PVC",
      "Controller": "Digital",
      "Compliance": "ASTM B117"
    },
    features: [
      "Corrosion testing capability",
      "Uniform salt spray distribution",
      "Digital temperature control",
      "Automatic solution preparation",
      "Corrosion-resistant construction",
      "Standard compliance",
      "Easy sample handling",
      "Precise control"
    ],
    description: "Advanced salt spray chamber for corrosion testing of materials and coatings according to international standards."
  },
  "Humidity Chamber": {
    name: "Humidity Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "10°C to 95°C",
      "Humidity Range": "20% to 95% RH",
      "Chamber Size": "500 x 400 x 400 mm",
      "Controller": "Touch Screen PID",
      "Accuracy": "±0.5°C, ±2% RH",
      "Uniformity": "±1°C, ±3% RH",
      "Material": "SS 304",
      "Data Logging": "Yes"
    },
    features: [
      "Precise humidity control",
      "Wide temperature range",
      "Touch screen interface",
      "Data logging capability",
      "Uniform conditions",
      "Stainless steel construction",
      "Energy efficient",
      "Easy programming"
    ],
    description: "Environmental humidity chamber for testing materials and products under controlled temperature and humidity conditions."
  },
  "Climate Chamber": {
    name: "Climate Chamber",
    category: "Environmental Chamber",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "-40°C to +150°C",
      "Humidity Range": "10% to 98% RH",
      "Chamber Size": "800 x 600 x 600 mm",
      "Controller": "Programmable Touch Screen",
      "Refrigeration": "CFC Free",
      "Insulation": "Polyurethane Foam",
      "Safety": "Multiple Protection",
      "Communication": "USB/Ethernet"
    },
    features: [
      "Wide temperature and humidity range",
      "Programmable test cycles",
      "Energy-efficient refrigeration",
      "Advanced safety systems",
      "Data communication",
      "Uniform test conditions",
      "User-friendly interface",
      "Reliable performance"
    ],
    description: "Advanced climate chamber for comprehensive environmental testing with precise temperature and humidity control."
  },
  "Cartridge Heater": {
    name: "Cartridge Heater",
    category: "Heater",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Diameter": "6.35mm to 25.4mm",
      "Length": "25mm to 600mm",
      "Power Rating": "50W to 2000W",
      "Voltage": "12V to 480V",
      "Max Temperature": "750°C",
      "Sheath Material": "SS 304/316",
      "Lead Wire": "High Temperature",
      "Tolerance": "±5% on Resistance"
    },
    features: [
      "Compact cylindrical design",
      "High power density",
      "Uniform heat distribution",
      "Corrosion resistant",
      "Custom specifications available",
      "Long service life",
      "Easy installation",
      "Multiple voltage options"
    ],
    description: "High-quality cartridge heaters for precise heating in industrial applications, molds, and process equipment."
  },
  "Immersion Heater": {
    name: "Immersion Heater",
    category: "Heater",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Power Rating": "1kW to 50kW",
      "Voltage": "230V to 480V",
      "Element Material": "Incoloy/SS",
      "Flange Size": "2\" to 8\"",
      "Length": "300mm to 1500mm",
      "Max Temperature": "650°C",
      "Protection": "IP65",
      "Thermostat": "Optional"
    },
    features: [
      "Direct liquid heating",
      "High thermal efficiency",
      "Corrosion resistant elements",
      "Multiple flange options",
      "Built-in safety features",
      "Easy maintenance",
      "Custom configurations",
      "Industrial grade construction"
    ],
    description: "Industrial immersion heaters for heating liquids in tanks, vessels, and process equipment with excellent efficiency."
  },
  "Band Heater": {
    name: "Band Heater",
    category: "Heater",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Inner Diameter": "25mm to 500mm",
      "Width": "25mm to 200mm",
      "Power Rating": "100W to 5000W",
      "Voltage": "110V to 480V",
      "Max Temperature": "400°C",
      "Material": "Mica/Ceramic",
      "Clamp Type": "Spring/Bolt",
      "Insulation": "Fiberglass"
    },
    features: [
      "Wraparound heating design",
      "Even heat distribution",
      "Easy installation",
      "Multiple clamping options",
      "Energy efficient",
      "Long service life",
      "Custom sizes available",
      "Industrial applications"
    ],
    description: "Flexible band heaters for heating cylinders, pipes, and vessels in plastic processing and industrial applications."
  },
  "Autoclave": {
    name: "Autoclave",
    category: "Microbiology Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Chamber Volume": "50 to 500 Liters",
      "Temperature Range": "121°C to 134°C",
      "Pressure": "15-30 PSI",
      "Cycle Time": "15-60 minutes",
      "Construction": "SS 316L",
      "Door Type": "Horizontal/Vertical",
      "Controller": "Microprocessor",
      "Validation": "Built-in"
    },
    features: [
      "Steam sterilization",
      "Programmable cycles",
      "Safety interlocks",
      "Automatic operation",
      "Validation protocols",
      "Multiple load types",
      "Digital display",
      "GMP compliance"
    ],
    description: "Laboratory autoclave for reliable steam sterilization of instruments, media, and materials in research and clinical applications."
  },
  "Incubator": {
    name: "Incubator",
    category: "Microbiology Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "5°C above ambient to 80°C",
      "Capacity": "50 to 500 Liters",
      "Controller": "Microprocessor PID",
      "Accuracy": "±0.1°C",
      "Uniformity": "±0.5°C",
      "Construction": "SS Inner Chamber",
      "Shelves": "Adjustable Wire",
      "Door": "Inner Glass Door"
    },
    features: [
      "Precise temperature control",
      "Uniform heat distribution",
      "Natural convection",
      "Digital display",
      "Over temperature alarm",
      "Energy efficient",
      "Easy cleaning",
      "Reliable operation"
    ],
    description: "Laboratory incubator for cell culture, bacterial cultivation, and other temperature-sensitive biological applications."
  },
  "Laminar Air Flow": {
    name: "Laminar Air Flow",
    category: "Microbiology Instruments",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Work Area": "2ft to 8ft width",
      "Air Velocity": "0.45 m/s ± 20%",
      "Filter Type": "HEPA H14",
      "Efficiency": "99.995% at 0.3 micron",
      "Construction": "SS 304",
      "Lighting": "UV & Fluorescent",
      "Noise Level": "<65 dB",
      "Power": "100-500W"
    },
    features: [
      "HEPA filtered air flow",
      "Sterile work environment",
      "UV sterilization lamp",
      "Pre-filter protection",
      "Digital air velocity display",
      "Energy efficient motor",
      "Easy maintenance",
      "GMP compliant"
    ],
    description: "Laminar air flow cabinet providing sterile work environment for microbiological and pharmaceutical applications."
  },
  "RTD Sensors": {
    name: "RTD Sensors",
    category: "Thermocouple",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Element": "Pt100/Pt1000",
      "Temperature Range": "-200°C to 600°C",
      "Accuracy": "Class A/B",
      "Probe Length": "50mm to 1000mm",
      "Diameter": "3mm to 8mm",
      "Connection": "2/3/4 Wire",
      "Protection": "IP65/IP68",
      "Material": "SS 316L"
    },
    features: [
      "High accuracy measurement",
      "Excellent stability",
      "Linear response",
      "Wide temperature range",
      "Corrosion resistant",
      "Multiple configurations",
      "Industrial grade",
      "Long-term reliability"
    ],
    description: "Precision RTD temperature sensors for accurate temperature measurement in industrial and laboratory applications."
  },
  "J Type": {
    name: "J Type Thermocouple",
    category: "Thermocouple",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "0°C to 750°C",
      "Accuracy": "±2.2°C or ±0.75%",
      "Probe Length": "100mm to 2000mm",
      "Diameter": "1.5mm to 6mm",
      "Junction": "Grounded/Ungrounded",
      "Sheath Material": "SS 316",
      "Insulation": "MgO",
      "Response Time": "<1 second"
    },
    features: [
      "Iron-Constantan elements",
      "Good oxidation resistance",
      "Fast response time",
      "Cost effective",
      "Wide application range",
      "Reliable performance",
      "Standard calibration",
      "Easy installation"
    ],
    description: "J-Type thermocouples for general purpose temperature measurement in industrial processes and equipment."
  },
  "K Type": {
    name: "K Type Thermocouple",
    category: "Thermocouple",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    specifications: {
      "Temperature Range": "-200°C to 1200°C",
      "Accuracy": "±2.2°C or ±0.75%",
      "Probe Length": "100mm to 3000mm",
      "Diameter": "1.5mm to 8mm",
      "Junction": "Grounded/Ungrounded",
      "Sheath Material": "SS 316/Inconel",
      "Insulation": "MgO",
      "Response Time": "<1 second"
    },
    features: [
      "Chromel-Alumel elements",
      "Wide temperature range",
      "Good linearity",
      "Oxidation resistant",
      "Versatile applications",
      "Standard calibration",
      "Fast response",
      "Durable construction"
    ],
    description: "K-Type thermocouples for versatile temperature measurement applications with excellent performance and reliability."
  }
};

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ onInquiryClick, onProductSelect }) => {
  const [selectedProduct, setSelectedProduct] = useState<(typeof productDatabase)[keyof typeof productDatabase] | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const handleProductClick = (productName: string) => {
    const product = productDatabase[productName as keyof typeof productDatabase];
    if (product) {
      if (onProductSelect) {
        onProductSelect(product);
      } else {
        setSelectedProduct(product);
        setIsProductDetailOpen(true);
      }
    }
  };

  const handleCloseProductDetail = () => {
    setIsProductDetailOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.08),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary rounded-full text-sm font-semibold">
              Our Products
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent mb-[55px]">
            Product Categories
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of scientific and industrial equipment,
            engineered for precision and reliability across diverse applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {productCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className="group relative overflow-hidden border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card Content */}
                <CardContent className="p-8 relative z-10">
                  {/* Icon Header */}
                  <div className="flex items-start mb-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-300 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed min-h-[60px]">
                    {category.description}
                  </p>
                  
                  {/* Popular Products */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200 mb-3 flex items-center">
                      <span className="w-1 h-4 bg-primary rounded-full mr-2"></span>
                      Popular Products
                    </h4>
                    <ul className="space-y-2">
                      {category.products.slice(0, 3).map((product) => (
                        <li 
                          key={product} 
                          className="flex items-center cursor-pointer group/item py-1.5 px-3 -mx-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200"
                          onClick={() => handleProductClick(product)}
                        >
                          <div className="w-2 h-2 bg-primary/60 rounded-full mr-3 group-hover/item:scale-150 group-hover/item:bg-primary transition-all duration-200"></div>
                          <span className="text-sm text-slate-600 dark:text-slate-300 group-hover/item:text-primary dark:group-hover/item:text-blue-300 group-hover/item:translate-x-1 transition-all duration-200">
                            {product}
                          </span>
                        </li>
                      ))}
                      {category.products.length > 3 && (
                        <li className="text-xs text-slate-500 dark:text-slate-400 pl-5">
                          +{category.products.length - 3} more products
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button 
                          variant="professional" 
                          className="flex-1 group-hover:shadow-lg transition-all duration-300"
                        >
                          View All
                          <ChevronDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="w-64 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm border-slate-200 dark:border-slate-700 shadow-xl">
                        {category.products.map((product) => (
                          <DropdownMenuItem 
                            key={product}
                            onClick={() => handleProductClick(product)}
                            className="cursor-pointer hover:bg-primary/10 dark:hover:bg-primary/20 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-blue-300 transition-colors py-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {product}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                    
                    <Button 
                      variant="inquiry" 
                      onClick={onInquiryClick}
                      className="group-hover:shadow-lg group-hover:scale-105 transition-all duration-300"
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
        <div className="text-center animate-fade-in">
          <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-800 dark:via-blue-900 dark:to-slate-800 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)] animate-pulse"></div>
            
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                  Custom Solutions
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Need Custom Solutions?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Our engineering team can design and manufacture custom equipment 
                tailored to your specific requirements.
              </p>
              <Button 
                variant="inquiry" 
                size="lg"
                onClick={onInquiryClick}
                className="bg-white text-slate-900 hover:bg-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Request Custom Quote
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