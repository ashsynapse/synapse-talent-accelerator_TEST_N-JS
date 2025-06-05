
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const KPIPerformanceSection = () => {
  const kpis = [
    {
      value: "700+",
      label: "Clients Served",
      icon: "🏢"
    },
    {
      value: "1,000+",
      label: "Roles Filled",
      icon: "💼"
    },
    {
      value: "300%",
      label: "YoY Growth",
      icon: "📈"
    },
    {
      value: "<72 Hours",
      label: "Avg. Time-to-Deliver",
      icon: "⚡"
    },
    {
      value: "96%",
      label: "Client Retention",
      icon: "🤝"
    },
    {
      value: "2 Regions",
      label: "Covered per Role",
      icon: "🌍"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {kpis.map((kpi, index) => (
            <Card 
              key={index} 
              className="border-none shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">{kpi.icon}</div>
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
