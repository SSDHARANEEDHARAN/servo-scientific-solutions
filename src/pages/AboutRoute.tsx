import React from 'react';
import { useNavigate } from 'react-router-dom';
import AboutPage from '@/components/AboutPage';
import Navigation from '@/components/Navigation';
import SEOHead from '@/components/SEOHead';

const AboutRoute: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Servo Scientific Suppliers",
    "description": "Learn about Servo Scientific Suppliers - 50+ years of excellence in scientific equipment manufacturing",
    "mainEntity": {
      "@type": "Organization",
      "name": "Servo Scientific Suppliers",
      "foundingDate": "1970",
      "description": "Leading manufacturer of scientific and industrial equipment"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us | Servo Scientific Suppliers"
        description="Learn about Servo Scientific Suppliers - pioneering scientific excellence since 1970 with over 50 years of experience in manufacturing laboratory and industrial equipment."
        canonical="https://servoscientific.com/about"
        structuredData={structuredData}
      />
      <Navigation
        onProductSelect={() => {}}
        onAboutClick={() => navigate('/about')}
        onContactClick={() => navigate('/contact')}
      />
      <AboutPage
        onBack={handleBack}
        onInquiryClick={() => {}}
      />
    </div>
  );
};

export default AboutRoute;
