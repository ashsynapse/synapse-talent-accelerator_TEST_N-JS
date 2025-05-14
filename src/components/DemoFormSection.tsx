
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const DemoFormSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Demo request submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section className="section-padding bg-synapse-lighter" id="demo-form">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              Ready to Transform Your Hiring Process?
            </h2>
            <p className="text-lg text-synapse-gray mb-6">
              Schedule a demo to see how Synapse can help you find the perfect
              candidates faster and more efficiently.
            </p>
            
            <div className="bg-white p-6 rounded-xl shadow-soft mb-8">
              <h3 className="font-bold text-synapse-dark mb-4">What to expect:</h3>
              <ul className="space-y-3">
                {[
                  "A personalized 30-minute demo of our platform",
                  "Discussion of your specific hiring challenges",
                  "Custom recruitment strategy recommendations",
                  "Transparent pricing information",
                  "No pressure or obligations"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="h-5 w-5 bg-synapse-primary text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-synapse-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-medium">
            <h3 className="text-2xl font-bold text-synapse-dark mb-6">
              Book Your Demo
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-synapse-dark mb-1">
                  Full Name*
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-synapse-dark mb-1">
                  Work Email*
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-synapse-dark mb-1">
                  Company Name*
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-synapse-dark mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-synapse-dark mb-1">
                  What are your current hiring needs?
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full"
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full">
                Book My Demo
              </Button>
              
              <p className="text-xs text-synapse-gray text-center">
                By submitting this form, you agree to our{" "}
                <a href="#" className="text-synapse-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a href="#" className="text-synapse-primary hover:underline">
                  Terms of Service
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFormSection;
