import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Package, Clock } from 'lucide-react';

interface HeroSectionProps {
  onInquiryClick: () => void;
  onAllProductsClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onInquiryClick, onAllProductsClick }) => {
  return (
    <section className="relative bg-gradient-hero dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800 py-32 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-to)_1px,_transparent_1px)] [background-size:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white mb-6 animate-fade-in">
            Welcome to 
            <span className="block text-professional-blue-light dark:text-blue-300">Servo Scientific</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 dark:text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Leading manufacturer of scientific and industrial equipment, serving
            global customers with precision instruments for over 50 years.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in">
            <Button 
              variant="inquiry" 
              size="lg"
              onClick={onInquiryClick}
              className="text-lg px-8 py-4"
            >
              Get Quote Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={onAllProductsClick}
              className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white hover:text-professional-blue"
            >
              View All Products
            </Button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white dark:text-slate-200">
            <div className="text-center animate-fade-in">
              <div className="flex justify-center mb-2">
                <Award className="h-8 w-8 text-professional-blue-light" />
              </div>
              <div className="text-3xl font-bold">50+</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="flex justify-center mb-2">
                <Users className="h-8 w-8 text-professional-blue-light" />
              </div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-white/80">Global Customers</div>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="flex justify-center mb-2">
                <Package className="h-8 w-8 text-professional-blue-light" />
              </div>
              <div className="text-3xl font-bold">200+</div>
              <div className="text-sm text-white/80">Product Lines</div>
            </div>
            
            <div className="text-center animate-fade-in">
              <div className="flex justify-center mb-2">
                <Clock className="h-8 w-8 text-professional-blue-light" />
              </div>
              <div className="text-3xl font-bold">24/7</div>
              <div className="text-sm text-white/80">Support Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;