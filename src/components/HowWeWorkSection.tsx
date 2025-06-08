
import React, { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Globe, Shield, Calendar, Handshake } from "lucide-react";

const HowWeWorkSection = () => {
  const { addToRefs } = useScrollAnimation();

  const steps = [
    {
      id: "step1",
      title: "1. AI Agent Analyzes Your Job Description",
      subtitle: "Intelligent Skills Parsing & Requirements Analysis",
      icon: <Brain className="h-8 w-8" />,
      content: "After an initial meeting with our leadership team to understand your hiring needs, you can login to our platform and submit your job requirements. Our AI agent instantly parses your job description, identifying key skills, experience levels, cultural fit criteria, and hidden requirements that traditional recruiting might miss."
    },
    {
      id: "step2", 
      title: "2. Agent-Led Global Sourcing",
      subtitle: "Real-time Candidate Identification Worldwide",
      icon: <Globe className="h-8 w-8" />,
      content: "Our AI agent conducts comprehensive global sourcing across multiple platforms, databases, and networks. It identifies passive candidates who match your criteria in real-time, accessing talent pools that would take human recruiters weeks to discover."
    },
    {
      id: "step3",
      title: "3. Autonomous Screening & Qualification", 
      subtitle: "Zero Human Filtering - Pure AI Assessment",
      icon: <Shield className="h-8 w-8" />,
      content: "Every candidate goes through our autonomous screening process with no human intervention. The AI agent evaluates technical skills, experience relevance, cultural alignment, and communication abilities through advanced assessment algorithms, ensuring only qualified candidates advance."
    },
    {
      id: "step4",
      title: "4. Smart Outreach and Interview Scheduling",
      subtitle: "24/7 Agent Operation & Coordination", 
      icon: <Calendar className="h-8 w-8" />,
      content: "Our AI agent operates around the clock, conducting personalized outreach to qualified candidates, managing responses, and automatically scheduling interviews based on your availability. All communication is handled seamlessly without requiring your direct involvement."
    },
    {
      id: "step5",
      title: "5. AI-Powered Offer Management",
      subtitle: "Final Delivery of Vetted Candidates",
      icon: <Handshake className="h-8 w-8" />,
      content: "The AI agent manages the entire offer process, from salary negotiations to offer letter generation. You receive a curated shortlist of pre-vetted, interview-ready candidates with comprehensive profiles, assessment scores, and recommendation rankings for final selection."
    }
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

        <div 
          ref={addToRefs}
          className="scroll-animate max-w-5xl mx-auto"
        >
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-5 h-auto bg-synapse-lighter/30 p-2 rounded-xl">
              {steps.map((step) => (
                <TabsTrigger 
                  key={step.id}
                  value={step.id} 
                  className="text-xs md:text-sm p-3 md:p-4 h-auto flex flex-col items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-synapse-primary data-[state=active]:shadow-soft rounded-lg transition-all duration-300"
                >
                  <div className="text-synapse-primary">
                    {step.icon}
                  </div>
                  <span className="font-medium text-center leading-tight">
                    {step.title}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {steps.map((step) => (
              <TabsContent 
                key={step.id}
                value={step.id} 
                className="mt-8 bg-gradient-to-br from-synapse-lighter/20 to-white rounded-xl p-8 border border-synapse-light/30 shadow-soft"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl p-4 flex-shrink-0">
                    <div className="text-white">
                      {step.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-synapse-dark mb-2">
                      {step.title}
                    </h3>
                    <p className="text-synapse-primary font-medium mb-4">
                      {step.subtitle}
                    </p>
                    <p className="text-synapse-gray leading-relaxed text-lg">
                      {step.content}
                    </p>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
