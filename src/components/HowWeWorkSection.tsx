
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const HowWeWorkSection = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Requirements",
      description: "Post your hard-to-fill positions with exact requirements. We connect you with specialized recruiters who match your industry and role needs.",
    },
    {
      number: "02", 
      title: "AI-Powered Sourcing",
      description: "Our AI technology identifies and matches the best candidates from global talent pools, ensuring precision and speed in the initial screening process.",
    },
    {
      number: "03",
      title: "Expert Recruiter Touch", 
      description: "Experienced recruiters leverage their networks for targeted outreach. Quality-focused approach ensures only the best candidates reach you.",
    },
    {
      number: "04",
      title: "Interview & Hire",
      description: "Receive detailed screening notes, LinkedIn profiles, and resumes. Manage your interview process seamlessly and hire the best candidates.",
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            How We Work
          </h2>
          <p className="text-lg text-synapse-gray max-w-3xl mx-auto">
            Our streamlined process ensures you get the right candidates quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-shadow relative">
              <CardContent className="p-6">
                <div className="relative">
                  <div className="text-synapse-primary text-4xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-synapse-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="text-synapse-gray leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
