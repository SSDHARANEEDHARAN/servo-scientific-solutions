import React, { useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Download, Share2, Moon, Sun, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import ProductDetail from './ProductDetail';

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
  }
};

const productCategories = {
  "Heating Instruments": [
    "Hot Air Oven",
    "Tray Dryer", 
    "Vacuum Dryer",
    "Hot Plate",
    "Water Bath",
    "Surgical Water Bath"
  ],
  "Industrial Furnace": [
    "High Temperature Furnace",
    "Lab Furnace (1000/1450/1650)",
    "Muffle Furnace"
  ],
  "Environmental Chamber": [
    "Salt Spray Chamber",
    "Humidity Chamber", 
    "Paint Corrosion Chamber",
    "Environmental Shaker",
    "Cyclic Corrosion Chamber",
    "Climate Chamber",
    "PP Tank"
  ],
  "Heater": [
    "Cartridge Heater",
    "Immersion Heater",
    "Dye Heater", 
    "Band Heater",
    "Ceramic Bobbin Heater",
    "Titanium Heater",
    "Silicone Carbide Rod Heater",
    "Quartz Heater"
  ],
  "Microbiology Instruments": [
    "Autoclave",
    "Incubator",
    "BOD Incubator",
    "Laminar Air Flow",
    "Bio Safety Cabinet",
    "Fermentor",
    "Fume Hood", 
    "Deep Freezer",
    "Pass Box",
    "Blending Machines",
    "Sterilizer",
    "Distillation Unit (Glass/Metal)",
    "Bottle Shaker"
  ],
  "Thermocouple": [
    "RTD Sensors",
    "J Type",
    "K Type", 
    "S Type",
    "R Type",
    "B Type"
  ]
};

interface NavigationProps {
  onInquiryClick: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onInquiryClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<(typeof productDatabase)[keyof typeof productDatabase] | null>(null);
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);

  const handleProductClick = (productName: string) => {
    const product = productDatabase[productName as keyof typeof productDatabase];
    if (product) {
      setSelectedProduct(product);
      setIsProductDetailOpen(true);
    }
  };

  const handleCloseProductDetail = () => {
    setIsProductDetailOpen(false);
    setSelectedProduct(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="bg-white dark:bg-slate-900 shadow-professional sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-professional-blue dark:text-blue-300">
                Servo Scientific
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300 transition-colors">
                Home
              </a>
              
              {/* Products Mega Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300 transition-colors">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[800px] p-6 bg-white dark:bg-slate-800 shadow-professional border border-slate-200 dark:border-slate-700 z-50">
                  <div className="grid grid-cols-2 gap-8">
                    {Object.entries(productCategories).map(([category, items]) => (
                      <div key={category} className="space-y-3">
                        <h3 className="font-semibold text-professional-blue dark:text-blue-300 border-b border-professional-blue-light pb-2">
                          {category}
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item}>
                              <button 
                                onClick={() => handleProductClick(item)}
                                className="text-sm text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300 transition-colors block w-full text-left hover:bg-surface-blue dark:hover:bg-slate-700 p-2 rounded"
                              >
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="/service-support" className="text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300 transition-colors">
                Service & Support
              </a>
              
              <Button 
                variant="ghost" 
                size="sm"
                onClick={toggleDarkMode}
                className="text-technical-gray hover:text-professional-blue"
              >
                {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              
              <Button variant="professional" size="sm">
                Sign In
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-technical-gray hover:text-professional-blue"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-slate-800 border-t border-technical-gray-light dark:border-slate-600">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-technical-gray hover:text-professional-blue">
                Home
              </a>
              <div className="space-y-2">
                <div className="font-semibold text-professional-blue dark:text-blue-300">Products</div>
                {Object.entries(productCategories).map(([category, items]) => (
                  <div key={category} className="ml-4 space-y-1">
                    <div className="font-medium text-technical-gray dark:text-slate-300">{category}</div>
                    {items.map((item) => (
                      <button 
                        key={item}
                        onClick={() => handleProductClick(item)}
                        className="block ml-4 text-sm text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300 w-full text-left p-1 rounded hover:bg-surface-blue dark:hover:bg-slate-700"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
              <a href="/service-support" className="block text-technical-gray hover:text-professional-blue">
                Service & Support
              </a>
              <div className="flex items-center justify-between">
                <Button variant="professional" size="sm" className="flex-1 mr-2">
                  Sign In
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={toggleDarkMode}
                  className="text-technical-gray hover:text-professional-blue"
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation Links */}
      <div className="bg-surface-blue dark:bg-slate-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a href="/about" className="text-technical-gray dark:text-slate-400 hover:text-professional-blue dark:hover:text-blue-300 transition-colors">
                About Us
              </a>
              <button 
                onClick={onInquiryClick}
                className="text-technical-gray dark:text-slate-400 hover:text-professional-blue dark:hover:text-blue-300 transition-colors"
              >
                Inquiries
              </button>
            </div>
      {/* Quick Access Hover Triggers */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 group">
        <div className="w-3 h-24 bg-professional-blue opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer group-hover:w-4">
        </div>
        {/* Left Side Panel */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-96 h-[600px] bg-professional-blue text-white shadow-professional opacity-0 translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="p-8 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Access</h3>
            
            {/* Featured Product/Service Image Area */}
            <div className="mb-6 text-center">
              <div className="w-24 h-24 mx-auto bg-white/10 border-2 border-white/20 flex items-center justify-center mb-3">
                <Download className="h-8 w-8 text-white" />
              </div>
              <p className="text-sm text-white/80 font-medium">Download Resources</p>
              <p className="text-xs text-white/60">Catalogs & Specifications</p>
            </div>
            
            <div className="space-y-4 flex-1">
              <Button 
                variant="outline" 
                className="w-full justify-start py-4 px-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-professional-blue"
              >
                <Download className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Download Catalog</div>
                  <div className="text-xs opacity-80">Product specifications</div>
                </div>
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start py-4 px-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-professional-blue"
                onClick={onInquiryClick}
              >
                <Mail className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Make Inquiry</div>
                  <div className="text-xs opacity-80">Get personalized quote</div>
                </div>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start py-4 px-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-professional-blue"
              >
                <Phone className="mr-3 h-5 w-5" />
                <div className="text-left">
                  <div className="font-medium">Call Now</div>
                  <div className="text-xs opacity-80">Speak with expert</div>
                </div>
              </Button>
              
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm font-medium mb-4 text-white">Connect With Us</p>
                <div className="grid grid-cols-3 gap-3">
                  <a href="#" className="h-14 bg-white/10 hover:bg-white/20 flex flex-col items-center justify-center transition-colors border border-white/20">
                    <Instagram className="h-5 w-5 mb-1" />
                    <span className="text-[10px] text-white/70">Instagram</span>
                  </a>
                  <a href="#" className="h-14 bg-white/10 hover:bg-white/20 flex flex-col items-center justify-center transition-colors border border-white/20">
                    <Twitter className="h-5 w-5 mb-1" />
                    <span className="text-[10px] text-white/70">Twitter</span>
                  </a>
                  <a href="#" className="h-14 bg-white/10 hover:bg-white/20 flex flex-col items-center justify-center transition-colors border border-white/20">
                    <Youtube className="h-5 w-5 mb-1" />
                    <span className="text-[10px] text-white/70">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-6 border-t border-white/20 text-sm text-white/90">
              <div className="text-center mb-3">
                <p className="font-medium text-white">24/7 Support Available</p>
              </div>
              <div className="flex items-center justify-center mb-2">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2" />
                <span className="text-xs">info@servoscientific.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Quick Access */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 group">
        <div className="w-3 h-24 bg-professional-blue opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer group-hover:w-4">
        </div>
        {/* Right Side Panel */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-96 h-[600px] bg-professional-blue text-white shadow-professional opacity-0 translate-x-[100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="p-8 h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-6 text-white">Quick Navigation</h3>
            
            {/* Company Logo/Image Area */}
            <div className="mb-6 text-center">
              <div className="w-20 h-20 mx-auto bg-white/10 border-2 border-white/20 flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-white">SS</span>
              </div>
              <p className="text-sm text-white/80">Servo Scientific</p>
            </div>
            
            <div className="space-y-4 flex-1">
              <a href="/" className="block text-white/90 hover:text-white transition-colors py-4 px-4 border border-white/20 hover:bg-white/10">
                <div className="font-medium">Home</div>
                <div className="text-xs text-white/70">Main landing page</div>
              </a>
              <a href="/about" className="block text-white/90 hover:text-white transition-colors py-4 px-4 border border-white/20 hover:bg-white/10">
                <div className="font-medium">About Us</div>
                <div className="text-xs text-white/70">Company information</div>
              </a>
              <button 
                onClick={onInquiryClick}
                className="block text-white/90 hover:text-white transition-colors py-4 px-4 border border-white/20 hover:bg-white/10 w-full text-left"
              >
                <div className="font-medium">Make Inquiry</div>
                <div className="text-xs text-white/70">Contact our team</div>
              </button>
              <a href="/service-support" className="block text-white/90 hover:text-white transition-colors py-4 px-4 border border-white/20 hover:bg-white/10">
                <div className="font-medium">Service & Support</div>
                <div className="text-xs text-white/70">Technical assistance</div>
              </a>
            </div>
            <div className="mt-auto pt-6 border-t border-white/20 text-center">
              <p className="text-sm font-medium text-white">Professional Equipment</p>
              <p className="text-xs text-white/70 mt-1">Trusted since 1970</p>
            </div>
          </div>
        </div>
      </div>
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

    </>
  );
};

export default Navigation;