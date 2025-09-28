import React, { useState } from 'react';
import { ChevronDown, Menu, X, Phone, Mail, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

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

  return (
    <>
      {/* Main Navigation */}
      <nav className="bg-white shadow-professional sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-professional-blue">
                Servo Scientific
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-technical-gray hover:text-professional-blue transition-colors">
                Home
              </a>
              
              {/* Products Mega Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-technical-gray hover:text-professional-blue transition-colors">
                  Products <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[800px] p-6 bg-white shadow-professional">
                  <div className="grid grid-cols-2 gap-8">
                    {Object.entries(productCategories).map(([category, items]) => (
                      <div key={category} className="space-y-3">
                        <h3 className="font-semibold text-professional-blue border-b border-professional-blue-light pb-2">
                          {category}
                        </h3>
                        <ul className="space-y-2">
                          {items.map((item) => (
                            <li key={item}>
                              <a 
                                href={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`}
                                className="text-sm text-technical-gray hover:text-professional-blue transition-colors block"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              <a href="/service-support" className="text-technical-gray hover:text-professional-blue transition-colors">
                Service & Support
              </a>
              
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
          <div className="md:hidden bg-white border-t border-technical-gray-light">
            <div className="px-4 py-6 space-y-4">
              <a href="/" className="block text-technical-gray hover:text-professional-blue">
                Home
              </a>
              <div className="space-y-2">
                <div className="font-semibold text-professional-blue">Products</div>
                {Object.entries(productCategories).map(([category, items]) => (
                  <div key={category} className="ml-4 space-y-1">
                    <div className="font-medium text-technical-gray">{category}</div>
                    {items.map((item) => (
                      <a 
                        key={item}
                        href={`/product/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="block ml-4 text-sm text-technical-gray hover:text-professional-blue"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                ))}
              </div>
              <a href="/service-support" className="block text-technical-gray hover:text-professional-blue">
                Service & Support
              </a>
              <Button variant="professional" size="sm" className="w-full">
                Sign In
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Bottom Navigation Links */}
      <div className="bg-surface-blue py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex space-x-6">
              <a href="/about" className="text-technical-gray hover:text-professional-blue transition-colors">
                About Us
              </a>
              <button 
                onClick={onInquiryClick}
                className="text-technical-gray hover:text-professional-blue transition-colors"
              >
                Inquiries
              </button>
            </div>
      {/* Quick Access Hover Triggers */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40 group">
        <div className="w-2 h-16 bg-professional-blue rounded-r-lg opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer group-hover:w-3">
        </div>
        {/* Left Side Panel */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-80 bg-professional-blue text-white shadow-professional rounded-r-2xl opacity-0 translate-x-[-100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Navigation</h3>
            <div className="space-y-3">
              <a href="/" className="block text-white/90 hover:text-white transition-colors py-2 border-b border-white/20">
                Home
              </a>
              <a href="/about" className="block text-white/90 hover:text-white transition-colors py-2 border-b border-white/20">
                About Us
              </a>
              <button 
                onClick={onInquiryClick}
                className="block text-white/90 hover:text-white transition-colors py-2 border-b border-white/20 w-full text-left"
              >
                Make Inquiry
              </button>
              <a href="/service-support" className="block text-white/90 hover:text-white transition-colors py-2">
                Service & Support
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Quick Access */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 group">
        <div className="w-2 h-16 bg-professional-blue rounded-l-lg opacity-80 hover:opacity-100 transition-all duration-300 cursor-pointer group-hover:w-3">
        </div>
        {/* Right Side Panel */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 bg-professional-blue text-white shadow-professional rounded-l-2xl opacity-0 translate-x-[100%] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Access</h3>
            
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start bg-white/10 border-white/30 text-white hover:bg-white hover:text-professional-blue"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Catalog
              </Button>
              
              <Button 
                variant="outline" 
                className="w-full justify-start bg-white/10 border-white/30 text-white hover:bg-white hover:text-professional-blue"
                onClick={onInquiryClick}
              >
                <Mail className="mr-2 h-4 w-4" />
                Make Inquiry
              </Button>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-sm font-medium mb-3 text-white">Share On Social</p>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xs font-bold">IG</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xs font-bold">TW</span>
                  </a>
                  <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-xs font-bold">YT</span>
                  </a>
                </div>
              </div>
              
              <div className="pt-4 border-t border-white/20 text-sm text-white/90">
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@servoscientific.com</span>
                </div>
              </div>
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