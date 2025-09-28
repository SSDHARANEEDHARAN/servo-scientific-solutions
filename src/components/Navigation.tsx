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
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

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
            <button 
              onClick={() => setIsSideNavOpen(true)}
              className="text-professional-blue hover:text-professional-blue-dark transition-colors"
            >
              Quick Access
            </button>
          </div>
        </div>
      </div>

      {/* Side Navigation */}
      {isSideNavOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={() => setIsSideNavOpen(false)}>
          <div 
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-professional transform transition-transform"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-professional-blue">Quick Access</h3>
                <button 
                  onClick={() => setIsSideNavOpen(false)}
                  className="text-technical-gray hover:text-professional-blue"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-start">
                  <Download className="mr-2 h-4 w-4" />
                  Download Catalog
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={onInquiryClick}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Make Inquiry
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <Share2 className="mr-2 h-4 w-4" />
                      Share
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <div className="p-4 space-y-2">
                      <a href="#" className="block text-sm text-technical-gray hover:text-professional-blue">
                        Instagram
                      </a>
                      <a href="#" className="block text-sm text-technical-gray hover:text-professional-blue">
                        Twitter
                      </a>
                      <a href="#" className="block text-sm text-technical-gray hover:text-professional-blue">
                        YouTube
                      </a>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenuSeparator />
                
                <div className="text-sm text-technical-gray">
                  <p className="font-medium mb-2">Contact Information</p>
                  <div className="flex items-center mb-1">
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
      )}
    </>
  );
};

export default Navigation;