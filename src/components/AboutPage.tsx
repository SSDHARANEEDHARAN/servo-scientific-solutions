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
      <span className="text-4xl font-bold text-primary">
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
      {/* Professional Hero Section */}
      <div className="relative bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-primary/10 rounded text-primary text-sm font-medium">
              Established 1970
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pioneering scientific excellence since 1970, creating innovative solutions for tomorrow's challenges
            </p>
          </div>
        </div>
      </div>

      {/* Professional Statistics Section */}
      <div className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <Counter end={50} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Years of Excellence</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <Counter end={10000} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Happy Customers</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <Counter end={150} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Quality Products</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <Counter end={25} suffix="+" />
              <p className="text-sm text-muted-foreground mt-2 font-medium">Countries Served</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Legacy Section */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded text-primary text-sm font-medium mb-4">
              <Star className="h-4 w-4" />
              Our Story
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-3">
              Our Legacy
            </h2>
            <div className="h-0.5 w-16 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Founded in 1970 in Salem, Tamil Nadu, Servo Scientific Suppliers began as a small workshop with a revolutionary vision to transform scientific equipment manufacturing in India.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Over five decades, we have consistently innovated and expanded our product portfolio to meet the dynamic needs of laboratories, research institutions, and industrial facilities worldwide. Our unwavering commitment to quality, precision, and customer satisfaction forms the foundation of our success story.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Today, we proudly serve over 10,000 satisfied customers across the globe, maintaining our leadership position while staying true to our core values of innovation, excellence, and integrity.
              </p>
            </div>

            {/* Quote Card */}
            <div className="bg-card border border-border rounded-lg p-8">
              <Quote className="h-10 w-10 text-primary mb-6" />
              <blockquote className="text-lg font-medium text-foreground mb-4">
                "Innovation distinguishes between a leader and a follower. We choose to lead with purpose, precision, and passion."
              </blockquote>
              <cite className="text-muted-foreground text-sm">- Company Philosophy</cite>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded text-primary text-sm font-medium mb-4">
              <Shield className="h-4 w-4" />
              Excellence
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-3">Why Choose Us?</h2>
            <div className="h-0.5 w-16 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">ISO 9001:2015 Certified</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Internationally recognized quality management standards</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Industry Recognition</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Multiple awards for innovation and excellence</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Expert Team</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">50+ years of combined engineering expertise</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Global Presence</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">Trusted by institutions worldwide</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded text-primary text-sm font-medium mb-4">
              <MapPin className="h-4 w-4" />
              Visit Us
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-3">Our Location</h2>
            <div className="h-0.5 w-16 bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Address</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        123 Industrial Avenue, Sector 4<br />
                        Salem - 636004, Tamil Nadu<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground text-sm">+91 427 1234567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">info@servoscientific.com</p>
                    </div>
                  </div>

                  <Button onClick={onInquiryClick} className="w-full">
                    Send Inquiry
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                {mapboxToken ? (
                  <div ref={mapContainer} className="h-[400px] w-full rounded-lg" />
                ) : (
                  <div className="h-[400px] w-full bg-muted/50 flex items-center justify-center rounded-lg">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <MapPin className="h-8 w-8 text-primary" />
                      </div>
                      <p className="text-sm font-medium text-foreground mb-1">Interactive Map</p>
                      <p className="text-xs text-muted-foreground">Salem, Tamil Nadu, India</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;