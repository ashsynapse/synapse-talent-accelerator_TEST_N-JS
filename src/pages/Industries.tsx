
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, TrendingUp, Settings, Users, DollarSign, Calculator, Scale, Factory } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const industries = [
  {
    icon: <Code className="w-8 h-8" />,
    title: "Information Technology",
    description: "Specialized recruitment for software engineers, data scientists, AI/ML experts, and tech leadership",
    href: "/industries/information-technology",
    roles: ["Software Engineers", "Data Scientists", "DevOps Engineers", "Product Managers"]
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Digital Marketing",
    description: "Digital marketing professionals including SEO specialists, content creators, and marketing managers",
    href: "/industries/digital-marketing",
    roles: ["Digital Marketers", "SEO Specialists", "Content Creators", "Social Media Managers"]
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Engineering",
    description: "Engineering professionals across mechanical, electrical, civil, and other engineering disciplines",
    href: "/industries/engineering",
    roles: ["Mechanical Engineers", "Electrical Engineers", "Civil Engineers", "Project Engineers"]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Human Resources (HR)",
    description: "HR professionals including talent acquisition specialists, HR managers, and organizational development",
    href: "/industries/human-resources",
    roles: ["HR Managers", "Talent Acquisition", "HR Business Partners", "Compensation Analysts"]
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Sales",
    description: "Sales professionals from account executives to sales directors and business development roles",
    href: "/industries/sales",
    roles: ["Account Executives", "Sales Directors", "Business Development", "Sales Engineers"]
  },
  {
    icon: <Calculator className="w-8 h-8" />,
    title: "Accounting",
    description: "Accounting and finance professionals including CPAs, financial analysts, and accounting managers",
    href: "/industries/accounting",
    roles: ["CPAs", "Financial Analysts", "Accounting Managers", "Tax Specialists"]
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Legal",
    description: "Legal professionals specializing in corporate law, litigation, compliance, and legal operations",
    href: "/industries/legal",
    roles: ["Corporate Lawyers", "Paralegals", "Legal Assistants", "Compliance Officers"]
  },
  {
    icon: <Factory className="w-8 h-8" />,
    title: "Manufacturing",
    description: "Manufacturing professionals from operations to supply chain management and quality control",
    href: "/industries/manufacturing",
    roles: ["Operations Managers", "Quality Engineers", "Supply Chain", "Plant Managers"]
  }
];

const Industries = () => {
  return (
    <PageTemplate 
      title="Industry-Specific Recruitment Solutions"
      description="Specialized recruitment solutions tailored to industry-specific needs and challenges"
    >
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Industry Expertise
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Deep industry knowledge combined with AI-powered recruitment technology. We understand the unique challenges and requirements of each sector, delivering specialized talent acquisition solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {industry.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">{industry.title}</h3>
                  <p className="text-synapse-gray mb-4 flex-grow leading-relaxed">{industry.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-synapse-dark mb-3">Key Roles:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.roles.map((role, roleIndex) => (
                        <span 
                          key={roleIndex}
                          className="text-xs px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full"
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
      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Industries;
