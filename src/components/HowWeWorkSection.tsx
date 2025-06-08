
import React, { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Globe, Shield, Calendar, Handshake } from "lucide-react";

const HowWeWorkSection = () => {
  const { addToRefs } = useScrollAnimation();

  const steps = [
    {
      id: "step1",
      title: "AI Agent Analyzes Your Job Description",
      subtitle: "Intelligent Skills Parsing & Requirements Analysis",
      icon: <Brain className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "After an initial meeting with our leadership team to understand your hiring needs, you can login to our platform and submit your job requirements. Our AI agent instantly parses your job description, identifying key skills, experience levels, cultural fit criteria, and hidden requirements that traditional recruiting might miss."
    },
    {
      id: "step2", 
      title: "Agent-Led Global Sourcing",
      subtitle: "Real-time Candidate Identification Worldwide",
      icon: <Globe className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "Our AI agent conducts comprehensive global sourcing across multiple platforms, databases, and networks. It identifies passive candidates who match your criteria in real-time, accessing talent pools that would take human recruiters weeks to discover."
    },
    {
      id: "step3",
      title: "Autonomous Screening & Qualification", 
      subtitle: "Zero Human Filtering - Pure AI Assessment",
      icon: <Shield className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "Every candidate goes through our autonomous screening process with no human intervention. The AI agent evaluates technical skills, experience relevance, cultural alignment, and communication abilities through advanced assessment algorithms, ensuring only qualified candidates advance."
    },
    {
      id: "step4",
      title: "Smart Outreach and Interview Scheduling",
      subtitle: "24/7 Agent Operation & Coordination", 
      icon: <Calendar className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      content: "Our AI agent operates around the clock, conducting personalized outreach to qualified candidates, managing responses, and automatically scheduling interviews based on your availability. All communication is handled seamlessly without requiring your direct involvement."
    },
    {
      id: "step5",
      title: "AI-Powered Offer Management",
      subtitle: "Final Delivery of Vetted Candidates",
      icon: <Handshake className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
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
          className="scroll-animate max-w-6xl mx-auto"
        >
          <Tabs defaultValue="step1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 h-auto bg-synapse-lighter/30 p-3 rounded-xl mb-8 gap-2">
              {steps.map((step, index) => (
                <TabsTrigger 
                  key={step.id}
                  value={step.id} 
                  className="text-xs p-4 h-auto flex flex-col items-center gap-3 data-[state=active]:bg-white data-[state=active]:text-synapse-primary data-[state=active]:shadow-soft rounded-lg transition-all duration-300 hover:bg-white/60 min-h-[120px] md:min-h-[140px]"
                >
                  <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-full p-3 text-white data-[state=active]:from-synapse-primary data-[state=active]:to-synapse-secondary">
                    {step.icon}
                  </div>
                  <span className="font-medium text-center leading-tight text-xs md:text-sm line-clamp-3">
                    {`${index + 1}. ${step.title.split('.')[1]?.trim() || step.title}`}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {steps.map((step) => (
              <TabsContent 
                key={step.id}
                value={step.id} 
                className="bg-gradient-to-br from-synapse-lighter/20 to-white rounded-xl border border-synapse-light/30 shadow-soft overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-synapse-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-synapse-primary font-semibold mb-4 text-lg">
                      {step.subtitle}
                    </p>
                    <p className="text-synapse-gray leading-relaxed text-lg">
                      {step.content}
                    </p>
                  </div>
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-synapse-primary/20 to-synapse-secondary/10"></div>
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
