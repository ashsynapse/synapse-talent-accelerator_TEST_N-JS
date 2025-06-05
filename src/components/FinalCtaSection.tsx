
import React from "react";
import { Button } from "@/components/ui/button";

const FinalCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-synapse-primary to-synapse-secondary">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Your next best hire is just days away.
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Book a call and see how our process can transform your hiring pipeline.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-synapse-primary hover:bg-gray-100 text-lg py-4 px-8 shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={() => window.location.href = "/contact"}
            >
              Book a Demo
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-synapse-primary text-lg py-4 px-8 transition-all duration-200"
              onClick={() => window.location.href = "/contact"}
            >
              Let's Talk
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
