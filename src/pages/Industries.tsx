
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Heart, DollarSign, Factory, Briefcase, Users } from "lucide-react";

const industries = [
  {
    icon: <Code size={32} />,
    title: "IT & Technology",
    description: "Specialized recruitment for software engineers, data scientists, AI/ML experts, and tech leadership",
    href: "/industries/IT-recruitment-solutions",
    roles: ["Software Engineers", "Data Scientists", "DevOps Engineers", "Product Managers"]
  },
  {
    icon: <Heart size={32} />,
    title: "Healthcare",
    description: "Comprehensive healthcare recruitment from clinical staff to healthcare administration",
    href: "/industries/healthcare-recruitment-solutions",
    roles: ["Nurses", "Physicians", "Healthcare IT", "Medical Research"]
  },
  {
    icon: <DollarSign size={32} />,
    title: "Finance & Banking",
    description: "Financial services recruitment including investment banking, fintech, and regulatory roles",
    href: "/industries/finance-recruitment-solutions",
    roles: ["Financial Analysts", "Investment Bankers", "Risk Managers", "Compliance Officers"]
  },
  {
    icon: <Factory size={32} />,
    title: "Manufacturing",
    description: "Industrial and manufacturing recruitment from operations to supply chain management",
    href: "/industries/manufacturing-recruitment-solutions",
    roles: ["Operations Managers", "Quality Engineers", "Supply Chain", "Plant Managers"]
  },
  {
    icon: <Briefcase size={32} />,
    title: "Legal Services",
    description: "Legal recruitment specializing in corporate law, litigation, and compliance",
    href: "/industries/legal-recruitment-solutions",
    roles: ["Corporate Lawyers", "Paralegals", "Legal Assistants", "Compliance Managers"]
  },
  {
    icon: <Users size={32} />,
    title: "Sales & Marketing",
    description: "Go-to-market talent acquisition for sales, marketing, and customer success roles",
    href: "/industries/sales-marketing-recruitment",
    roles: ["Sales Directors", "Marketing Managers", "Customer Success", "Business Development"]
  }
];

const Industries = () => {
  return (
    <PageTemplate 
      title="Industry-Specific Recruitment Solutions"
      description="Specialized recruitment solutions tailored to industry-specific needs and challenges"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Industry Expertise
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Deep industry knowledge combined with AI-powered recruitment technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-synapse-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">{industry.title}</h3>
                  <p className="text-synapse-gray mb-4 flex-grow">{industry.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-synapse-dark mb-2">Key Roles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.roles.map((role, roleIndex) => (
                        <span 
                          key={roleIndex}
                          className="text-xs px-2 py-1 bg-synapse-lighter text-synapse-primary rounded-full"
                        >
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light mt-auto"
                    onClick={() => window.location.href = industry.href}
                  >
                    Explore {industry.title}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Industries;
