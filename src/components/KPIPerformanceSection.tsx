
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Briefcase, TrendingUp, Brain, Users } from "lucide-react";

const KPIPerformanceSection = () => {
  const kpis = [
    {
      value: "700+",
      label: "Clients Served",
      icon: <Building2 className="h-8 w-8 text-synapse-primary" />
    },
    {
      value: "1,000+",
      label: "Roles Filled",
      icon: <Briefcase className="h-8 w-8 text-synapse-primary" />
    },
    {
      value: "300%",
      label: "YoY Growth",
      icon: <TrendingUp className="h-8 w-8 text-synapse-primary" />
    },
    {
      value: "95%",
      label: "AI Matching Accuracy",
      icon: <Brain className="h-8 w-8 text-synapse-primary" />
    },
    {
      value: "96%",
      label: "Client Retention",
      icon: <Users className="h-8 w-8 text-synapse-primary" />
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-wide">
        <div className="text-center mb-16">
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
              className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="bg-synapse-lighter rounded-lg p-4 inline-block mb-4">
                  {kpi.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-synapse-primary mb-2">
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
