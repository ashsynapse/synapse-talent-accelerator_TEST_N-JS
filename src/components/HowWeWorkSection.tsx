
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Search, MessageSquare, BarChart3 } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
    {
      number: "01",
      title: "Intake & Curation",
      description: "Share your JD. We align with your goals and select relevant recruiters/interviewers.",
      icon: <FileText className="h-8 w-8 text-white" />
    },
    {
      number: "02", 
      title: "Sourcing & Scheduling",
      description: "Our dual-region team finds talent. We handle scheduling and follow-ups.",
      icon: <Search className="h-8 w-8 text-white" />
    },
    {
      number: "03",
      title: "Expert Interviewing", 
      description: "Interviews conducted by vetted experts, tailored by domain and skillset.",
      icon: <MessageSquare className="h-8 w-8 text-white" />
    },
    {
      number: "04",
      title: "Feedback & Delivery",
      description: "Get video recordings, skill insights, and our hiring recommendation.",
      icon: <BarChart3 className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            How We Work – Interview-as-a-Service
          </h2>
          <p className="text-lg text-synapse-gray max-w-3xl mx-auto">
            Our streamlined process ensures you get the right candidates quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-shadow relative overflow-hidden">
              <CardContent className="p-6">
                <div className="absolute top-0 right-0 w-16 h-16 bg-synapse-primary/10 -mr-8 -mt-8 rotate-45"></div>
                <div className="relative">
                  <div className="bg-synapse-primary rounded-lg p-4 inline-block mb-4">
                    {step.icon}
                  </div>
                  <div className="bg-synapse-primary text-white w-12 h-12 rounded-full flex items-center justify-center mb-4 text-sm font-bold">
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
