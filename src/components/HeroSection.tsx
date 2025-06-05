
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-synapse-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-synapse-secondary/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-synapse-tertiary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(71,59,189,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container-wide relative z-10 text-center pt-20">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-synapse-primary/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-synapse-primary/20">
            <CheckCircle className="h-4 w-4 text-synapse-primary" />
            <span className="text-synapse-primary text-sm font-medium">AI-Powered Recruitment Platform</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-synapse-dark mb-6 leading-tight">
            Hire the Best Talent
            <br />
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent">
              in 72 Hours
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-synapse-gray mb-10 leading-relaxed max-w-3xl mx-auto">
            Our AI-powered platform connects you with pre-vetted candidates from our global talent network. From software engineers to executives — we deliver quality hires fast.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              className="bg-synapse-primary text-white hover:bg-synapse-primary/90 text-lg py-6 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              onClick={() => window.location.href = "/contact"}
            >
              <span className="flex items-center gap-2">
                Start Hiring Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="outline"
              className="border-2 border-synapse-primary text-synapse-primary bg-transparent hover:bg-synapse-primary hover:text-white text-lg py-6 px-8 transition-all duration-300"
              onClick={() => window.location.href = "/contact"}
            >
              Book a Demo
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-synapse-gray text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>72h delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>AI-powered matching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span>Global talent pool</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
