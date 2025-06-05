
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Brain, Cpu, Zap, Infinity, ArrowRight } from "lucide-react";

const WhatsUnderTheHoodSection = () => {
  const { addToRefs } = useScrollAnimation();

  const features = [
    {
      title: "Autonomous GPT-4 Agents",
      description: "AI agents handle every part of hiring: sourcing, vetting, outreach, scheduling, and more—at infinite scale",
      icon: <Brain className="h-8 w-8" />,
      gradient: "from-synapse-primary to-synapse-secondary",
      stats: "24/7 Operation"
    },
    {
      title: "Feedback Loop Training", 
      description: "Continuous learning algorithms train smarter LLMs with every hire, improving accuracy and efficiency",
      icon: <Cpu className="h-8 w-8" />,
      gradient: "from-synapse-secondary to-synapse-tertiary",
      stats: "Self-Improving"
    },
    {
      title: "Zero Human Intervention",
      description: "Fully automated system eliminates human bottlenecks, burnout, and coordination issues",
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-synapse-tertiary to-synapse-primary",
      stats: "100% Automated"
    },
    {
      title: "Infinite Scale Architecture",
      description: "AI infrastructure scales infinitely at near-zero cost, handling thousands of hires simultaneously",
      icon: <Infinity className="h-8 w-8" />,
      gradient: "from-synapse-primary to-synapse-light",
      stats: "∞ Capacity"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/40 via-white to-synapse-light/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-synapse-primary/20 via-transparent to-synapse-secondary/20"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-5xl mx-auto mb-10 md:mb-12">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">AI Infrastructure</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight"
          >
            The First Agentic
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> Hiring Cloud</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            SRN transforms recruiting into software with autonomous AI agents working 24/7
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              ref={addToRefs}
              className="scroll-animate group relative h-full"
            >
              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-700 hover:-translate-y-3 border border-gray-100/50 hover:border-synapse-primary/20 relative overflow-hidden h-full flex flex-col">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon and stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-synapse-primary mb-1">{feature.stats}</div>
                      <div className="text-xs text-synapse-gray uppercase tracking-wide">Status</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-synapse-dark mb-5 group-hover:text-synapse-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-synapse-gray leading-relaxed text-lg group-hover:text-synapse-dark transition-colors duration-300 mb-6 flex-grow">
                    {feature.description}
                  </p>
                  
                  {/* Action indicator */}
                  <div className="flex items-center text-synapse-primary font-medium group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    <span className="text-sm uppercase tracking-wide">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsUnderTheHoodSection;
