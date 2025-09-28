import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, MapPin, Phone, Mail, Quote, Award, Users, Globe } from 'lucide-react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface AboutPageProps {
  onBack: () => void;
  onInquiryClick: () => void;
}

const AboutPage: React.FC<AboutPageProps> = ({ onBack, onInquiryClick }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');

  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return;

    // Initialize map for Salem, Tamil Nadu
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [78.1460, 11.6643], // Salem, Tamil Nadu coordinates
      zoom: 13,
    });

    // Add marker for company location
    new mapboxgl.Marker({
      color: '#2563eb'
    })
    .setLngLat([78.1460, 11.6643])
    .setPopup(
      new mapboxgl.Popup({ offset: 25 })
        .setHTML('<h3>Servo Scientific Suppliers</h3><p>123 Industrial Avenue, Salem</p>')
    )
    .addTo(map.current);

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Button 
              variant="ghost" 
              onClick={onBack}
              className="text-primary-foreground hover:bg-primary-foreground/10 mr-4"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
          </div>
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl">
            Pioneering scientific excellence since 1970, Servo Scientific Suppliers has been at the forefront of laboratory and industrial equipment manufacturing.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Founded in 1970 in Salem, Tamil Nadu, Servo Scientific Suppliers began as a small workshop with a vision to revolutionize scientific equipment manufacturing in India. What started as a humble beginning has now grown into one of the most trusted names in the industry.
              </p>
              <p className="leading-relaxed">
                Over five decades, we have continuously innovated and expanded our product range to meet the evolving needs of laboratories, research institutions, and industrial facilities across the globe. Our commitment to quality, precision, and customer satisfaction has been the cornerstone of our success.
              </p>
              <p className="leading-relaxed">
                Today, we serve over 10,000 satisfied customers worldwide, maintaining our position as a leader in scientific equipment manufacturing while staying true to our core values of innovation, quality, and integrity.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-card border-none">
              <CardContent className="p-8">
                <Quote className="h-12 w-12 text-primary mb-6" />
                <blockquote className="text-lg font-medium text-foreground mb-4">
                  "Excellence is never an accident. It is always the result of high intention, sincere effort, and intelligent execution."
                </blockquote>
                <cite className="text-muted-foreground">- Our Company Philosophy</cite>
              </CardContent>
            </Card>

            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Founder */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
                  <Users className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-primary font-medium mb-4">Founder & Chairman</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A visionary engineer with over 50 years of experience in scientific equipment design. Dr. Kumar founded the company with a mission to make high-quality laboratory equipment accessible to Indian researchers and institutions.
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Padma Shri Recipient</span>
                </div>
              </CardContent>
            </Card>

            {/* Director */}
            <Card className="bg-card border-border">
              <CardContent className="p-8 text-center">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-hero flex items-center justify-center">
                  <Globe className="h-16 w-16 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Ms. Priya Sharma</h3>
                <p className="text-primary font-medium mb-4">Managing Director</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Leading the company into the digital age with innovative solutions and global expansion strategies. Ms. Sharma brings 25 years of international business experience and has been instrumental in our ISO certifications.
                </p>
                <div className="mt-6 flex justify-center space-x-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Business Excellence Award</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Location & Map */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Visit Our Facility</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Our Location in Salem</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Factory & Head Office</p>
                    <p className="text-muted-foreground">123 Industrial Avenue</p>
                    <p className="text-muted-foreground">Salem, Tamil Nadu 636001, India</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">+91 427 123 4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">info@servoscientific.com</p>
                  </div>
                </div>
              </div>

              {!mapboxToken && (
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Enter Mapbox Public Token to view map:
                  </label>
                  <input
                    type="text"
                    value={mapboxToken}
                    onChange={(e) => setMapboxToken(e.target.value)}
                    placeholder="pk.eyJ1..."
                    className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Get your free token from{' '}
                    <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      mapbox.com
                    </a>
                  </p>
                </div>
              )}

              <Button 
                onClick={onInquiryClick}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                size="lg"
              >
                Schedule a Visit
              </Button>
            </div>

            <div className="h-96 rounded-lg overflow-hidden border border-border">
              {mapboxToken ? (
                <div ref={mapContainer} className="w-full h-full" />
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Enter Mapbox token to view interactive map</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Values & Certifications */}
        <div>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Values & Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Quality Excellence</h3>
                <p className="text-muted-foreground text-sm">
                  ISO 9001:2015 certified manufacturing processes ensuring consistent quality in every product.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Customer First</h3>
                <p className="text-muted-foreground text-sm">
                  24/7 customer support and after-sales service with nationwide service network.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">
                  Serving customers in 25+ countries with CE certified products meeting international standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;