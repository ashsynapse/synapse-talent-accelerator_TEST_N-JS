import React from "react";
import { Check, Clock, Globe, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhyJoinSRNSection = () => {
  const benefits = [
    {
      icon: <Clock className="h-8 w-8 text-synapse-primary" />,
      title: "Fast Placements with Hiring-Ready Clients",
      description: "Work with pre-qualified companies that are ready to hire, reducing time-to-placement by 60%."
    },
    {
      icon: <Check className="h-8 w-8 text-synapse-primary" />,
      title: "Vetted Opportunities Across Multiple Industries",
      description: "Access curated job openings in tech, healthcare, finance, and more - all verified and active."
    },
    {
      icon: <DollarSign className="h-8 w-8 text-synapse-primary" />,
      title: "Transparent and Automated Payouts",
      description: "Clear commission structure with automated payments. No chasing invoices or delayed payments."
    },
    {
      icon: <Globe className="h-8 w-8 text-synapse-primary" />,
      title: "100% Remote and Flexible Work Model",
      description: "Work from anywhere, set your own hours, and scale your recruiting business on your terms."
    }
  ];

  return (
    <section className="section-padding bg-synapse-lighter/30">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Why Join SRN?
          </h2>
          <p className="text-lg text-synapse-gray">
            Unlike traditional recruiting platforms, SRN provides the tools, support, and opportunities you need to succeed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-synapse-lighter p-3 rounded-lg flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-synapse-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-synapse-primary rounded-xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to Accelerate Your Recruiting Career?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 500+ successful recruiters who have already transformed their careers with SRN.
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-opacity-90 font-medium py-3 px-8 rounded-lg transition-all duration-200"
            onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
          >
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSRNSection;
