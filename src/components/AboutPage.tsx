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
      {/* Modern Hero Section with Diagonal Design */}
      <div className="relative bg-background overflow-hidden">
        {/* Diagonal Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-blue-600 to-purple-600 transform -skew-y-3 origin-top-left scale-110"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_70%)]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white hover:bg-white/10 mb-8 backdrop-blur-sm"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
              Established 1970
            </div>
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-2xl text-white/90 leading-relaxed">
              Pioneering scientific excellence since 1970, creating innovative solutions for tomorrow's challenges
            </p>
          </div>
        </div>
      </div>

      {/* Floating Statistics Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-20 mb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
              <TrendingUp className="h-7 w-7 text-white" />
            </div>
            <Counter end={50} suffix="+" />
            <p className="text-sm text-muted-foreground mt-2 font-medium">Years of Excellence</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-white" />
            </div>
            <Counter end={10000} suffix="+" />
            <p className="text-sm text-muted-foreground mt-2 font-medium">Happy Customers</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4">
              <Award className="h-7 w-7 text-white" />
            </div>
            <Counter end={150} suffix="+" />
            <p className="text-sm text-muted-foreground mt-2 font-medium">Quality Products</p>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 border border-slate-100 dark:border-slate-700">
            <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
              <Globe className="h-7 w-7 text-white" />
            </div>
            <Counter end={25} suffix="+" />
            <p className="text-sm text-muted-foreground mt-2 font-medium">Countries Served</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Our Legacy Section - Side by Side Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-32">
          <div className="lg:col-span-2 space-y-6">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Story</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              Our Legacy
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full"></div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            <p className="text-xl text-foreground leading-relaxed font-medium">
              Founded in 1970 in Salem, Tamil Nadu, Servo Scientific Suppliers began as a small workshop with a revolutionary vision to transform scientific equipment manufacturing in India.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Over five decades, we have consistently innovated and expanded our product portfolio to meet the dynamic needs of laboratories, research institutions, and industrial facilities worldwide. Our unwavering commitment to quality, precision, and customer satisfaction forms the foundation of our success story.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we proudly serve over 10,000 satisfied customers across the globe, maintaining our leadership position while staying true to our core values of innovation, excellence, and integrity.
            </p>

            {/* Quote Card with Modern Design */}
            <div className="relative mt-8 p-8 bg-gradient-to-br from-primary/5 via-purple-500/5 to-transparent rounded-2xl border-l-4 border-primary">
              <Quote className="h-12 w-12 text-primary/20 absolute top-6 right-6" />
              <blockquote className="text-xl font-semibold text-foreground mb-4 relative z-10">
                "Innovation distinguishes between a leader and a follower. We choose to lead with purpose, precision, and passion."
              </blockquote>
              <cite className="text-muted-foreground font-medium">- Company Philosophy</cite>
            </div>
          </div>
        </div>

        {/* Why Choose Us - Bento Grid Style */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Excellence</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">Why Choose Us?</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-blue-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">ISO 9001:2015 Certified</h3>
              <p className="text-muted-foreground leading-relaxed">Internationally recognized quality management standards</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-orange-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Industry Recognition</h3>
              <p className="text-muted-foreground leading-relaxed">Multiple awards for innovation and excellence</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-green-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Expert Team</h3>
              <p className="text-muted-foreground leading-relaxed">50+ years of combined engineering expertise</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-700 p-8 rounded-2xl border border-purple-100 dark:border-slate-600 hover:shadow-xl transition-all duration-300 group">
              <div className="w-16 h-16 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Global Presence</h3>
              <p className="text-muted-foreground leading-relaxed">Trusted by institutions worldwide</p>
            </div>
          </div>
        </div>

        {/* Leadership Team - Modern Card Design */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Leadership</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">Meet Our Visionary Leaders</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Leader 1 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-purple-600 rounded-full blur-lg opacity-50"></div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center">
                      <Users className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-2">Karthickeyan</h3>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-6">
                    <span className="text-primary font-semibold">Founder & Chairman</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A visionary engineer with over 50 years of experience in scientific equipment design. Karthickeyan founded the company with a mission to democratize access to high-quality laboratory equipment for Indian researchers and institutions.
                  </p>
                  
                  <div className="flex items-center gap-2 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 px-4 py-2 rounded-full border border-orange-200 dark:border-orange-800">
                    <Award className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    <span className="text-sm font-medium text-orange-900 dark:text-orange-300">Padma Shri Recipient</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Leader 2 */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl p-10 border border-slate-100 dark:border-slate-700 hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-lg opacity-50"></div>
                    <div className="relative w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                      <Globe className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-foreground mb-2">Karthikeyan</h3>
                  <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-1.5 rounded-full mb-6">
                    <span className="text-primary font-semibold">Managing Director</span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Leading the company into the digital transformation era with innovative solutions and global expansion strategies. Karthikeyan brings 25 years of international business experience and has been instrumental in our ISO certifications.
                  </p>
                  
                  <div className="flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 px-4 py-2 rounded-full border border-blue-200 dark:border-blue-800">
                    <Award className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm font-medium text-blue-900 dark:text-blue-300">Business Excellence Award</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Section - Modern Design */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-semibold text-primary">Visit Us</span>
            </div>
            <h2 className="text-5xl font-bold text-foreground mb-4">Our Location</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mx-auto"></div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white dark:bg-slate-800 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-700">
                <div className="h-[500px]">
                  {mapboxToken ? (
                    <div ref={mapContainer} className="w-full h-full rounded-3xl" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                          <MapPin className="h-12 w-12 text-primary" />
                        </div>
                        <p className="text-xl font-semibold text-foreground mb-2">Interactive Map</p>
                        <p className="text-muted-foreground">Salem, Tamil Nadu, India</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;