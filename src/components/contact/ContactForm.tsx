
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phoneNumber: "",
    hiringNeed: "",
    industry: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.fullName || !formData.email) {
      toast({
        title: "Required fields missing",
        description: "Please fill in your name and email address.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Request submitted successfully!",
      description: "Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phoneNumber: "",
      hiringNeed: "",
      industry: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-soft">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-synapse-dark mb-4">
          Tell Us About Your Hiring Needs
        </h2>
        <p className="text-synapse-gray">
          We'll match you with specialized recruiters and start sourcing candidates within 48 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="John Smith"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="companyName">Company Name</Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => handleInputChange("companyName", e.target.value)}
              placeholder="Acme Corp"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="john@company.com"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
              placeholder="+1 (555) 123-4567"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="industry">Industry</Label>
          <Select value={formData.industry} onValueChange={(value) => handleInputChange("industry", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select your industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="finance">Finance & Banking</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
              <SelectItem value="manufacturing">Manufacturing</SelectItem>
              <SelectItem value="retail">Retail & E-commerce</SelectItem>
              <SelectItem value="consulting">Consulting</SelectItem>
              <SelectItem value="real-estate">Real Estate</SelectItem>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hiringNeed">Tell Us About Your Hiring Need</Label>
          <Textarea
            id="hiringNeed"
            value={formData.hiringNeed}
            onChange={(e) => handleInputChange("hiringNeed", e.target.value)}
            placeholder="We're looking for 3 senior software engineers with React/Node.js experience for our product team..."
            rows={4}
          />
        </div>

        <Button 
          type="submit" 
          className="w-full btn-primary text-lg py-4"
        >
          Submit Hiring Request
        </Button>
        
        <p className="text-sm text-synapse-gray text-center">
          By submitting this form, you agree to our privacy policy. We'll never share your information.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
