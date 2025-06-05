import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Users, Target, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowWeWorkSection = () => {
  const { addToRefs } = useScrollAnimation();

  const steps = [
    {
      title: "Discovery & Requirements",
      description: "We analyze your specific hiring needs, company culture, and role requirements to ensure perfect alignment.",
      icon: <Send className="h-6 w-6" />,
    },
    {
      title: "AI-Powered Sourcing & Shortlisting",
      description: "Our AI technology sources and shortlists candidates from extensive databases, ensuring we capture the best talent available.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Expert Recruiter Vetting",
      description: "Vetted candidates are thoroughly evaluated by our highly specialized large pool of recruiters for quality assurance.",
      icon: <Target className="h-6 w-6" />,
    },
    {
      title: "Top 1% Candidate Delivery",
      description: "We deliver only the top 1% candidates with their comprehensive resumes, ensuring you get the absolute best talent.",
      icon: <CheckCircle className="h-6 w-6" />,
    },
  ];

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-synapse-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-synapse-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-synapse-light/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-soft border border-synapse-light/30"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary uppercase tracking-wide">Our Process</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight"
          >
            How We
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> Work</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            Our proven 4-step process connects you with elite talent through our network of specialized recruiters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              ref={addToRefs}
              className="scroll-animate border-none shadow-soft hover:shadow-medium transition-shadow duration-300 group h-full flex flex-col"
            >
              <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-synapse-primary/10 text-synapse-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-synapse-dark mb-2 group-hover:text-synapse-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-synapse-gray group-hover:text-synapse-dark transition-colors duration-300 flex-grow">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
