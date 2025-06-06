
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, CheckCircle, Cpu, Database, Cloud, Shield } from "lucide-react";

const InformationTechnology = () => {
  const roles = [
    "Software Engineers & Developers",
    "Data Scientists & Analysts", 
    "DevOps & Cloud Engineers",
    "Product Managers",
    "Cybersecurity Specialists",
    "AI/ML Engineers",
    "Tech Leadership Roles"
  ];

  return (
    <PageTemplate 
      title="IT Recruitment Services | Technology Talent Acquisition"
      description="Specialized recruitment for software engineers, data scientists, AI/ML experts, and tech leadership roles in the information technology sector."
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Information Technology Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Specialized recruitment for the fast-evolving tech industry. We understand the nuances of technical roles and help you find the right talent to drive innovation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Tech Industry Expertise</h2>
              <p className="text-synapse-gray mb-8">
                The technology sector demands specialized knowledge and understanding of rapidly evolving skill requirements. Our recruitment experts have deep industry experience and technical backgrounds.
              </p>
              <div className="space-y-4">
                {roles.map((role, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary mt-1 flex-shrink-0" />
                    <span className="text-synapse-gray">{role}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code, title: "Development", desc: "Full-stack, frontend, backend specialists" },
                { icon: Database, title: "Data & Analytics", desc: "Data scientists, engineers, analysts" },
                { icon: Cloud, title: "Cloud & DevOps", desc: "AWS, Azure, GCP specialists" },
                { icon: Shield, title: "Cybersecurity", desc: "Security engineers and architects" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                  <item.icon className="w-8 h-8 text-synapse-primary mb-4" />
                  <h3 className="font-semibold text-synapse-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-synapse-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="btn-primary text-lg py-4 px-8"
              onClick={() => window.location.href = "/contact"}
            >
              Find IT Talent Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default InformationTechnology;
