
import React from "react";
import { Button } from "@/components/ui/button";

const RecruiterFinalCTASection = () => {
  return (
    <section className="py-20 bg-synapse-primary text-white">
      <div className="container-wide text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Recruit Smarter, Not Harder?
        </h2>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
          Join the SRN network today and transform your recruiting career with high-quality opportunities, transparent payouts, and unmatched support.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button 
            className="relative overflow-hidden bg-white text-synapse-primary hover:bg-opacity-90 font-semibold py-6 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-transparent text-lg"
            onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
          >
            {/* Infinite flowing border animation */}
            <div className="absolute inset-0 rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-synapse-primary to-transparent opacity-80 animate-infinite-flow rounded-xl"></div>
            </div>
            
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-synapse-primary/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
            
            <span className="relative z-10 flex items-center gap-2">
              Join Now
              <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            </span>
          </Button>
          <Button 
            variant="outline"
            className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-synapse-primary py-3 px-8 rounded-lg transition-all duration-200 text-lg"
            onClick={() => window.location.href = "mailto:recruiters@synapseint.com"}
          >
            Have Questions?
          </Button>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm opacity-75">
          <span>✓ High-paying roles</span>
          <span>✓ AI-powered tools</span>
          <span>✓ Global network</span>
        </div>
      </div>
    </section>
  );
};

export default RecruiterFinalCTASection;
