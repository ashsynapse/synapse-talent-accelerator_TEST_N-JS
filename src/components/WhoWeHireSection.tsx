
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code, Brain, Calculator, Heart, Factory, Target, Crown, BarChart3 } from "lucide-react";

const WhoWeHireSection = () => {
  const { addToRefs } = useScrollAnimation();

  const categories = [
    {
      title: "Tech",
      description: "Engineers, PMs, AI/ML specialists across all levels",
      icon: <Code className="h-6 w-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Finance", 
      description: "Controllers, analysts, fintech specialists",
      icon: <Calculator className="h-6 w-6" />,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Healthcare",
      description: "Clinical, research, and administrative roles",
      icon: <Heart className="h-6 w-6" />,
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "Legal",
      description: "Corporate, compliance, and regulatory experts",
      icon: <Brain className="h-6 w-6" />,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Manufacturing",
      description: "Operations, supply chain, and engineering",
      icon: <Factory className="h-6 w-6" />,
      gradient: "from-orange-500 to-amber-500"
    },
    {
      title: "Sales & Marketing",
      description: "Revenue generation and growth specialists",
      icon: <Target className="h-6 w-6" />,
      gradient: "from-synapse-primary to-synapse-secondary"
    },
    {
      title: "Leadership",
      description: "C-Suite, VPs, and senior executives",
      icon: <Crown className="h-6 w-6" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Operations",
      description: "Strategy, analytics, and business operations",
      icon: <BarChart3 className="h-6 w-6" />,
      gradient: "from-teal-500 to-blue-500"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-32 h-32 bg-synapse-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-synapse-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-soft border border-synapse-light/30"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary uppercase tracking-wide">Market Opportunity</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight"
          >
            2B+ White-Collar
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> Roles</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            $758B+ global recruiting industry across tech, finance, healthcare, and beyond
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={category.title}
              ref={addToRefs}
              className="scroll-animate group relative h-full"
            >
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-100/50 hover:border-synapse-primary/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center relative overflow-hidden h-full flex flex-col">
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`bg-gradient-to-br ${category.gradient} rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:rotate-3 mx-auto`}>
                  <div className="text-white">
                    {category.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-synapse-dark mb-4 group-hover:text-synapse-primary transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-sm text-synapse-gray leading-relaxed group-hover:text-synapse-dark transition-colors duration-300 flex-grow">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHireSection;
