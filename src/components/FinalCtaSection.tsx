
import React from "react";
import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section id="final-cta" className="py-20 bg-synapse-primary text-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          The Future of Hiring Isn't Coming — We're Building It
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Join us in revolutionizing recruitment. Whether you're hiring talent or building pipelines — Synapse is your platform.
        </p>
        <div className="flex justify-center">
          <Button 
            className="bg-white text-synapse-primary hover:bg-opacity-90 font-medium py-3 px-8 rounded-lg transition-all duration-200"
            onClick={() => window.location.href = "mailto:info@synapseint.com"}
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
