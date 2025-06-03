
import React from "react";
import { Building, Heart, TrendingUp, Truck, Users, Briefcase } from "lucide-react";

const IndustriesRecruiterSection = () => {
  const industries = [
    {
      icon: <Building className="h-10 w-10 text-synapse-primary" />,
      name: "Technology",
      description: "Software engineers, data scientists, product managers, and IT professionals."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-synapse-primary" />,
      name: "Sales",
      description: "Account executives, sales managers, business development, and customer success."
    },
    {
      icon: <Heart className="h-10 w-10 text-synapse-primary" />,
      name: "Healthcare",
      description: "Nurses, physicians, healthcare administrators, and medical specialists."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-synapse-primary" />,
      name: "Finance",
      description: "Financial analysts, accountants, investment professionals, and fintech roles."
    },
    {
      icon: <Truck className="h-10 w-10 text-synapse-primary" />,
      name: "Logistics",
      description: "Supply chain managers, operations specialists, and transportation professionals."
    },
    {
      icon: <Users className="h-10 w-10 text-synapse-primary" />,
      name: "Human Resources",
      description: "HR managers, talent acquisition specialists, and organizational development."
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 text-center">
              <div className="bg-synapse-lighter p-4 rounded-lg inline-block mb-4">
                {industry.icon}
              </div>
              <h3 className="text-xl font-bold text-synapse-dark mb-3">
                {industry.name}
              </h3>
              <p className="text-synapse-gray">{industry.description}</p>
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
