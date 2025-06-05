
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const WhoWeHireSection = () => {
  const { addToRefs } = useScrollAnimation();

  const categories = [
    {
      title: "Tech",
      description: "Engineers, PMs, AI/ML"
    },
    {
      title: "Legal", 
      description: "M&A, Tax, Litigation"
    },
    {
      title: "Finance",
      description: "FP&A, Controllers"
    },
    {
      title: "Healthcare",
      description: "Clinical, Research, Admin"
    },
    {
      title: "Manufacturing",
      description: "Operations, Supply Chain"
    },
    {
      title: "GTM",
      description: "Sales, Marketing, Customer Success"
    },
    {
      title: "Leadership",
      description: "C-Suite, Directors, VPs"
    },
    {
      title: "BizOps",
      description: "Strategy, Operations, Analytics"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 
            ref={addToRefs}
            className="scroll-animate text-3xl md:text-4xl lg:text-5xl font-bold text-synapse-dark mb-6"
          >
            Who We Hire
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            Our AI-powered platform matches exceptional talent across industries and specialties
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              ref={addToRefs}
              className="scroll-animate text-center p-6 rounded-xl border border-gray-100 hover:border-synapse-primary/20 hover:shadow-soft transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-synapse-dark mb-3">
                {category.title}
              </h3>
              <p className="text-sm text-synapse-gray leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHireSection;
