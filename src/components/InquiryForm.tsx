import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { X, ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const productOptions = [
  "Heating Instruments",
  "Industrial Furnace", 
  "Environmental Chamber",
  "Heater",
  "Microbiology Instruments",
  "Thermocouple",
  "Other"
];

const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", 
  "Japan", "India", "China", "Australia", "Brazil", "Other"
];

const InquiryForm: React.FC<InquiryFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    product: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    country: '',
    phone: '',
    email: '',
    comments: ''
  });
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.product && formData.firstName && formData.lastName && formData.email;
      case 2:
        return formData.address && formData.country;
      case 3:
        return formData.comments;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    } else {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields before proceeding.",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      // Simulate form submission
      toast({
        title: "Inquiry submitted successfully!",
        description: "We will contact you within 24 hours.",
      });
      
      // Reset form and close
      setFormData({
        product: '', firstName: '', lastName: '', company: '',
        address: '', country: '', phone: '', email: '', comments: ''
      });
      setCurrentStep(1);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-professional max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-technical-gray-light">
          <div>
            <h2 className="text-2xl font-bold text-professional-blue">Submit Inquiry</h2>
            <p className="text-technical-gray">Complete the form in 3 simple steps</p>
          </div>
          <button 
            onClick={onClose}
            className="text-technical-gray hover:text-professional-blue"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 bg-surface-blue">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                  ${currentStep >= step 
                    ? 'bg-professional-blue text-white' 
                    : 'bg-technical-gray-light text-technical-gray'
                  }`}>
                  {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                </div>
                <div className="ml-3 text-sm">
                  {step === 1 && "Enter Information"}
                  {step === 2 && "Confirm Details"}
                  {step === 3 && "Complete"}
                </div>
                {step < 3 && (
                  <div className={`w-12 h-0.5 ml-4 
                    ${currentStep > step ? 'bg-professional-blue' : 'bg-technical-gray-light'}`} 
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="product">Select Product *</Label>
                <Select value={formData.product} onValueChange={(value) => handleInputChange('product', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    {productOptions.map((product) => (
                      <SelectItem key={product} value={product}>{product}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Company Name"
                />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@company.com"
                />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="address">Address *</Label>
                <Textarea
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  placeholder="Full address including city, state, and postal code"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="country">Country *</Label>
                <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="comments">Comments *</Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  placeholder="Please describe your requirements, specifications, or any questions you have about our products..."
                  rows={6}
                />
              </div>

              <div className="bg-surface-blue p-4 rounded-lg">
                <h4 className="font-semibold text-professional-blue mb-2">Review Your Information</h4>
                <div className="text-sm text-technical-gray space-y-1">
                  <p><strong>Product:</strong> {formData.product}</p>
                  <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Company:</strong> {formData.company || 'Not specified'}</p>
                  <p><strong>Country:</strong> {formData.country}</p>
                </div>
              </div>

              <div className="text-sm text-technical-gray">
                <p>Items marked with an asterisk (*) are required. Inquiries must be in English.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex justify-between items-center p-6 border-t border-technical-gray-light">
          {currentStep > 1 ? (
            <Button 
              variant="outline" 
              onClick={() => setCurrentStep(prev => prev - 1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          ) : (
            <div></div>
          )}

          {currentStep < 3 ? (
            <Button 
              variant="professional" 
              onClick={handleNext}
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button 
              variant="inquiry" 
              onClick={handleSubmit}
            >
              Submit Inquiry
              <CheckCircle className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;