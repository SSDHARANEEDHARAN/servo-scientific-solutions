import React, { useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Download, Share2, Moon, Sun, Instagram, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import ProductDetailPage from './ProductDetailPage';

// Product database with comprehensive product information
const createProductData = (name: string, category: string, tempRange?: string, description?: string) => ({
  name,
  category,
  images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  specifications: {
    "Temperature Range": tempRange || "Ambient to 300°C",
    "Power Rating": "3.5 kW",
    "Chamber Size": "450 x 450 x 450 mm",
    "Construction": "SS 304 Inner, MS Outer",
    "Controller": "Digital PID",
    "Safety Features": "Over temperature protection",
    "Accuracy": "±2°C",
    "Timer": "0-999 minutes"
  },
  features: [
    "Precise temperature control",
    "Digital display with advanced controls",
    "Uniform heat distribution",
    "Energy efficient design",
    "Safety protection systems",
    "Easy operation and maintenance",
    "Durable construction",
    "Professional grade performance"
  ],
  description: description || `Professional ${name} designed for laboratory and industrial applications with precise control and reliable performance.`
});

const productDatabase = {
  // Heating Instruments
  "Hot Air Oven": createProductData("Hot Air Oven", "Heating Instruments", "50°C to 300°C", "Our Hot Air Oven provides precise temperature control and uniform heat distribution for laboratory drying, sterilization, and heat treatment applications."),
  "Tray Dryer": createProductData("Tray Dryer", "Heating Instruments", "Ambient to 200°C", "Industrial tray dryer for efficient drying of pharmaceuticals, chemicals, and food products with excellent heat circulation."),
  "Vacuum Dryer": createProductData("Vacuum Dryer", "Heating Instruments", "Ambient to 250°C", "Vacuum drying oven for heat-sensitive materials, providing gentle drying under controlled vacuum conditions."),
  "Hot Plate": createProductData("Hot Plate", "Heating Instruments", "50°C to 350°C", "Precision hot plate for laboratory heating applications with excellent temperature uniformity and control."),
  "Water Bath": createProductData("Water Bath", "Heating Instruments", "Ambient +5°C to 100°C", "Laboratory water bath designed for consistent temperature heating applications in research and clinical laboratories."),
  
  // Industrial Furnace
  "High Temperature Furnace": createProductData("High Temperature Furnace", "Industrial Furnace", "Up to 1800°C", "High temperature furnace for extreme heat treatment applications in metallurgy and materials research."),
  "Lab Furnace (1000/1450/1650)": createProductData("Lab Furnace (1000/1450/1650)", "Industrial Furnace", "Up to 1650°C", "Laboratory furnace series with multiple temperature ranges for various heat treatment applications."),
  "Muffle Furnace": createProductData("Muffle Furnace", "Industrial Furnace", "Up to 1200°C", "Muffle furnace for ashing, annealing, and heat treatment with excellent temperature uniformity."),
  
  // Environmental Chamber
  "Salt Spray Chamber": createProductData("Salt Spray Chamber", "Environmental Chamber", "35°C ± 2°C", "Salt spray test chamber for corrosion testing of metals and coatings per international standards."),
  "Humidity Chamber": createProductData("Humidity Chamber", "Environmental Chamber", "5°C to 95°C", "Environmental humidity chamber for testing materials under controlled temperature and humidity conditions."),
  "Paint Corrosion Chamber": createProductData("Paint Corrosion Chamber", "Environmental Chamber", "Ambient to 70°C", "Specialized chamber for testing paint and coating durability under accelerated corrosion conditions."),
  "Environmental Shaker": createProductData("Environmental Shaker", "Environmental Chamber", "-40°C to 180°C", "Combined environmental and vibration testing system for comprehensive product reliability testing."),
  "Cyclic Corrosion Chamber": createProductData("Cyclic Corrosion Chamber", "Environmental Chamber", "Ambient to 60°C", "Advanced cyclic corrosion testing chamber simulating real-world environmental conditions."),
  "Climate Chamber": createProductData("Climate Chamber", "Environmental Chamber", "-70°C to 180°C", "Precision climate chamber for comprehensive environmental testing with temperature and humidity control."),
  "PP Tank": createProductData("PP Tank", "Environmental Chamber", "Ambient", "Polypropylene tanks for chemical storage and corrosion testing applications."),
  
  // Heater
  "Cartridge Heater": createProductData("Cartridge Heater", "Heater", "Up to 750°C", "Industrial cartridge heaters for precision heating in manufacturing and processing applications."),
  "Immersion Heater": createProductData("Immersion Heater", "Heater", "Up to 650°C", "Immersion heaters for direct heating of liquids and process fluids with excellent efficiency."),
  "Dye Heater": createProductData("Dye Heater", "Heater", "Up to 400°C", "Specialized heaters for textile dyeing and chemical processing applications."),
  "Band Heater": createProductData("Band Heater", "Heater", "Up to 500°C", "Band heaters for external heating of pipes, vessels, and processing equipment."),
  "Ceramic Bobbin Heater": createProductData("Ceramic Bobbin Heater", "Heater", "Up to 1000°C", "High temperature ceramic heaters for extreme heating applications."),
  "Titanium Heater": createProductData("Titanium Heater", "Heater", "Up to 300°C", "Corrosion-resistant titanium heaters for aggressive chemical environments."),
  "Silicone Carbide Rod Heater": createProductData("Silicone Carbide Rod Heater", "Heater", "Up to 1600°C", "Silicon carbide heating elements for ultra-high temperature applications."),
  "Quartz Heater": createProductData("Quartz Heater", "Heater", "Up to 1200°C", "Quartz infrared heaters for rapid heating and precise temperature control."),
  
  // Microbiology Instruments
  "Autoclave": createProductData("Autoclave", "Microbiology Instruments", "121°C to 134°C", "Steam sterilization autoclave for laboratory and medical instrument sterilization."),
  "Incubator": createProductData("Incubator", "Microbiology Instruments", "5°C above ambient to 80°C", "Laboratory incubator for cell culture and microbiological applications."),
  "BOD Incubator": createProductData("BOD Incubator", "Microbiology Instruments", "5°C to 60°C", "Biochemical Oxygen Demand incubator for environmental and water quality testing."),
  "Laminar Air Flow": createProductData("Laminar Air Flow", "Microbiology Instruments", "Ambient", "Laminar airflow workstation providing sterile working environment for laboratory applications."),
  "Bio Safety Cabinet": createProductData("Bio Safety Cabinet", "Microbiology Instruments", "Ambient", "Biological safety cabinet for safe handling of infectious materials and hazardous substances."),
  "Fermentor": createProductData("Fermentor", "Microbiology Instruments", "4°C to 60°C", "Laboratory fermentor for biotechnology research and microbial cultivation."),
  "Fume Hood": createProductData("Fume Hood", "Microbiology Instruments", "Ambient", "Laboratory fume hood for safe handling of toxic and hazardous chemicals."),
  "Deep Freezer": createProductData("Deep Freezer", "Microbiology Instruments", "-86°C to -40°C", "Ultra-low temperature freezer for long-term storage of biological samples."),
  "Pass Box": createProductData("Pass Box", "Microbiology Instruments", "Ambient", "Pass-through chamber maintaining sterile conditions between clean room areas."),
  "Blending Machines": createProductData("Blending Machines", "Microbiology Instruments", "Ambient", "Laboratory blending equipment for sample preparation and homogenization."),
  "Sterilizer": createProductData("Sterilizer", "Microbiology Instruments", "160°C to 200°C", "Dry heat sterilizer for laboratory glassware and heat-stable materials."),
  "Distillation Unit (Glass/Metal)": createProductData("Distillation Unit (Glass/Metal)", "Microbiology Instruments", "Up to 300°C", "Laboratory distillation units for water purification and chemical separation."),
  "Bottle Shaker": createProductData("Bottle Shaker", "Microbiology Instruments", "Ambient to 60°C", "Laboratory bottle shaker for cell culture and mixing applications."),
  
  // Thermocouple
  "RTD Sensors": createProductData("RTD Sensors", "Thermocouple", "-200°C to 850°C", "Resistance Temperature Detector sensors for precise temperature measurement applications."),
  "J Type": createProductData("J Type", "Thermocouple", "-210°C to 1200°C", "J-Type thermocouple for general purpose temperature measurement in various applications."),
  "K Type": createProductData("K Type", "Thermocouple", "-270°C to 1372°C", "K-Type thermocouple, the most common type for industrial temperature measurement."),
  "S Type": createProductData("S Type", "Thermocouple", "-50°C to 1768°C", "S-Type thermocouple for high temperature measurement in laboratory and industrial applications."),
  "R Type": createProductData("R Type", "Thermocouple", "-50°C to 1768°C", "R-Type thermocouple for precision high temperature measurement applications."),
  "B Type": createProductData("B Type", "Thermocouple", "0°C to 1820°C", "B-Type thermocouple for ultra-high temperature measurement in extreme environments.")
};

const productCategories = {
  "Heating Instruments": [
    "Hot Air Oven",
    "Tray Dryer", 
    "Vacuum Dryer",
    "Hot Plate",
    "Water Bath"
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
  onProductSelect?: (product: any) => void;
}

const Navigation: React.FC<NavigationProps> = ({ onInquiryClick, onProductSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleProductClick = (productName: string) => {
    const product = productDatabase[productName as keyof typeof productDatabase];
    if (product && onProductSelect) {
      onProductSelect(product);
    }
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
                <DropdownMenuTrigger className="flex items-center text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300 transition-colors group">
                  Products <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  className="w-[900px] p-8 bg-white dark:bg-slate-800 shadow-2xl border border-slate-200 dark:border-slate-700 z-50 backdrop-blur-sm"
                  onMouseLeave={(e) => {
                    // Auto-close dropdown when mouse leaves
                    const trigger = e.currentTarget.previousElementSibling as HTMLElement;
                    if (trigger) trigger.click();
                  }}
                >
                  <div className="grid grid-cols-3 gap-8">
                    {Object.entries(productCategories).map(([category, items]) => (
                      <div key={category} className="space-y-4">
                        <h3 className="font-bold text-lg text-professional-blue dark:text-blue-300 border-b-2 border-professional-blue-light pb-3">
                          {category}
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item}>
                              <button 
                                onClick={() => handleProductClick(item)}
                                className="text-sm text-technical-gray dark:text-slate-300 hover:text-professional-blue dark:hover:text-blue-300 transition-all duration-200 block w-full text-left hover:bg-gradient-to-r hover:from-professional-blue/10 hover:to-transparent p-3 rounded-lg hover:shadow-sm hover:translate-x-1"
                              >
                                {item}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-600">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-technical-gray dark:text-slate-400">
                        Need help finding the right product?
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={onInquiryClick}
                        className="border-professional-blue text-professional-blue hover:bg-professional-blue hover:text-white"
                      >
                        Contact Expert
                      </Button>
                    </div>
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


    </>
  );
};

export default Navigation;