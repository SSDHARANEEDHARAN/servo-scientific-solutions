import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Award, CheckCircle, Eye, FileText, Users } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

interface QualityAssuranceProps {
  onBackToHome: () => void;
}

const QualityAssurance: React.FC<QualityAssuranceProps> = ({ onBackToHome }) => {
  const qualityStandards = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "ISO 9001:2015",
      description: "Certified Quality Management System ensuring consistent product quality and customer satisfaction.",
      details: ["Quality policy implementation", "Continuous improvement processes", "Customer-focused approach", "Regular audits and reviews"]
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "CE Marking",
      description: "European Conformity marking indicating compliance with health, safety, and environmental protection standards.",
      details: ["EU directive compliance", "Safety standard adherence", "Environmental protection", "Health requirement fulfillment"]
    },
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "NIST Traceability",
      description: "National Institute of Standards and Technology traceable calibrations for measurement accuracy.",
      details: ["Measurement traceability", "Calibration certificates", "Accuracy verification", "Standard compliance"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Design & Development",
      description: "Rigorous design process following international standards and customer requirements."
    },
    {
      step: "02",
      title: "Material Selection",
      description: "Premium quality materials sourced from certified suppliers with complete traceability."
    },
    {
      step: "03",
      title: "Manufacturing",
      description: "State-of-the-art manufacturing processes with real-time quality monitoring."
    },
    {
      step: "04",
      title: "Testing & Validation",
      description: "Comprehensive testing protocols including functional, performance, and safety tests."
    },
    {
      step: "05",
      title: "Quality Control",
      description: "Multi-stage quality control checks with detailed documentation at each stage."
    },
    {
      step: "06",
      title: "Final Inspection",
      description: "Final quality inspection before packaging and dispatch to customers."
    }
  ];

  const commitments = [
    "Zero defect manufacturing philosophy",
    "100% product testing before delivery",
    "Continuous improvement culture",
    "Customer feedback integration",
    "Supplier quality partnerships",
    "Environmental responsibility"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Quality Assurance | ISO 9001:2015 Certified | Servo Scientific"
        description="ISO 9001:2015 certified quality management. CE marking, NIST traceability, 99.8% quality pass rate. 50+ years of excellence in scientific equipment manufacturing."
        keywords="ISO 9001:2015, CE marking, NIST traceability, quality assurance, laboratory equipment quality, scientific instrument certification"
        canonical="https://servoscientific.com/quality"
      />
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quality Assurance</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Our unwavering commitment to quality ensures every product meets the highest standards of performance, reliability, and safety.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quality Standards */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quality Standards & Certifications</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest quality standards through internationally recognized certifications and rigorous processes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {qualityStandards.map((standard, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      {standard.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{standard.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{standard.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {standard.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Process */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Process</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Every product goes through our comprehensive 6-stage quality assurance process to ensure excellence at every step.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((process, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-elegant transition-all duration-300">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-hero flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{process.step}</span>
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg pr-16">{process.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quality Commitments */}
        <div className="bg-gradient-soft rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Quality Commitments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We stand behind our products with these unwavering quality commitments to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-soft">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium">{commitment}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-sm text-muted-foreground">Quality Pass Rate</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Years of Excellence</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">1000+</div>
            <div className="text-sm text-muted-foreground">Happy Customers</div>
          </Card>
          <Card className="text-center p-6">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Quality Support</div>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-hero text-white text-center p-8">
          <h3 className="text-2xl font-bold mb-4">Experience Our Quality Difference</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Let us demonstrate how our commitment to quality can benefit your operations with reliable, high-performance equipment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-professional-blue"
            >
              <FileText className="h-4 w-4 mr-2" />
              Download Quality Certificate
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-professional-blue"
            >
              <Eye className="h-4 w-4 mr-2" />
              Schedule Factory Visit
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default QualityAssurance;