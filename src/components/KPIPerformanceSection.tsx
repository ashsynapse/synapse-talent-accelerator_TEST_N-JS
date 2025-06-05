
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, TrendingUp, Zap, Users, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const KPIPerformanceSection = () => {
  const { addToRefs } = useScrollAnimation();

  const kpis = [
    {
      value: "90%",
      label: "Faster Time-to-Hire vs Traditional",
      icon: <Clock className="h-8 w-8 text-white" />,
      bgGradient: "from-synapse-primary to-synapse-secondary",
      delay: "0ms"
    },
    {
      value: "70%",
      label: "Reduction in Hiring Costs",
      icon: <DollarSign className="h-8 w-8 text-white" />,
      bgGradient: "from-synapse-secondary to-synapse-tertiary",
      delay: "100ms"
    },
    {
      value: "5x",
      label: "More Candidate Reach & Coverage",
      icon: <TrendingUp className="h-8 w-8 text-white" />,
      bgGradient: "from-synapse-tertiary to-synapse-primary",
      delay: "200ms"
    },
    {
      value: "24/7",
      label: "Continuous Hiring Operations",
      icon: <Zap className="h-8 w-8 text-white" />,
      bgGradient: "from-synapse-primary to-synapse-light",
      delay: "300ms"
    },
    {
      value: "95%+",
      label: "Quality Match Accuracy Rate",
      icon: <Users className="h-8 w-8 text-white" />,
      bgGradient: "from-synapse-secondary to-synapse-primary",
      delay: "400ms"
    }
  ];

  return (
    <section className="py-10 md:py-14 bg-gradient-to-br from-white via-synapse-lighter/20 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-synapse-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-synapse-secondary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-synapse-tertiary rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center mb-10 md:mb-12">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-gradient-to-r from-synapse-primary/10 to-synapse-secondary/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-synapse-light/30"
          >
            <Sparkles className="h-4 w-4 text-synapse-primary animate-pulse" />
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Client Results</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight"
          >
            Measurable Impact
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> for Your Business</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray max-w-3xl mx-auto leading-relaxed"
          >
            See the tangible benefits our AI-first recruiting delivers to organizations worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {kpis.map((kpi, index) => (
            <Card 
              key={index} 
              ref={addToRefs}
              className="scroll-animate border-none shadow-soft hover:shadow-xl transition-all duration-700 hover:-translate-y-4 group overflow-hidden relative bg-white/80 backdrop-blur-sm"
              style={{ animationDelay: kpi.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${kpi.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              <CardContent className="p-8 text-center relative z-10">
                <div className={`bg-gradient-to-br ${kpi.bgGradient} rounded-2xl p-5 inline-block mb-6 shadow-medium group-hover:shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {kpi.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-synapse-primary mb-3 group-hover:text-white transition-colors duration-500 group-hover:scale-110 transform">
                  {kpi.value}
                </div>
                <div className="text-sm font-semibold text-synapse-gray group-hover:text-white/90 transition-colors duration-500 leading-tight uppercase tracking-wide">
                  {kpi.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPIPerformanceSection;
