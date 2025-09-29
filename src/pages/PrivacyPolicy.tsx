import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, UserCheck } from 'lucide-react';

interface PrivacyPolicyProps {
  onBackToHome: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome }) => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Last updated: January 2024</span>
            </div>
          </CardContent>
        </Card>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Eye className="h-6 w-6 text-primary" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent className="prose max-w-none">
            <p className="text-muted-foreground mb-4">
              Servo Scientific Suppliers ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website, use our services, or engage with us in any way.
            </p>
            <p className="text-muted-foreground">
              Please read this Privacy Policy carefully. If you do not agree with the terms of this 
              Privacy Policy, please do not access our website or use our services.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <UserCheck className="h-6 w-6 text-primary" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Personal Information</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Name, email address, and phone number</li>
                  <li>• Company name and job title</li>
                  <li>• Billing and shipping addresses</li>
                  <li>• Payment information (processed securely)</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Usage Information</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Browser type and version</li>
                  <li>• Operating system</li>
                  <li>• IP address and location data</li>
                  <li>• Pages visited and time spent</li>
                  <li>• Referral sources</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Communication Data</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Inquiry forms and support requests</li>
                  <li>• Email correspondence</li>
                  <li>• Phone call recordings (with consent)</li>
                  <li>• Live chat conversations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Service Delivery:</strong> Process orders, provide customer support, and deliver requested services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Communication:</strong> Send product updates, technical information, and respond to inquiries</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Improvement:</strong> Analyze usage patterns to improve our website and services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Marketing:</strong> Send relevant product information and promotional materials (with consent)</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p><strong>Legal Compliance:</strong> Meet regulatory requirements and protect our legal interests</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <div className="space-y-4 text-muted-foreground">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Service Providers</h4>
                <p>Trusted third-party vendors who help us operate our business (payment processors, shipping companies, etc.)</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Legal Requirements</h4>
                <p>When required by law, court order, or government request</p>
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Business Transfers</h4>
                <p>In connection with mergers, acquisitions, or sale of assets (with appropriate safeguards)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We implement appropriate technical and organizational measures to protect your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-medium">Technical Measures:</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• SSL/TLS encryption</li>
                  <li>• Secure data centers</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls</li>
                </ul>
              </div>
              <div className="space-y-2">
                <p className="font-medium">Organizational Measures:</p>
                <ul className="text-muted-foreground text-sm space-y-1">
                  <li>• Staff training</li>
                  <li>• Data handling policies</li>
                  <li>• Incident response procedures</li>
                  <li>• Regular policy reviews</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">You have the right to:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Access your personal information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Correct inaccurate information</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Delete your information</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Opt-out of marketing communications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Restrict processing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <span>Data portability</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cookies */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cookies and Tracking Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We use cookies and similar technologies to enhance your browsing experience and analyze website traffic. 
              You can control cookie preferences through your browser settings.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Essential Cookies</span>
                <span className="text-primary font-medium">Always Active</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Analytics Cookies</span>
                <span className="text-muted-foreground">Optional</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                <span>Marketing Cookies</span>
                <span className="text-muted-foreground">Optional</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Email:</strong> privacy@servoscientific.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Industrial Avenue, Salem, Tamil Nadu 636001, India</p>
            </div>
          </CardContent>
        </Card>

        {/* Updates */}
        <Card>
          <CardHeader>
            <CardTitle>Policy Updates</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
              Your continued use of our services after such modifications constitutes acceptance of the updated Privacy Policy.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PrivacyPolicy;