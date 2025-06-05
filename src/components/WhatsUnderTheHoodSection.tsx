
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhatsUnderTheHoodSection = () => {
  const { addToRefs } = useScrollAnimation();

  const features = [
    {
      title: "Global Recruiter Network",
      description: "Access 1,000+ specialized recruiters across 50+ countries, all vetted and performance-tracked"
    },
    {
      title: "AI-Powered Workflow", 
      description: "Automated candidate sourcing, screening, and interview scheduling to reduce time-to-hire"
    },
    {
      title: "Precision Matching",
      description: "Reinforcement-trained LLMs ensure best-fit talent. Our proprietary algorithm matches candidates to roles with 94% accuracy"
    },
    {
      title: "Fastest Time-to-Hire",
      description: "Our AI + recruiter system fills roles in days—not months—accelerating growth and saving weeks of manual effort."
    }
  ];

  return (
    <section className="section-padding bg-synapse-lighter/30">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 
            ref={addToRefs}
            className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-synapse-dark mb-6"
          >
            What's Under the Hood
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            Our AI-powered platform combines technology and human expertise for faster, more accurate hiring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              ref={addToRefs}
              className="scroll-animate bg-white p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-synapse-dark mb-4">
                {feature.title}
              </h3>
              <p className="text-synapse-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsUnderTheHoodSection;
