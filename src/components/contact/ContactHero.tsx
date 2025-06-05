
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MessageCircle, Clock, Globe } from "lucide-react";

const ContactHero = () => {
  const { addToRefs } = useScrollAnimation();

  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-synapse-lighter/50 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary uppercase tracking-wide">Get in Touch</span>
          </div>
          
          <h1 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight"
          >
            Contact Us
          </h1>
          
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray mb-12 leading-relaxed"
          >
            Ready to transform your hiring process with AI? Let's discuss how our autonomous AI agents can scale your talent acquisition.
          </p>

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
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
