
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-white to-synapse-lighter">
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-synapse-light text-synapse-primary rounded-full">
            <span className="font-medium">AI-powered recruitment</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-synapse-dark">
            Automating the Entire Hiring Process <span className="text-synapse-primary">with AI</span>
          </h1>
          <p className="text-lg md:text-xl text-synapse-gray">
            From job intake to offer, Synapse is your global AI-powered recruitment platform — blending automation 
            and human expertise to deliver top talent faster than anyone in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="btn-primary flex items-center gap-2 text-base"
              onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hire Talent <ArrowRight size={18} />
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary flex items-center gap-2 text-base"
            >
              Join as Recruiter
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-medium">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="AI-powered recruitment platform" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-lg shadow-soft max-w-[200px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-8 w-8 bg-synapse-light text-synapse-primary rounded-full flex items-center justify-center font-medium text-sm">
                AI
              </div>
              <h3 className="font-bold text-synapse-dark">Fast Hiring</h3>
            </div>
            <p className="text-sm text-synapse-gray">
              AI-powered matching for faster placements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
