
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Cpu, Zap, Check } from "lucide-react";

const HowWeWorkSection = () => {
  const { addToRefs } = useScrollAnimation();

  const steps = [
    {
      icon: <Brain className="h-10 w-10 text-white" />,
      title: "AI Agent Analyzes Your Job",
      description: "Upload your job description and our AI agent instantly understands requirements, skills, and cultural fit criteria.",
      gradient: "from-synapse-primary to-synapse-secondary"
    },
    {
      icon: <Cpu className="h-10 w-10 text-white" />,
      title: "Automated Sourcing & Screening",
      description: "AI agent sources candidates globally, conducts initial screening, and evaluates qualifications automatically.",
      gradient: "from-synapse-secondary to-synapse-tertiary"
    },
    {
      icon: <Zap className="h-10 w-10 text-white" />,
      title: "Smart Outreach & Scheduling",
      description: "Personalized outreach, interview scheduling, and candidate management - all handled by AI without your intervention.",
      gradient: "from-synapse-tertiary to-synapse-primary"
    }
  ];

  const benefits = [
    "Upload job description and let AI handle everything",
    "AI agent sources from global talent databases",
    "Automated screening and qualification assessment",
    "Personalized candidate outreach and engagement",
    "Interview scheduling and coordination",
    "Offer management and negotiation support"
  ];

  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-synapse-lighter/50 px-4 py-2 rounded-full mb-6"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary uppercase tracking-wide">Client Solution</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-3xl md:text-4xl font-bold text-synapse-dark mb-4"
          >
            How Our Platform Works for You
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-lg text-synapse-gray"
          >
            Experience fully automated hiring - from job posting to offer acceptance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={addToRefs}
              className="scroll-animate bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 relative"
            >
              {/* Step Number */}
              <div className={`absolute -top-4 left-8 w-12 h-12 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-medium`}>
                <span className="text-white font-bold text-lg">{index + 1}</span>
              </div>
              
              <div className={`bg-gradient-to-br ${step.gradient} p-4 rounded-lg inline-block mb-6 mt-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-synapse-dark mb-3">
                {step.title}
              </h3>
              <p className="text-synapse-gray">{step.description}</p>
            </div>
          ))}
        </div>

        <div 
          ref={addToRefs}
          className="scroll-animate bg-synapse-light rounded-xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-synapse-dark mb-6">
            Complete Automation from Start to Finish
          </h3>
          <p className="text-synapse-gray mb-8 text-lg max-w-3xl mx-auto">
            Our AI platform handles every step of your hiring process, giving you qualified candidates without the manual work.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {benefits.map((item, index) => (
              <div key={index} className="flex items-start gap-3 text-left">
                <Check className="h-5 w-5 text-synapse-primary mt-1 flex-shrink-0" />
                <span className="text-synapse-dark">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
