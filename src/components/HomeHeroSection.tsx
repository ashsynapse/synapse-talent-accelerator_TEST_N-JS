
import React from "react";
import { Button } from "@/components/ui/button";

const HomeHeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
      <div className="container-wide">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
            AI Armies. Infinite Hires. Zero Humans.
            <span className="block text-synapse-primary">Hiring on Autopilot.</span>
          </h1>
          <p className="text-xl md:text-2xl text-synapse-gray mb-10 leading-relaxed max-w-4xl mx-auto">
            We're building the world's first fully autonomous AI recruiting engine—capable of filling tens of thousands of jobs without a single human recruiter.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              className="btn-primary text-lg py-4 px-8 shadow-medium hover:shadow-lg transition-shadow"
              onClick={() => window.location.href = "/contact"}
            >
              Deploy AI Hiring
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-synapse-primary text-synapse-primary bg-white hover:bg-synapse-light text-lg py-4 px-8 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium"
              onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
            >
              View Platform
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-synapse-gray">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-synapse-primary rounded-full"></div>
              <span>100% AI-powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-synapse-primary rounded-full"></div>
              <span>Zero human intervention</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-synapse-primary rounded-full"></div>
              <span>Infinite scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
