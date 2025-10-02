import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Send, Mail, Phone, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

interface ContactProps {
  onBackToHome: () => void;
  onInquiryClick: () => void;
}

const Contact: React.FC<ContactProps> = ({ onBackToHome, onInquiryClick }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onInquiryClick={onInquiryClick} onProductSelect={() => {}} onAboutClick={() => {}} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={onBackToHome}
          className="mb-8 text-foreground hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
            <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Your full name"
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-foreground">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="text-foreground">Subject *</Label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  placeholder="How can we help?"
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-foreground">Message *</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Tell us more about your inquiry..."
                  rows={6}
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-card border border-border rounded-lg p-8 shadow-elegant">
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">servoscientific@yahoo.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                    <p className="text-muted-foreground">+1 (234) 567-890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      Servo Scientific Suppliers<br />
                      123 Industrial Drive<br />
                      Science City, SC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-primary p-8 rounded-lg shadow-elegant">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-primary-foreground/90">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer onInquiryClick={onInquiryClick} />
    </div>
  );
};

export default Contact;
