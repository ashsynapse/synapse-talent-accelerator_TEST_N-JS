
import React from "react";
import { Code, Heart, TrendingUp, Calculator, Factory, Users, Crown, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const IndustriesRecruiterSection = () => {
  const industries = [
    {
      icon: <Code className="h-6 w-6" />,
      name: "Technology",
      description: "Software engineers, data scientists, product managers, and IT professionals.",
      gradient: "from-synapse-primary to-synapse-secondary"
    },
    {
      icon: <Calculator className="h-6 w-6" />,
      name: "Finance",
      description: "Financial analysts, accountants, investment professionals, and fintech roles.",
      gradient: "from-synapse-secondary to-synapse-tertiary"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      name: "Healthcare",
      description: "Nurses, physicians, healthcare administrators, and medical specialists.",
      gradient: "from-synapse-tertiary to-synapse-primary"
    },
    {
      icon: <Crown className="h-6 w-6" />,
      name: "Legal",
      description: "Corporate lawyers, compliance specialists, and regulatory experts.",
      gradient: "from-synapse-primary to-synapse-light"
    },
    {
      icon: <Factory className="h-6 w-6" />,
      name: "Manufacturing",
      description: "Operations managers, supply chain specialists, and engineering professionals.",
      gradient: "from-synapse-secondary to-synapse-primary"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      name: "Sales & Marketing",
      description: "Account executives, sales managers, business development, and customer success.",
      gradient: "from-synapse-tertiary to-synapse-secondary"
    },
    {
      icon: <Crown className="h-6 w-6" />,
      name: "Leadership",
      description: "C-Suite executives, VPs, and senior management professionals.",
      gradient: "from-synapse-primary to-synapse-tertiary"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      name: "Operations",
      description: "Strategy specialists, analytics professionals, and business operations experts.",
      gradient: "from-synapse-light to-synapse-primary"
    }
  ];

  return (
    <section className="section-padding bg-synapse-lighter/30">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Industries You Can Recruit For
          </h2>
          <p className="text-lg text-synapse-gray">
            Access opportunities across diverse industries and build your expertise in high-demand sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="group relative h-full">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 hover:border-synapse-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden h-full flex flex-col">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${industry.gradient} rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3 mx-auto`}>
                  <div className="text-white">
                    {industry.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-synapse-dark mb-4 group-hover:text-synapse-primary transition-colors duration-300">
                  {industry.name}
                </h3>
                <p className="text-sm text-synapse-gray leading-relaxed group-hover:text-synapse-dark transition-colors duration-300 flex-grow">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-synapse-gray mb-6">
            Don't see your specialty? We're constantly expanding into new industries based on recruiter expertise.
          </p>
          <Button 
            variant="outline"
            className="border-synapse-primary text-synapse-primary hover:bg-synapse-light"
            onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
          >
            Discuss Your Specialty
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesRecruiterSection;
