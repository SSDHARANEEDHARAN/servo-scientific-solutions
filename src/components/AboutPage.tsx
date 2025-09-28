import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, Mail, Quote, Award, Users, Globe, TrendingUp, Star, Shield } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface AboutPageProps {
  onBack: () => void;
  onInquiryClick: () => void;
}

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2000, suffix = "", prefix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="counter-animation">
      <span className="text-4xl font-bold text-primary glow-effect">
        {prefix}{count}{suffix}
      </span>
    </div>
  );
};

const AboutPage: React.FC<AboutPageProps> = ({ onBack, onInquiryClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [78.1460, 11.6643],
      zoom: 13,
    });

    new mapboxgl.Marker({
      color: '#2563eb'
    })
    .setLngLat([78.1460, 11.6643])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h3>Servo Scientific Suppliers</h3><p>123 Industrial Avenue, Salem</p>')
    )
    .addTo(map.current);

    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Enhanced Gradient */}
      <div className="bg-gradient-hero text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center mb-8">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-primary-foreground hover:bg-primary-foreground/10 mr-4 shadow-card transition-all duration-300 hover:shadow-card-hover"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
          </div>
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-6 animate-fade-in">About Us</h1>
            <p className="text-2xl text-primary-foreground/90 max-w-4xl mx-auto animate-fade-in">
              Pioneering scientific excellence since 1970, creating innovative solutions for tomorrow's challenges
            </p>
          </div>
        </div>
      </div>

      {/* Animated Statistics Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          <Card className="bg-card border-border shadow-elegant card-hover">
            <CardContent className="p-8 text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <Counter end={50} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Years of Excellence</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-elegant card-hover">
            <CardContent className="p-8 text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <Counter end={10000} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Happy Customers</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-elegant card-hover">
            <CardContent className="p-8 text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <Counter end={150} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Quality Products</p>
            </CardContent>
          </Card>

          <Card className="bg-card border-border shadow-elegant card-hover">
            <CardContent className="p-8 text-center">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <Counter end={25} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Countries Served</p>
            </CardContent>
          </Card>
        </div>

        {/* Enhanced Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8 flex items-center">
                <Star className="h-8 w-8 text-primary mr-4" />
                Our Legacy
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded in 1970 in Salem, Tamil Nadu, Servo Scientific Suppliers began as a small workshop with a revolutionary vision to transform scientific equipment manufacturing in India.
                </p>
                <p className="leading-relaxed">
                  Over five decades, we have consistently innovated and expanded our product portfolio to meet the dynamic needs of laboratories, research institutions, and industrial facilities worldwide. Our unwavering commitment to quality, precision, and customer satisfaction forms the foundation of our success story.
                </p>
                <p className="leading-relaxed">
                  Today, we proudly serve over 10,000 satisfied customers across the globe, maintaining our leadership position while staying true to our core values of innovation, excellence, and integrity.
                </p>
              </div>
            </div>

            <Card className="bg-gradient-card border-none shadow-professional card-hover">
              <CardContent className="p-8">
                <Quote className="h-16 w-16 text-primary mb-6 opacity-20" />
                <blockquote className="text-xl font-medium text-foreground mb-6 relative">
                  "Innovation distinguishes between a leader and a follower. We choose to lead with purpose, precision, and passion."
                </blockquote>
                <cite className="text-muted-foreground font-medium">- Company Philosophy</cite>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-card border-border shadow-card card-hover">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Shield className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">ISO 9001:2015 Certified</h4>
                      <p className="text-sm text-muted-foreground">Internationally recognized quality management standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Award className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Industry Recognition</h4>
                      <p className="text-sm text-muted-foreground">Multiple awards for innovation and excellence</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Users className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Expert Team</h4>
                      <p className="text-sm text-muted-foreground">50+ years of combined engineering expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground">Global Presence</h4>
                      <p className="text-sm text-muted-foreground">Trusted by institutions worldwide</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Leadership Team */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Meet Our Visionary Leaders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <Card className="bg-card border-border shadow-elegant card-hover group">
              <CardContent className="p-10 text-center">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Users className="h-20 w-20 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Karthickeyan</h3>
                <p className="text-primary font-semibold mb-6 text-lg">Founder & Chairman</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A visionary engineer with over 50 years of experience in scientific equipment design. Karthickeyan founded the company with a mission to democratize access to high-quality laboratory equipment for Indian researchers and institutions.
                </p>
                <div className="flex justify-center items-center space-x-3 bg-gradient-card rounded-full py-3 px-6">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground font-medium">Padma Shri Recipient</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-elegant card-hover group">
              <CardContent className="p-10 text-center">
                <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Globe className="h-20 w-20 text-primary-foreground" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">Karthikeyan</h3>
                <p className="text-primary font-semibold mb-6 text-lg">Managing Director</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Leading the company into the digital transformation era with innovative solutions and global expansion strategies. Karthikeyan brings 25 years of international business experience and has been instrumental in our ISO certifications.
                </p>
                <div className="flex justify-center items-center space-x-3 bg-gradient-card rounded-full py-3 px-6">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-foreground font-medium">Business Excellence Award</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Map Only */}
        <div className="mb-24">
          <h2 className="text-4xl font-bold text-foreground text-center mb-16">
            Our Location
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant card-hover overflow-hidden">
              <div className="h-96 rounded-lg overflow-hidden">
                {mapboxToken ? (
                  <div ref={mapContainer} className="w-full h-full" />
                ) : (
                  <div className="w-full h-full bg-gradient-card flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-16 w-16 text-primary mx-auto mb-6 opacity-50" />
                      <p className="text-muted-foreground text-lg mb-4">Interactive Map</p>
                      <p className="text-muted-foreground text-sm">Salem, Tamil Nadu, India</p>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;