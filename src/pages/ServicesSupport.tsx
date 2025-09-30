import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Wrench, Phone, Clock, Award, Shield, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ServicesSupportProps {
  onBackToHome: () => void;
  onInquiryClick: () => void;
}

const ServicesSupport: React.FC<ServicesSupportProps> = ({ onBackToHome, onInquiryClick }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Send form data to backend
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'service',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message
        }),
      });

      if (response.ok) {
        toast({
          title: "Service request submitted successfully!",
          description: "Our support team will contact you within 2 hours.",
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit service request');
      }
    } catch (error) {
      console.error('Error submitting service request:', error);
      toast({
        title: "Error submitting request",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    }
  };

  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Installation & Setup",
      description: "Professional installation and configuration of all scientific equipment by certified technicians.",
      features: ["On-site installation", "Equipment calibration", "Staff training", "Documentation"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance programs and rapid repair services to keep your equipment running optimally.",
      features: ["Preventive maintenance", "24/7 emergency repair", "Genuine spare parts", "Performance optimization"]
    },
    {
      icon: <Phone className="h-8 w-8 text-primary" />,
      title: "Technical Support",
      description: "Expert technical support available round the clock to assist with any equipment-related queries.",
      features: ["24/7 helpline", "Remote diagnostics", "Expert consultation", "Troubleshooting guides"]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Calibration Services",
      description: "Precise calibration services to ensure your instruments meet industry standards and regulations.",
      features: ["NIST traceable calibration", "Certification documents", "Compliance verification", "Regular scheduling"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button
            variant="outline"
            onClick={onBackToHome}
            className="mb-6 border-white text-white hover:bg-white hover:text-professional-blue"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services & Support</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Comprehensive support services to ensure your equipment performs at its best, backed by our team of expert technicians.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Support Information */}
        <div className="bg-gradient-soft rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Need Immediate Support?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our expert support team is available 24/7 to help you with any equipment issues or technical questions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Emergency Hotline</h3>
                <p className="text-muted-foreground text-sm mb-3">24/7 Emergency Support</p>
                <p className="font-medium text-primary">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-muted-foreground text-sm mb-3">Average Response</p>
                <p className="font-medium text-primary">Within 2 Hours</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Warranty</h3>
                <p className="text-muted-foreground text-sm mb-3">Standard Coverage</p>
                <p className="font-medium text-primary">2-5 Years</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Support Request Form */}
        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle className="text-2xl">Request Support</CardTitle>
            <p className="text-muted-foreground">
              Fill out the form below and our support team will get back to you within 2 hours.
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Service Type *</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a service type</option>
                  <option value="installation">Installation & Setup</option>
                  <option value="maintenance">Maintenance & Repair</option>
                  <option value="technical-support">Technical Support</option>
                  <option value="calibration">Calibration Services</option>
                  <option value="warranty">Warranty Claim</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder="Describe your support request in detail..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  Submit Support Request
                </Button>
                <Button type="button" variant="outline" onClick={onInquiryClick}>
                  General Inquiry
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServicesSupport;