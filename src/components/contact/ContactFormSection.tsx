
import React from "react";
import ContactForm from "./ContactForm";
import { MessageCircle, Clock, Globe } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactFormSection = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        {/* Mobile and Tablet Layout */}
        <div className="lg:hidden">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-6 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-3 rounded-lg inline-block mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">Quick Response</h3>
              <p className="text-synapse-gray">Get a response within 24 hours from our AI hiring specialists</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-6 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-secondary to-synapse-tertiary p-3 rounded-lg inline-block mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">24/7 Availability</h3>
              <p className="text-synapse-gray">Our AI systems work around the clock, just like your hiring needs</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-6 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-tertiary to-synapse-primary p-3 rounded-lg inline-block mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">Global Reach</h3>
              <p className="text-synapse-gray">Access talent worldwide with our AI-powered sourcing network</p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <ContactForm />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left Column - Feature Cards */}
          <div className="space-y-6">
            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-6 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-3 rounded-lg inline-block mb-4">
                <MessageCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">Quick Response</h3>
              <p className="text-synapse-gray">Get a response within 24 hours from our AI hiring specialists</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-6 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-secondary to-synapse-tertiary p-3 rounded-lg inline-block mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">24/7 Availability</h3>
              <p className="text-synapse-gray">Our AI systems work around the clock, just like your hiring needs</p>
            </div>

            <div 
              ref={addToRefs}
              className="scroll-animate bg-white p-6 rounded-xl shadow-soft border border-gray-100"
            >
              <div className="bg-gradient-to-br from-synapse-tertiary to-synapse-primary p-3 rounded-lg inline-block mb-4">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-synapse-dark mb-2">Global Reach</h3>
              <p className="text-synapse-gray">Access talent worldwide with our AI-powered sourcing network</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:sticky lg:top-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
