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
}

const Footer: React.FC<FooterProps> = ({ onInquiryClick }) => {
  return (
    <footer className="bg-technical-gray dark:bg-slate-900 text-white dark:text-slate-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-professional-blue-light dark:text-blue-300 mb-4">
                Servo Scientific
              </h3>
              <p className="text-gray-300 dark:text-slate-400 text-sm leading-relaxed">
                Leading manufacturer of scientific and industrial equipment for over 50 years.
                Committed to innovation, quality, and customer satisfaction.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex items-center justify-center w-10 h-10 bg-professional-blue rounded-lg">
                <Award className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-sm font-medium">ISO Certified</p>
                <p className="text-xs text-gray-300">Quality Management System</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-professional-blue-light dark:text-blue-300">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/about" className="text-gray-300 dark:text-slate-400 hover:text-professional-blue-light dark:hover:text-blue-300 transition-colors">About Us</a></li>
              <li><a href="/products" className="text-gray-300 dark:text-slate-400 hover:text-professional-blue-light dark:hover:text-blue-300 transition-colors">All Products</a></li>
              <li><a href="/services" className="text-gray-300 hover:text-professional-blue-light transition-colors">Services & Support</a></li>
              <li><a href="/quality" className="text-gray-300 hover:text-professional-blue-light transition-colors">Quality Assurance</a></li>
              <li><a href="/careers" className="text-gray-300 hover:text-professional-blue-light transition-colors">Careers</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-professional-blue-light transition-colors">News & Updates</a></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-professional-blue-light dark:text-blue-300">Product Categories</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/heating-instruments" className="text-gray-300 hover:text-professional-blue-light transition-colors">Heating Instruments</a></li>
              <li><a href="/industrial-furnace" className="text-gray-300 hover:text-professional-blue-light transition-colors">Industrial Furnace</a></li>
              <li><a href="/environmental-chamber" className="text-gray-300 hover:text-professional-blue-light transition-colors">Environmental Chamber</a></li>
              <li><a href="/heaters" className="text-gray-300 hover:text-professional-blue-light transition-colors">Heaters</a></li>
              <li><a href="/microbiology" className="text-gray-300 hover:text-professional-blue-light transition-colors">Microbiology Instruments</a></li>
              <li><a href="/thermocouple" className="text-gray-300 hover:text-professional-blue-light transition-colors">Thermocouple</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-professional-blue-light dark:text-blue-300">Contact Information</h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-professional-blue-light mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 dark:text-slate-400">123 Industrial Avenue</p>
                  <p className="text-gray-300 dark:text-slate-400">Science Park, Tech City 12345</p>
                  <p className="text-gray-300 dark:text-slate-400">United States</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-professional-blue-light flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                  <p className="text-xs text-gray-400">Sales & Support</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-professional-blue-light flex-shrink-0" />
                <div>
                  <p className="text-gray-300">info@servoscientific.com</p>
                  <p className="text-xs text-gray-400">General Inquiries</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 text-professional-blue-light flex-shrink-0" />
                <p className="text-gray-300">www.servoscientific.com</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-professional-blue-light flex-shrink-0" />
                <div>
                  <p className="text-gray-300">24/7 Customer Support</p>
                  <p className="text-xs text-gray-400">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 pt-8 border-t border-gray-600 dark:border-slate-700">
          <div className="bg-gradient-hero rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contact our expert team today for personalized solutions and competitive pricing on all our scientific equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="inquiry" 
                size="lg"
                onClick={onInquiryClick}
                className="bg-white text-professional-blue hover:bg-gray-100"
              >
                Get Free Quote
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-professional-blue"
              >
                Download Catalog
              </Button>
            </div>
          </div>
        </div>

        {/* Social Media & Certifications */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-6 md:mb-0">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-professional-blue-light" />
                <span className="text-sm text-gray-300">CE Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-professional-blue-light" />
                <span className="text-sm text-gray-300">ISO 9001:2015</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-600 hover:bg-professional-blue rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-600 hover:bg-professional-blue rounded-lg flex items-center justify-center transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-600 hover:bg-professional-blue rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-600 hover:bg-professional-blue rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-600 hover:bg-professional-blue rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Servo Scientific. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/privacy" className="hover:text-professional-blue-light transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-professional-blue-light transition-colors">Terms of Service</a>
              <a href="/cookies" className="hover:text-professional-blue-light transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;