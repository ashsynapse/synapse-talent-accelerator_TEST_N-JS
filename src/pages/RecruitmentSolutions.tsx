
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Clock } from "lucide-react";

const solutions = [
  {
    icon: <Brain size={32} />,
    title: "Passive Recruitment",
    description: "AI-powered sourcing to identify and engage top talent who aren't actively job searching",
    href: "/recruitment-solutions/passive-recruitment"
  },
  {
    icon: <Target size={32} />,
    title: "Active Recruitment",
    description: "Streamlined process for candidates actively seeking new opportunities",
    href: "/recruitment-solutions/active-recruitment"
  },
  {
    icon: <Users size={32} />,
    title: "Executive Search",
    description: "Specialized recruitment for C-level and senior leadership positions",
    href: "/recruitment-solutions/executive-search"
  },
  {
    icon: <Clock size={32} />,
    title: "Contract Staffing",
    description: "Flexible staffing solutions for temporary and contract positions",
    href: "/recruitment-solutions/contract-staffing"
  }
];

const RecruitmentSolutions = () => {
  return (
    <PageTemplate 
      title="Recruitment Solutions"
      description="Comprehensive AI-powered recruitment solutions for modern hiring challenges"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              End-to-end recruitment solutions powered by AI and backed by global expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-colors duration-300 group">
                <CardContent className="p-6">
                  <div className="text-synapse-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">{solution.title}</h3>
                  <p className="text-synapse-gray mb-4">{solution.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light"
                    onClick={() => window.location.href = solution.href}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button 
              className="btn-primary text-lg py-4 px-8"
              onClick={() => window.location.href = "mailto:info@synapseint.com"}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default RecruitmentSolutions;
