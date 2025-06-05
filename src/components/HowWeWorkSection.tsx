
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Brain, Users, CheckCircle } from "lucide-react";

const HowWeWorkSection = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Your Requirements",
      description: "Post your hard-to-fill positions with exact requirements. We connect you with specialized recruiters who match your industry and role needs.",
      icon: <FileText className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-primary to-synapse-secondary"
    },
    {
      number: "02", 
      title: "AI-Powered Sourcing",
      description: "Our AI technology identifies and matches the best candidates from global talent pools, ensuring precision and speed in the initial screening process.",
      icon: <Brain className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-secondary to-synapse-tertiary"
    },
    {
      number: "03",
      title: "Expert Recruiter Touch", 
      description: "Experienced recruiters leverage their networks for targeted outreach. Quality-focused approach ensures only the best candidates reach you.",
      icon: <Users className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-tertiary to-synapse-primary"
    },
    {
      number: "04",
      title: "Interview & Hire",
      description: "Receive detailed screening notes, LinkedIn profiles, and resumes. Manage your interview process seamlessly and hire the best candidates.",
      icon: <CheckCircle className="h-6 w-6" />,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-primary to-synapse-light"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-synapse-light/30 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-synapse-secondary/20 rounded-full blur-xl"></div>
      
      <div className="container-wide relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-synapse-lighter px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            How We Work
          </h2>
          <p className="text-lg text-synapse-gray max-w-3xl mx-auto">
            Our streamlined process ensures you get the right candidates quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="group border border-gray-100 shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-3 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80 group-hover:opacity-60 transition-opacity duration-300`}></div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-medium">
                  <div className="text-synapse-primary">
                    {step.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white font-bold text-2xl">{step.number}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-synapse-dark mb-3 group-hover:text-synapse-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-synapse-gray leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Flow Connector */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="flex items-center gap-8">
            {[1, 2, 3].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-16 h-0.5 bg-gradient-to-r from-synapse-light to-synapse-primary opacity-30"></div>
                <div className="w-2 h-2 bg-synapse-primary rounded-full mx-2 animate-pulse" style={{ animationDelay: `${index * 500}ms` }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
