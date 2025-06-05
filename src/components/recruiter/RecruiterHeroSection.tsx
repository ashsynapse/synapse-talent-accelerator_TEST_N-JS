
import React from "react";
import { Button } from "@/components/ui/button";

const RecruiterHeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
      <div className="container-wide">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
            Join a High-Performing Global Recruiter Network
          </h1>
          <p className="text-xl md:text-2xl text-synapse-gray mb-10 leading-relaxed max-w-4xl mx-auto">
            Earn top commissions. Access live jobs. Work on your schedule.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              className="btn-primary text-lg py-4 px-8 shadow-medium hover:shadow-lg transition-shadow"
              onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
            >
              Join Now
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-synapse-primary text-synapse-primary bg-white hover:bg-synapse-light text-lg py-4 px-8 rounded-lg transition-all duration-200 shadow-soft hover:shadow-medium"
              onClick={() => window.open("https://app.synapserecruiternetwork.com/login", "_blank")}
            >
              Login
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-synapse-gray">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-synapse-primary rounded-full"></div>
              <span>100% Remote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-synapse-primary rounded-full"></div>
              <span>Flexible Schedule</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-synapse-primary rounded-full"></div>
              <span>High Commissions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterHeroSection;
