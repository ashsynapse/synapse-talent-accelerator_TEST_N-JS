
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    value: "1,000+",
    label: "Global Recruiters"
  },
  {
    value: "500+",
    label: "Open Roles"
  },
  {
    value: "200+",
    label: "Hiring Clients"
  },
  {
    value: "50+",
    label: "Countries Covered"
  }
];

const KeyMetricsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {metrics.map((metric, index) => (
            <Card key={index} className="border-none shadow-soft hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-synapse-primary mb-2">{metric.value}</h3>
                <p className="text-synapse-dark font-medium">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyMetricsSection;
