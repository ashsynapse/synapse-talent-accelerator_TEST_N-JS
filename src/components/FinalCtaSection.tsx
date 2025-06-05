
import React from "react";
import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-synapse-primary to-synapse-secondary">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            The Future of Hiring Isn't Coming — We're Building It
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join us in revolutionizing recruitment. Whether you're hiring talent or building pipelines — Synapse is your platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-synapse-primary hover:bg-gray-100 text-lg py-4 px-8 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.location.href = "/contact"}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
