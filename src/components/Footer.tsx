import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin,
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
  onContactClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onInquiryClick, onCategorySelect, onAboutClick, onAllProductsClick, onServicesClick, onQualityClick, onContactClick }) => {
  const navigate = useNavigate();
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
              <li><button onClick={() => navigate('/about')} className="text-muted-foreground hover:text-primary transition-all duration-300">About Us</button></li>
              <li><button onClick={() => navigate('/all-products')} className="text-muted-foreground hover:text-primary transition-all duration-300">All Products</button></li>
              <li><button onClick={() => navigate('/services')} className="text-muted-foreground hover:text-primary transition-all duration-300">Services & Support</button></li>
              <li><button onClick={() => navigate('/quality')} className="text-muted-foreground hover:text-primary transition-all duration-300">Quality Assurance</button></li>
              <li><button onClick={() => navigate('/contact')} className="text-muted-foreground hover:text-primary transition-all duration-300">Contact</button></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">Product Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => navigate('/products?category=Heating%20Instruments')} className="text-muted-foreground hover:text-primary transition-all duration-300 text-left">Heating Instruments</button></li>
              <li><button onClick={() => navigate('/products?category=Industrial%20Furnace')} className="text-muted-foreground hover:text-primary transition-all duration-300 text-left">Industrial Furnace</button></li>
              <li><button onClick={() => navigate('/products?category=Environmental%20Chamber')} className="text-muted-foreground hover:text-primary transition-all duration-300 text-left">Environmental Chamber</button></li>
              <li><button onClick={() => navigate('/products?category=Heater')} className="text-muted-foreground hover:text-primary transition-all duration-300 text-left">Heaters</button></li>
              <li><button onClick={() => navigate('/products?category=Microbiology%20Instruments')} className="text-muted-foreground hover:text-primary transition-all duration-300 text-left">Microbiology Instruments</button></li>
              <li><button onClick={() => navigate('/products?category=Thermocouple')} className="text-muted-foreground hover:text-primary transition-all duration-300 text-left">Thermocouple</button></li>
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
                <Award className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">MSME Certificate</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-muted hover:bg-primary rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary-foreground transition-all duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2025 Servo Scientific Suppliers. All rights reserved.</p>
            <div className="flex flex-wrap gap-4 md:gap-6 mt-4 md:mt-0 justify-center">
              <button onClick={() => navigate('/privacy')} className="hover:text-primary transition-all duration-300">Privacy Policy</button>
              <button onClick={() => navigate('/terms')} className="hover:text-primary transition-all duration-300">Terms of Service</button>
              <button onClick={() => navigate('/cookies')} className="hover:text-primary transition-all duration-300">Cookie Policy</button>
              <span className="text-muted-foreground">|</span>
              <a 
                href="https://www.nextcraft.co.in" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-medium hover:text-primary transition-all duration-300"
              >
                Web Designed by RT
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;