
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Brain, Users, Clock } from "lucide-react";

const features = [
  {
    icon: <Globe size={32} />,
    title: "Global Recruiter Network",
    description: "Access 1,000+ specialized recruiters across 50+ countries, all vetted and performance-tracked"
  },
  {
    icon: <Brain size={32} />,
    title: "AI-Powered Workflow",
    description: "Automated candidate sourcing, screening, and interview scheduling to reduce time-to-hire"
  },
  {
    icon: <Brain size={32} />,
    title: "Precision Matching",
    description: "Reinforcement-trained LLMs ensure best-fit talent. Our proprietary algorithm matches candidates to roles with 94% accuracy"
  },
  {
    icon: <Clock size={32} />,
    title: "Fastest Time-to-Hire",
    description: "Our AI + recruiter system fills roles in days—not months—accelerating growth and saving weeks of manual effort."
  }
];

const PlatformFeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Under the Hood</h2>
          <p className="text-lg text-synapse-gray max-w-3xl mx-auto">
            Our AI-powered platform combines technology and human expertise for faster, more accurate hiring
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:border-synapse-primary transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 text-synapse-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-synapse-primary mb-3">{feature.title}</h3>
                <p className="text-synapse-gray">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformFeaturesSection;
