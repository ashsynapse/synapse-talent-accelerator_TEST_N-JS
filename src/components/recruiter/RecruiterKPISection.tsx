
import React from "react";

const RecruiterKPISection = () => {
  const metrics = [
    { label: "Up to $30K", value: "Per Placement" },
    { label: "500+ Active Roles", value: "Live Jobs" },
    { label: "48-Hour Avg Match", value: "Quick Results" },
    { label: "97% Satisfaction", value: "Happy Recruiters" }
  ];

  return (
    <section className="py-10 bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20">
      <div className="container-wide">
        <div className="bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20 rounded-xl p-8 border border-synapse-light/30">
          <h3 className="text-2xl font-bold text-synapse-dark text-center mb-8">
            SRN Network Performance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent mb-2">
                  {metric.label}
                </div>
                <div className="text-synapse-gray font-medium">
                  {metric.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterKPISection;
