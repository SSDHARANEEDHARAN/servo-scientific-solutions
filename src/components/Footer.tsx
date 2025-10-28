import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Youtube,
  Clock,
  Award,
  Shield
} from 'lucide-react';

interface FooterProps {
  onInquiryClick: () => void;
  onCategorySelect?: (categoryName: string) => void;
  onAboutClick?: () => void;
  onAllProductsClick?: () => void;
  onServicesClick?: () => void;
  onQualityClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onInquiryClick, onCategorySelect, onAboutClick, onAllProductsClick, onServicesClick, onQualityClick }) => {
  return (
    <footer className="bg-gray-50 dark:bg-professional-blue-dark text-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">
                Servo Scientific Suppliers
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leading manufacturer of scientific and industrial equipment for over 50 years.
                Committed to innovation, quality, and customer satisfaction.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Award className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">ISO Certified</p>
                <p className="text-xs text-muted-foreground">Quality Management System</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={onAboutClick} className="text-muted-foreground hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={onAllProductsClick} className="text-muted-foreground hover:text-primary transition-colors">All Products</button></li>
              <li><button onClick={onServicesClick} className="text-muted-foreground hover:text-primary transition-colors">Services & Support</button></li>
              <li><button onClick={onQualityClick} className="text-muted-foreground hover:text-primary transition-colors">Quality Assurance</button></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Product Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => onCategorySelect?.("Heating Instruments")} className="text-muted-foreground hover:text-primary transition-colors text-left">Heating Instruments</button></li>
              <li><button onClick={() => onCategorySelect?.("Industrial Furnace")} className="text-muted-foreground hover:text-primary transition-colors text-left">Industrial Furnace</button></li>
              <li><button onClick={() => onCategorySelect?.("Environmental Chamber")} className="text-muted-foreground hover:text-primary transition-colors text-left">Environmental Chamber</button></li>
              <li><button onClick={() => onCategorySelect?.("Heater")} className="text-muted-foreground hover:text-primary transition-colors text-left">Heaters</button></li>
              <li><button onClick={() => onCategorySelect?.("Microbiology Instruments")} className="text-muted-foreground hover:text-primary transition-colors text-left">Microbiology Instruments</button></li>
              <li><button onClick={() => onCategorySelect?.("Thermocouple")} className="text-muted-foreground hover:text-primary transition-colors text-left">Thermocouple</button></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Contact Information</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">123 Industrial Avenue</p>
                  <p className="text-muted-foreground">Salem, Tamil Nadu 636001</p>
                  <p className="text-muted-foreground">India</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-xs text-muted-foreground">Sales & Support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">info@servoscientific.com</p>
                  <p className="text-xs text-muted-foreground">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-primary flex-shrink-0" />
                <p className="text-muted-foreground">www.servoscientific.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-muted-foreground">24/7 Customer Support</p>
                  <p className="text-xs text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">CE Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">ISO 9001:2015</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-foreground hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-foreground hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-foreground hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-foreground hover:text-primary-foreground" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5 text-foreground hover:text-primary-foreground" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 Servo Scientific Suppliers. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;