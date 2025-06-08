
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
      tabText: "AI Agent\nAnalyzes Your JD",
      subtitle: "Intelligent Skills Parsing & Requirements Analysis",
      icon: <Brain className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: "After an initial meeting with our leadership team to understand your hiring needs, you can login to our platform and submit your job requirements. Our AI agent instantly parses your job description, identifying key skills, experience levels, cultural fit criteria, and hidden requirements that traditional recruiting might miss.",
      number: 1
    },
    {
      id: "step2", 
      title: "Agent-Led Global Sourcing",
      tabText: "Agent-Led\nGlobal Sourcing",
      subtitle: "Real-time Candidate Identification Worldwide",
      icon: <Globe className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: "Our AI agent conducts comprehensive global sourcing across multiple platforms, databases, and networks. It identifies passive candidates who match your criteria in real-time, accessing talent pools that would take human recruiters weeks to discover.",
      number: 2
    },
    {
      id: "step3",
      title: "Autonomous Screening & Qualification", 
      tabText: "Autonomous Screening\n& Qualification",
      subtitle: "Zero Human Filtering - Pure AI Assessment",
      icon: <Shield className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: "Every candidate goes through our autonomous screening process with no human intervention. The AI agent evaluates technical skills, experience relevance, cultural alignment, and communication abilities through advanced assessment algorithms, ensuring only qualified candidates advance.",
      number: 3
    },
    {
      id: "step4",
      title: "Smart Outreach and Interview Scheduling",
      tabText: "Smart Outreach\n& Interview Scheduling",
      subtitle: "24/7 Agent Operation & Coordination", 
      icon: <Calendar className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: "Our AI agent operates around the clock, conducting personalized outreach to qualified candidates, managing responses, and automatically scheduling interviews based on your availability. All communication is handled seamlessly without requiring your direct involvement.",
      number: 4
    },
    {
      id: "step5",
      title: "AI-Powered Offer Management",
      tabText: "AI-Powered\nOffer Management",
      subtitle: "Final Delivery of Vetted Candidates",
      icon: <Handshake className="h-8 w-8" />,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      content: "The AI agent manages the entire offer process, from salary negotiations to offer letter generation. You receive a curated shortlist of pre-vetted, interview-ready candidates with comprehensive profiles, assessment scores, and recommendation rankings for final selection.",
      number: 5
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
            {/* Mobile: Vertical list */}
            <div className="block md:hidden mb-8">
              <TabsList className="flex flex-col w-full h-auto bg-synapse-lighter/30 p-2 rounded-xl gap-2">
                {steps.map((step) => (
                  <TabsTrigger 
                    key={step.id}
                    value={step.id} 
                    className="w-full text-sm p-3 h-auto flex items-center gap-3 data-[state=active]:bg-white data-[state=active]:text-synapse-primary data-[state=active]:shadow-soft rounded-lg transition-all duration-300 hover:bg-white/60 justify-start"
                  >
                    <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-lg p-2 text-white flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="font-medium text-left leading-tight">
                      {step.tabText.replace('\n', ' ')}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {/* Desktop: Horizontal grid */}
            <div className="hidden md:block">
              <TabsList className="grid w-full grid-cols-5 h-auto bg-synapse-lighter/30 p-3 rounded-xl mb-8 gap-2">
                {steps.map((step) => (
                  <TabsTrigger 
                    key={step.id}
                    value={step.id} 
                    className="text-xs p-3 h-auto flex flex-col items-center gap-2 data-[state=active]:bg-white data-[state=active]:text-synapse-primary data-[state=active]:shadow-soft rounded-lg transition-all duration-300 hover:bg-white/60 min-h-[110px]"
                  >
                    <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-lg p-2.5 text-white">
                      {step.icon}
                    </div>
                    <span className="font-medium text-center leading-tight whitespace-pre-line">
                      {step.tabText}
                    </span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {steps.map((step) => (
              <TabsContent 
                key={step.id}
                value={step.id} 
                className="bg-gradient-to-br from-synapse-lighter/20 to-white rounded-xl border border-synapse-light/30 shadow-soft overflow-hidden relative"
              >
                {/* Number badge */}
                <div className="absolute top-0 left-0 z-10">
                  <div className="bg-synapse-primary text-white w-10 h-10 rounded-br-xl flex items-center justify-center font-bold text-lg">
                    {step.number}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-6 md:p-8 pt-12 md:pt-8 flex flex-col justify-center order-2 md:order-1">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-synapse-dark mb-3">
                      {step.title}
                    </h3>
                    <p className="text-synapse-primary font-semibold mb-4 text-base md:text-lg">
                      {step.subtitle}
                    </p>
                    <p className="text-synapse-gray leading-relaxed text-base md:text-lg">
                      {step.content}
                    </p>
                  </div>
                  <div className="relative h-48 md:h-auto order-1 md:order-2">
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
