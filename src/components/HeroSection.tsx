import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Users, Package, Clock } from 'lucide-react';
import heroBg1 from '@/assets/hero-bg-1.jpg';
import heroBg2 from '@/assets/hero-bg-2.jpg';
import heroBg3 from '@/assets/hero-bg-3.jpg';
import heroBg4 from '@/assets/hero-bg-4.jpg';
import heroBg5 from '@/assets/hero-bg-5.jpg';

interface HeroSectionProps {
  onInquiryClick: () => void;
  onAllProductsClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onInquiryClick, onAllProductsClick }) => {
  const backgroundImages = [heroBg1, heroBg2, heroBg3, heroBg4, heroBg5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 180000); // Change every 3 minutes (180000ms)

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative py-32 min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with smooth transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-white mb-6 animate-fade-in">
            Welcome to 
            <span className="block text-professional-blue-light dark:text-blue-300">Servo Scientific Suppliers</span>
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