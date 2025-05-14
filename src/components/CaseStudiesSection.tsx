
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudiesSection = () => {
  const metrics = [
    {
      value: "72",
      unit: "hours",
      description: "Average time to first qualified candidate",
    },
    {
      value: "94",
      unit: "%",
      description: "Client satisfaction rating",
    },
    {
      value: "82",
      unit: "%",
      description: "Candidates who pass initial interviews",
    },
    {
      value: "3.5x",
      unit: "",
      description: "Faster than traditional recruitment",
    },
  ];

  const caseStudies = [
    {
      title: "Tech Startup Scaled Engineering Team 3x in 6 Months",
      industry: "Technology",
      results: "Hired 24 senior engineers across 4 specializations",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Healthcare Provider Filled Critical Positions During Expansion",
      industry: "Healthcare",
      results: "100% fill rate for specialized positions within 30 days",
      imageUrl: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="section-padding bg-synapse-lighter">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Our Success Metrics
          </h2>
          <p className="text-lg text-synapse-gray">
            We measure our performance by the success of our clients and the
            quality of our placements.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-soft text-center hover:shadow-medium transition-all duration-300"
            >
              <div className="mb-3">
                <span className="text-4xl md:text-5xl font-bold text-synapse-primary">
                  {metric.value}
                </span>
                <span className="text-lg font-medium text-synapse-primary">
                  {metric.unit}
                </span>
              </div>
              <p className="text-synapse-gray">{metric.description}</p>
            </div>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-synapse-dark text-center mb-8">
          Featured Case Studies
        </h3>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-medium transition-all duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={study.imageUrl}
                  alt={study.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-synapse-light text-synapse-primary text-sm font-medium">
                    {study.industry}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-synapse-dark mb-2">
                  {study.title}
                </h4>
                <p className="text-synapse-gray mb-4">
                  <strong>Results:</strong> {study.results}
                </p>
                <a
                  href="#"
                  className="text-synapse-primary font-medium inline-flex items-center hover:underline"
                >
                  Read full case study <ArrowRight className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="btn-primary"
            onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
          >
            See More Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
