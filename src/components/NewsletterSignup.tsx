
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail } from "lucide-react";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [gdprConsent, setGdprConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", { email, gdprConsent });
    // Reset form
    setEmail("");
    setGdprConsent(false);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Stay Ahead of the Hiring Curve
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Subscribe to receive AI hiring insights, trends, and expert tips — directly in your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button 
                type="submit" 
                className="bg-synapse-primary hover:bg-synapse-secondary text-white px-8 h-12 text-base font-medium whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
            
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <input
                type="checkbox"
                id="gdpr-consent"
                checked={gdprConsent}
                onChange={(e) => setGdprConsent(e.target.checked)}
                className="mt-0.5 h-4 w-4 text-synapse-primary border-gray-300 rounded focus:ring-synapse-primary"
              />
              <Label htmlFor="gdpr-consent" className="text-left leading-relaxed cursor-pointer">
                I agree to receive email updates from Synapse. You can unsubscribe at any time.
              </Label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
