
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code, TrendingUp, Settings, Users, DollarSign, Calculator, Scale, Factory } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const industries = [
  {
    icon: <Code size={32} />,
    title: "Information Technology",
    description: "Specialized recruitment for software engineers, data scientists, AI/ML experts, and tech leadership",
    href: "/industries/information-technology",
    roles: ["Software Engineers", "Data Scientists", "DevOps Engineers", "Product Managers"]
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Digital Marketing",
    description: "Digital marketing professionals including SEO specialists, content creators, and marketing managers",
    href: "/industries/digital-marketing",
    roles: ["Digital Marketers", "SEO Specialists", "Content Creators", "Social Media Managers"]
  },
  {
    icon: <Settings size={32} />,
    title: "Engineering",
    description: "Engineering professionals across mechanical, electrical, civil, and other engineering disciplines",
    href: "/industries/engineering",
    roles: ["Mechanical Engineers", "Electrical Engineers", "Civil Engineers", "Project Engineers"]
  },
  {
    icon: <Users size={32} />,
    title: "Human Resources (HR)",
    description: "HR professionals including talent acquisition specialists, HR managers, and organizational development",
    href: "/industries/human-resources",
    roles: ["HR Managers", "Talent Acquisition", "HR Business Partners", "Compensation Analysts"]
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Sales",
    description: "Sales professionals from account executives to sales directors and business development roles",
    href: "/industries/sales",
    roles: ["Account Executives", "Sales Directors", "Business Development", "Sales Engineers"]
  },
  {
    icon: <Calculator size={32} />,
    title: "Accounting",
    description: "Accounting and finance professionals including CPAs, financial analysts, and accounting managers",
    href: "/industries/accounting",
    roles: ["CPAs", "Financial Analysts", "Accounting Managers", "Tax Specialists"]
  },
  {
    icon: <Scale size={32} />,
    title: "Legal",
    description: "Legal professionals specializing in corporate law, litigation, compliance, and legal operations",
    href: "/industries/legal",
    roles: ["Corporate Lawyers", "Paralegals", "Legal Assistants", "Compliance Officers"]
  },
  {
    icon: <Factory size={32} />,
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              Industry Expertise
            </h1>
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              Deep industry knowledge combined with AI-powered recruitment technology. We understand the unique challenges and requirements of each sector, delivering specialized talent acquisition solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Industries;
