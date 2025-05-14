
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-br from-white to-synapse-lighter">
      <div className="container-wide grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center px-4 py-2 bg-synapse-light text-synapse-primary rounded-full">
            <span className="font-medium">Tech-enabled recruitment</span>
          </div>
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-synapse-dark">
            Get Pre-Vetted Candidates{" "}
            <span className="text-synapse-primary">Within 72 Hours</span>
          </h1>
          <p className="text-lg md:text-xl text-synapse-gray">
            Our distributed recruiter network matches the perfect candidates to your
            unique roles. Fast, efficient, and proven for fast-growing startups and enterprise teams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              className="btn-primary flex items-center gap-2 text-base"
              onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Demo <Calendar size={18} />
            </Button>
            <Button 
              variant="outline" 
              className="btn-secondary flex items-center gap-2 text-base"
            >
              Learn How It Works <ArrowRight size={18} />
            </Button>
          </div>
          <div className="pt-6 flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="h-10 w-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center overflow-hidden"
                >
                  <span className="font-medium text-xs text-synapse-primary">
                    {["AB", "JM", "KL", "TR"][i-1]}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-synapse-gray">
              <span className="font-medium">Trusted by 200+</span> companies worldwide
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-medium">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Team discussing recruitment strategy" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-4 rounded-lg shadow-soft max-w-[200px]">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-8 w-8 bg-synapse-light text-synapse-primary rounded-full flex items-center justify-center font-medium text-sm">
                72h
              </div>
              <h3 className="font-bold text-synapse-dark">Fast Delivery</h3>
            </div>
            <p className="text-sm text-synapse-gray">
              Pre-vetted candidates delivered within 72 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
