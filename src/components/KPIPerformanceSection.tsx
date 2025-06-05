
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Briefcase, TrendingUp, Brain, Users } from "lucide-react";

const KPIPerformanceSection = () => {
  const kpis = [
    {
      value: "700+",
      label: "Clients Served",
      icon: <Building2 className="h-8 w-8 text-synapse-primary" />,
      bgGradient: "from-synapse-primary/10 to-synapse-secondary/10"
    },
    {
      value: "1,000+",
      label: "Roles Filled",
      icon: <Briefcase className="h-8 w-8 text-synapse-primary" />,
      bgGradient: "from-synapse-secondary/10 to-synapse-tertiary/10"
    },
    {
      value: "300%",
      label: "YoY Growth",
      icon: <TrendingUp className="h-8 w-8 text-synapse-primary" />,
      bgGradient: "from-synapse-tertiary/10 to-synapse-primary/10"
    },
    {
      value: "95%",
      label: "AI Matching Accuracy",
      icon: <Brain className="h-8 w-8 text-synapse-primary" />,
      bgGradient: "from-synapse-primary/10 to-synapse-light/20"
    },
    {
      value: "96%",
      label: "Client Retention",
      icon: <Users className="h-8 w-8 text-synapse-primary" />,
      bgGradient: "from-synapse-secondary/10 to-synapse-primary/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, ${getComputedStyle(document.documentElement).getPropertyValue('--synapse-primary')} 0%, transparent 50%), radial-gradient(circle at 80% 20%, ${getComputedStyle(document.documentElement).getPropertyValue('--synapse-secondary')} 0%, transparent 50%)`
        }}></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-synapse-light/20 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary">Performance Metrics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Performance That Speaks for Itself
          </h2>
          <p className="text-lg text-synapse-gray max-w-2xl mx-auto">
            Our numbers reflect our commitment to delivering exceptional recruiting results for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {kpis.map((kpi, index) => (
            <Card 
              key={index} 
              className="border-none shadow-soft hover:shadow-medium transition-all duration-500 hover:-translate-y-2 group overflow-hidden relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${kpi.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <CardContent className="p-6 text-center relative z-10">
                <div className="bg-white rounded-xl p-4 inline-block mb-4 shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
                  {kpi.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-synapse-primary mb-2 group-hover:scale-105 transition-transform duration-300">
                  {kpi.value}
                </div>
                <div className="text-sm font-medium text-synapse-gray leading-tight">
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
