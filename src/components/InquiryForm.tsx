import React, { useState, useEffect } from 'react';
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
import { z } from 'zod';
import { productCategories } from '@/data/index';

interface InquiryFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Form validation schema
const inquirySchema = z.object({
  productCategory: z.string().trim().nonempty({ message: "Please select a product category" }),
  specificMachine: z.string().trim().nonempty({ message: "Please select a specific machine" }),
  firstName: z.string().trim().nonempty({ message: "First name is required" }).max(50, { message: "First name must be less than 50 characters" }),
  lastName: z.string().trim().nonempty({ message: "Last name is required" }).max(50, { message: "Last name must be less than 50 characters" }),
  company: z.string().trim().max(100, { message: "Company name must be less than 100 characters" }),
  email: z.string().trim().email({ message: "Please enter a valid email address" }).max(255, { message: "Email must be less than 255 characters" }),
  phone: z.string().trim().max(20, { message: "Phone number must be less than 20 characters" }),
  address: z.string().trim().nonempty({ message: "Address is required" }).max(500, { message: "Address must be less than 500 characters" }),
  country: z.string().trim().nonempty({ message: "Please select a country" }),
  comments: z.string().trim().nonempty({ message: "Please provide details about your requirements" }).max(2000, { message: "Comments must be less than 2000 characters" })
});

const countries = [
  "United States", "Canada", "United Kingdom", "Germany", "France", 
  "Japan", "India", "China", "Australia", "Brazil", "Mexico",
  "South Korea", "Netherlands", "Sweden", "Switzerland", "Singapore",
  "United Arab Emirates", "Saudi Arabia", "South Africa", "Other"
];

const InquiryForm: React.FC<InquiryFormProps> = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    productCategory: '',
    specificMachine: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    country: '',
    phone: '',
    email: '',
    comments: ''
  });
  const [availableMachines, setAvailableMachines] = useState<string[]>([]);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  // Update available machines when product category changes
  useEffect(() => {
    if (formData.productCategory && productCategories[formData.productCategory as keyof typeof productCategories]) {
      setAvailableMachines(productCategories[formData.productCategory as keyof typeof productCategories]);
      // Reset specific machine selection when category changes
      if (formData.specificMachine) {
        setFormData(prev => ({ ...prev, specificMachine: '' }));
      }
    } else {
      setAvailableMachines([]);
    }
  }, [formData.productCategory]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const { [field]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const validateStep = (step: number) => {
    const errors: Record<string, string> = {};
    
    try {
      switch (step) {
        case 1:
          inquirySchema.pick({ 
            productCategory: true, 
            specificMachine: true,
            firstName: true, 
            lastName: true, 
            email: true 
          }).parse({
            productCategory: formData.productCategory,
            specificMachine: formData.specificMachine,
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email
          });
          break;
        case 2:
          inquirySchema.pick({ 
            address: true, 
            country: true 
          }).parse({
            address: formData.address,
            country: formData.country
          });
          break;
        case 3:
          inquirySchema.pick({ 
            comments: true 
          }).parse({
            comments: formData.comments
          });
          break;
      }
      setValidationErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach(err => {
          if (err.path[0]) {
            errors[err.path[0] as string] = err.message;
          }
        });
        setValidationErrors(errors);
      }
      return false;
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    } else {
      toast({
        title: "Please complete all required fields",
        description: "Check the highlighted fields and correct any errors.",
        variant: "destructive"
      });
    }
  };

  const handleSubmit = () => {
    if (validateStep(3)) {
      // Create WhatsApp message with form data (properly encoded)
      const message = `New Product Inquiry:
      
Product Category: ${encodeURIComponent(formData.productCategory)}
Specific Machine: ${encodeURIComponent(formData.specificMachine)}
Name: ${encodeURIComponent(formData.firstName + ' ' + formData.lastName)}
Company: ${encodeURIComponent(formData.company || 'Not specified')}
Email: ${encodeURIComponent(formData.email)}
Phone: ${encodeURIComponent(formData.phone || 'Not provided')}
Country: ${encodeURIComponent(formData.country)}
Address: ${encodeURIComponent(formData.address)}

Requirements: ${encodeURIComponent(formData.comments)}`;

      toast({
        title: "Inquiry submitted successfully!",
        description: "We will contact you within 24 hours.",
      });
      
      // Reset form and close
      setFormData({
        productCategory: '', specificMachine: '', firstName: '', lastName: '', 
        company: '', address: '', country: '', phone: '', email: '', comments: ''
      });
      setCurrentStep(1);
      setValidationErrors({});
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
                <Label htmlFor="productCategory">Product Category *</Label>
                <Select 
                  value={formData.productCategory} 
                  onValueChange={(value) => handleInputChange('productCategory', value)}
                >
                  <SelectTrigger className={validationErrors.productCategory ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select Product Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(productCategories).map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {validationErrors.productCategory && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.productCategory}</p>
                )}
              </div>

              <div>
                <Label htmlFor="specificMachine">Specific Machine *</Label>
                <Select 
                  value={formData.specificMachine} 
                  onValueChange={(value) => handleInputChange('specificMachine', value)}
                  disabled={!formData.productCategory}
                >
                  <SelectTrigger className={validationErrors.specificMachine ? 'border-red-500' : ''}>
                    <SelectValue placeholder={
                      formData.productCategory 
                        ? "Select Specific Machine" 
                        : "Please select a product category first"
                    } />
                  </SelectTrigger>
                  <SelectContent>
                    {availableMachines.map((machine) => (
                      <SelectItem key={machine} value={machine}>{machine}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {validationErrors.specificMachine && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.specificMachine}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    placeholder="First Name"
                    className={validationErrors.firstName ? 'border-red-500' : ''}
                    maxLength={50}
                  />
                  {validationErrors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.firstName}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    placeholder="Last Name"
                    className={validationErrors.lastName ? 'border-red-500' : ''}
                    maxLength={50}
                  />
                  {validationErrors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{validationErrors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Company Name"
                  maxLength={100}
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
                  className={validationErrors.email ? 'border-red-500' : ''}
                  maxLength={255}
                />
                {validationErrors.email && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.email}</p>
                )}
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
                  className={validationErrors.address ? 'border-red-500' : ''}
                  maxLength={500}
                />
                {validationErrors.address && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.address}</p>
                )}
              </div>

              <div>
                <Label htmlFor="country">Country *</Label>
                <Select 
                  value={formData.country} 
                  onValueChange={(value) => handleInputChange('country', value)}
                >
                  <SelectTrigger className={validationErrors.country ? 'border-red-500' : ''}>
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {validationErrors.country && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.country}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+1 (555) 123-4567"
                  maxLength={20}
                />
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <Label htmlFor="comments">Requirements & Comments *</Label>
                <Textarea
                  id="comments"
                  value={formData.comments}
                  onChange={(e) => handleInputChange('comments', e.target.value)}
                  placeholder="Please describe your requirements, specifications, quantity needed, timeline, or any questions you have about our products..."
                  rows={6}
                  className={validationErrors.comments ? 'border-red-500' : ''}
                  maxLength={2000}
                />
                {validationErrors.comments && (
                  <p className="text-red-500 text-sm mt-1">{validationErrors.comments}</p>
                )}
                <p className="text-sm text-gray-500">
                  {formData.comments.length}/2000 characters
                </p>
              </div>

              <div className="bg-surface-blue p-4 rounded-lg">
                <h4 className="font-semibold text-professional-blue mb-2">Review Your Information</h4>
                <div className="text-sm text-technical-gray space-y-1">
                  <p><strong>Product Category:</strong> {formData.productCategory}</p>
                  <p><strong>Specific Machine:</strong> {formData.specificMachine}</p>
                  <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Company:</strong> {formData.company || 'Not specified'}</p>
                  <p><strong>Country:</strong> {formData.country}</p>
                  <p><strong>Phone:</strong> {formData.phone || 'Not provided'}</p>
                </div>
              </div>

              <div className="text-sm text-technical-gray">
                <p>Items marked with an asterisk (*) are required. All information will be kept confidential and used only for processing your inquiry.</p>
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