
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Clock, Globe, UserCheck, Briefcase, GraduationCap } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const solutions = [
  {
    icon: <Brain size={32} />,
    title: "Passive Recruitment",
    description: "AI-powered sourcing to identify and engage top talent who aren't actively job searching",
    href: "/recruitment-solutions/passive-recruitment"
  },
  {
    icon: <Target size={32} />,
    title: "Candidate Sourcing",
    description: "Comprehensive candidate sourcing strategies to find the perfect match for your roles",
    href: "/recruitment-solutions/candidate-sourcing"
  },
  {
    icon: <Briefcase size={32} />,
    title: "Project Staffing",
    description: "Specialized staffing solutions for short-term and long-term project requirements",
    href: "/recruitment-solutions/project-staffing"
  },
  {
    icon: <Users size={32} />,
    title: "Executive Search",
    description: "Specialized recruitment for C-level and senior leadership positions",
    href: "/recruitment-solutions/executive-search"
  },
  {
    icon: <Globe size={32} />,
    title: "Remote Staffing",
    description: "Global remote talent acquisition for distributed teams and remote-first companies",
    href: "/recruitment-solutions/remote-staffing"
  },
  {
    icon: <UserCheck size={32} />,
    title: "Permanent Staffing",
    description: "Full-time permanent placement services across all industries and skill levels",
    href: "/recruitment-solutions/permanent-staffing"
  },
  {
    icon: <Clock size={32} />,
    title: "Contingent Staffing",
    description: "Flexible staffing solutions for temporary and contract positions",
    href: "/recruitment-solutions/contingent-staffing"
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Apprenticeship Recruitment",
    description: "Specialized recruitment for apprenticeship programs and early career professionals",
    href: "/recruitment-solutions/apprenticeship-recruitment"
  }
];

const RecruitmentSolutions = () => {
  return (
    <PageTemplate 
      title="Recruitment Solutions"
      description="Comprehensive AI-powered recruitment solutions for modern hiring challenges"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              End-to-end recruitment solutions powered by AI and backed by global expertise. From passive recruitment to executive search, we deliver tailored strategies that transform your hiring process.
            </p>
          </div>
        </div>
      </section>

      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>
      </section>
      <FinalCtaSection />
    </PageTemplate>
  );
};

export default RecruitmentSolutions;
