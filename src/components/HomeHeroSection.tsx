
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
            We're building the world's first fully autonomous AI talent acquisition engine—capable of filling tens of thousands of jobs without a single human touch.
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <Button 
              className="relative overflow-hidden bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold text-lg py-6 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-transparent"
              onClick={() => window.location.href = "/contact"}
            >
              {/* Infinite flowing black border animation */}
              <div className="absolute inset-0 rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-80 animate-infinite-flow rounded-xl"></div>
              </div>
              
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              {/* Subtle glow animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-synapse-primary/50 to-synapse-secondary/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                Deploy AI Hiring
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </span>
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
