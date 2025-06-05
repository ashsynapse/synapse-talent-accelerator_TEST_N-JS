
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Globe, Brain, Target, Zap, ArrowRight } from "lucide-react";

const WhatsUnderTheHoodSection = () => {
  const { addToRefs } = useScrollAnimation();

  const features = [
    {
      title: "Global Recruiter Network",
      description: "Access 1,000+ specialized recruiters across 50+ countries, all vetted and performance-tracked",
      icon: <Globe className="h-8 w-8" />,
      gradient: "from-blue-500 to-cyan-500",
      stats: "1,000+ Recruiters"
    },
    {
      title: "AI-Powered Workflow", 
      description: "Automated candidate sourcing, screening, and interview scheduling to reduce time-to-hire",
      icon: <Brain className="h-8 w-8" />,
      gradient: "from-purple-500 to-indigo-500",
      stats: "95% Automation"
    },
    {
      title: "Precision Matching",
      description: "Reinforcement-trained LLMs ensure best-fit talent. Our proprietary algorithm matches candidates to roles with 94% accuracy",
      icon: <Target className="h-8 w-8" />,
      gradient: "from-emerald-500 to-green-500",
      stats: "94% Accuracy"
    },
    {
      title: "Fastest Time-to-Hire",
      description: "Our AI + recruiter system fills roles in days—not months—accelerating growth and saving weeks of manual effort.",
      icon: <Zap className="h-8 w-8" />,
      gradient: "from-orange-500 to-amber-500",
      stats: "72h Delivery"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/40 via-white to-synapse-light/30 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 20%, ${getComputedStyle(document.documentElement).getPropertyValue('--synapse-primary')} 0%, transparent 50%), radial-gradient(circle at 80% 80%, ${getComputedStyle(document.documentElement).getPropertyValue('--synapse-secondary')} 0%, transparent 50%)`
             }}>
        </div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Technology & Expertise</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight"
          >
            What's Under
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> the Hood</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            Our AI-powered platform combines cutting-edge technology and human expertise for faster, more accurate hiring
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              ref={addToRefs}
              className="scroll-animate group relative"
            >
              <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-soft hover:shadow-xl transition-all duration-700 hover:-translate-y-3 border border-gray-100/50 hover:border-synapse-primary/20 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon and stats */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-synapse-primary mb-1">{feature.stats}</div>
                      <div className="text-xs text-synapse-gray uppercase tracking-wide">Performance</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-bold text-synapse-dark mb-5 group-hover:text-synapse-primary transition-colors duration-300 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-synapse-gray leading-relaxed text-lg group-hover:text-synapse-dark transition-colors duration-300 mb-6">
                    {feature.description}
                  </p>
                  
                  {/* Action indicator */}
                  <div className="flex items-center text-synapse-primary font-medium group-hover:translate-x-2 transition-transform duration-300">
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
