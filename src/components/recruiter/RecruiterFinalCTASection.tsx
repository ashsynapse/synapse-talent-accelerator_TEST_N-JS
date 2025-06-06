
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const RecruiterFinalCTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Ready to Transform Your Recruiting Career?</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Recruit Smarter, Not Harder?
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90 leading-relaxed">
            Join the SRN network today and transform your recruiting career with high-quality opportunities, transparent payouts, and unmatched support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              className="bg-white text-synapse-primary hover:bg-gray-100 text-lg py-6 px-10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group relative overflow-hidden rounded-xl"
              onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
            >
              <span className="relative z-10 flex items-center gap-2">
                Join Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-synapse-primary/10 to-synapse-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-synapse-primary py-3 px-8 rounded-lg transition-all duration-200 text-lg"
              onClick={() => window.location.href = "/contact"}
            >
              Have Questions?
            </Button>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>High-paying roles</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>AI-powered tools</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <span>Global network</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterFinalCTASection;
