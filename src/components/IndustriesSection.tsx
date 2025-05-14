
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IndustriesSection = () => {
  const industries = [
    {
      name: "SaaS & Technology",
      description:
        "From senior developers to product managers, we help tech companies scale rapidly with specialized talent.",
      imageUrl: "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Hospitality",
      description:
        "Find managers and specialists who understand the unique demands of the hospitality industry.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Healthcare",
      description:
        "We connect healthcare providers with qualified clinical and administrative professionals.",
      imageUrl: "https://images.unsplash.com/photo-1571772996211-2f02c9727629?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Finance",
      description:
        "From analysts to C-suite executives, we deliver talent that drives financial performance.",
      imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="industries">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-synapse-gray">
            Our specialized recruiters have deep expertise across multiple sectors,
            ensuring candidates with the right skills and cultural fit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300 flex flex-col"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={industry.imageUrl}
                  alt={industry.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-synapse-dark mb-3">
                  {industry.name}
                </h3>
                <p className="text-synapse-gray mb-4 flex-grow">
                  {industry.description}
                </p>
                <a
                  href="#"
                  className="text-synapse-primary font-medium inline-flex items-center hover:underline mt-auto"
                >
                  Learn more <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-synapse-gray mb-6">
            Don't see your industry? We work across many more sectors.
          </p>
          <Button 
            className="btn-primary"
            onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            Talk to a Specialist
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
