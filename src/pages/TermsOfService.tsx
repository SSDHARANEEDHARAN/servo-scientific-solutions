import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';

interface TermsOfServiceProps {
  onBackToHome: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBackToHome }) => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Please read these terms carefully before using our services. By using our website and services, you agree to these terms.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Last Updated */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">Last updated: January 2024</span>
            </div>
          </CardContent>
        </Card>

        {/* Acceptance of Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <CheckCircle className="h-6 w-6 text-primary" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              These Terms of Service ("Terms") govern your use of the Servo Scientific Suppliers website 
              and services. By accessing or using our website, you agree to be bound by these Terms. 
              If you do not agree to these Terms, please do not use our services.
            </p>
            <p className="text-muted-foreground">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately 
              upon posting on our website. Your continued use of our services after such changes constitutes 
              acceptance of the new Terms.
            </p>
          </CardContent>
        </Card>

        {/* Services Description */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Description of Services</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Servo Scientific Suppliers provides:
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Manufacturing and supply of scientific and industrial equipment</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Technical support and maintenance services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Installation and calibration services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Training and consultation services</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-muted-foreground">Online product information and ordering platform</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* User Responsibilities */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Responsibilities</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">As a user of our services, you agree to:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Permitted Use</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Use services for legitimate business purposes</li>
                  <li>• Provide accurate and complete information</li>
                  <li>• Maintain confidentiality of account credentials</li>
                  <li>• Comply with applicable laws and regulations</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Prohibited Activities</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Unauthorized access to our systems</li>
                  <li>• Distribution of harmful software</li>
                  <li>• Interference with service operations</li>
                  <li>• Violation of intellectual property rights</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Orders and Payments */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Orders and Payments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Order Process</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• All orders are subject to acceptance and availability</li>
                  <li>• Prices are subject to change without notice</li>
                  <li>• We reserve the right to refuse or cancel orders</li>
                  <li>• Order confirmation does not guarantee delivery dates</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-3">Payment Terms</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Payment is due as specified in the order confirmation</li>
                  <li>• All prices are exclusive of taxes unless stated otherwise</li>
                  <li>• Late payment may result in service suspension</li>
                  <li>• Disputed charges must be reported within 30 days</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Shipping and Delivery</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Delivery dates are estimates and not guaranteed</li>
                  <li>• Risk of loss transfers upon shipment</li>
                  <li>• Customer is responsible for shipping costs unless otherwise agreed</li>
                  <li>• Damaged shipments must be reported within 48 hours</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Warranties and Disclaimers */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              Warranties and Disclaimers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Product Warranties</h4>
                <p className="text-muted-foreground mb-3">
                  We provide warranties as specified in individual product documentation. 
                  Warranty terms vary by product and are subject to proper use and maintenance.
                </p>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Warranty period begins from delivery date</li>
                  <li>• Warranty covers manufacturing defects only</li>
                  <li>• Misuse or unauthorized modifications void warranty</li>
                  <li>• Warranty remedies are limited to repair or replacement</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Service Disclaimers</h4>
                <p className="text-muted-foreground text-sm">
                  EXCEPT AS EXPRESSLY PROVIDED, ALL SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES 
                  OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO MERCHANTABILITY, 
                  FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-primary" />
              Limitation of Liability
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
              <p className="text-amber-800 dark:text-amber-200 text-sm font-medium">
                Important Liability Limitations
              </p>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SERVO SCIENTIFIC SUPPLIERS SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="space-y-2 text-sm ml-4">
                <li>• INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES</li>
                <li>• LOSS OF PROFITS, REVENUE, OR DATA</li>
                <li>• BUSINESS INTERRUPTION OR LOST OPPORTUNITIES</li>
                <li>• DAMAGES EXCEEDING THE AMOUNT PAID FOR THE PRODUCT OR SERVICE</li>
              </ul>
              <p className="text-sm">
                Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, 
                so some of the above limitations may not apply to you.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Intellectual Property Rights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                All content on our website, including but not limited to text, graphics, logos, images, 
                and software, is the property of Servo Scientific Suppliers or our licensors and is 
                protected by copyright, trademark, and other intellectual property laws.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Your Rights</h4>
                  <ul className="text-sm space-y-1">
                    <li>• View and download content for personal use</li>
                    <li>• Print pages for legitimate business purposes</li>
                    <li>• Share links to our content</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Restrictions</h4>
                  <ul className="text-sm space-y-1">
                    <li>• No reproduction without permission</li>
                    <li>• No commercial use of content</li>
                    <li>• No modification or derivative works</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Termination */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Termination</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We reserve the right to terminate or suspend your access to our services at any time, 
              with or without cause, and with or without notice.
            </p>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-foreground text-sm">Grounds for Termination:</h4>
                <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                  <li>• Violation of these Terms</li>
                  <li>• Fraudulent or illegal activity</li>
                  <li>• Non-payment of fees</li>
                  <li>• Abuse of services or systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground text-sm">Effect of Termination:</h4>
                <p className="text-sm text-muted-foreground mt-2">
                  Upon termination, your right to use our services ceases immediately. 
                  Provisions regarding intellectual property, disclaimers, and limitations of liability survive termination.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Governing Law and Dispute Resolution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-muted-foreground">
              <p>
                These Terms are governed by and construed in accordance with the laws of India, 
                without regard to conflict of law principles.
              </p>
              <div>
                <h4 className="font-semibold text-foreground mb-2">Dispute Resolution Process:</h4>
                <ol className="list-decimal list-inside text-sm space-y-2">
                  <li>Direct negotiation between parties</li>
                  <li>Mediation through agreed neutral third party</li>
                  <li>Binding arbitration in Chennai, Tamil Nadu</li>
                  <li>Court proceedings (if arbitration unavailable)</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2 text-sm">
              <p><strong>Legal Department:</strong> legal@servoscientific.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> 123 Industrial Avenue, Salem, Tamil Nadu 636001, India</p>
              <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TermsOfService;