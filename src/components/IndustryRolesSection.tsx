
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Briefcase, Users, Globe, Building, Handshake } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  {
    icon: <Brain size={28} />,
    name: "Tech",
    roles: "Engineers, PMs, AI/ML"
  },
  {
    icon: <Code size={28} />,
    name: "Legal",
    roles: "M&A, Tax, Litigation"
  },
  {
    icon: <Briefcase size={28} />,
    name: "Finance",
    roles: "FP&A, Controllers"
  },
  {
    icon: <Building size={28} />,
    name: "Healthcare",
    roles: "Clinical, Research, Admin"
  },
  {
    icon: <Users size={28} />,
    name: "Manufacturing",
    roles: "Operations, Supply Chain"
  },
  {
    icon: <Globe size={28} />,
    name: "GTM",
    roles: "Sales, Marketing, Customer Success"
  },
  {
    icon: <Handshake size={28} />,
    name: "Leadership",
    roles: "C-Suite, Directors, VPs"
  },
  {
    icon: <Users size={28} />,
    name: "BizOps",
    roles: "Strategy, Operations, Analytics"
  }
];

const IndustryRolesSection = () => {
  const { addToRefs } = useScrollAnimation({ staggerDelay: 100 });

  return (
    <section className="py-20 bg-synapse-lighter">
      <div className="container-wide">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Hire</h2>
          <p className="text-lg text-synapse-gray max-w-3xl mx-auto">
            Our AI-powered platform matches exceptional talent across industries and specialties
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              ref={addToRefs}
              className="border hover:border-synapse-primary transition-colors duration-300 scroll-animate"
            >
              <CardContent className="p-6">
                <div className="mb-4 text-synapse-primary">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                <p className="text-synapse-gray">{industry.roles}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryRolesSection;
