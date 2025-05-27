
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white to-synapse-light">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6">
            Automating the Entire Hiring Process with AI
          </h1>
          <p className="text-xl md:text-2xl text-synapse-gray mb-8 leading-relaxed">
            From job intake to offer, Synapse is your global AI-powered recruitment platform — blending automation and human expertise to deliver top talent faster than anyone in the market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="btn-primary text-lg py-4 px-8"
              onClick={() => document.getElementById("final-cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Hire Talent
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-synapse-primary text-synapse-primary bg-white hover:bg-synapse-light text-lg py-4 px-8 rounded-lg transition-all duration-200"
              onClick={() => window.open("https://synapserecruiternetwork.com", "_blank")}
            >
              Join as Recruiter
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
