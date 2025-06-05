
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Brain, Users, CheckCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HowWeWorkSection = () => {
  const { addToRefs } = useScrollAnimation();

  const steps = [
    {
      number: "01",
      title: "Submit Your Requirements",
      description: "Post your hard-to-fill positions with exact requirements. We connect you with specialized recruiters who match your industry and role needs.",
      icon: <FileText className="h-7 w-7" />,
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-primary to-synapse-secondary",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      number: "02", 
      title: "AI-Powered Sourcing",
      description: "Our AI technology identifies and matches the best candidates from global talent pools, ensuring precision and speed in the initial screening process.",
      icon: <Brain className="h-7 w-7" />,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-secondary to-synapse-tertiary",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500"
    },
    {
      number: "03",
      title: "Expert Recruiter Touch", 
      description: "Experienced recruiters leverage their networks for targeted outreach. Quality-focused approach ensures only the best candidates reach you.",
      icon: <Users className="h-7 w-7" />,
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-tertiary to-synapse-primary",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-500"
    },
    {
      number: "04",
      title: "Interview & Hire",
      description: "Receive detailed screening notes, LinkedIn profiles, and resumes. Manage your interview process seamlessly and hire the best candidates.",
      icon: <CheckCircle className="h-7 w-7" />,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop&crop=center",
      color: "from-synapse-primary to-synapse-light",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500"
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-synapse-light/40 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-synapse-secondary/20 rounded-full blur-xl"></div>
      
      <div className="container-wide relative">
        <div className="text-center mb-20">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-synapse-lighter/50 px-6 py-3 rounded-full mb-6 border border-synapse-light/30"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Our Process</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight"
          >
            How We
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> Work</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray max-w-4xl mx-auto leading-relaxed"
          >
            Our streamlined process ensures you get the right candidates quickly and efficiently through our proven methodology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card 
                ref={addToRefs}
                className="scroll-animate group border border-gray-100/50 shadow-soft hover:shadow-xl transition-all duration-700 hover:-translate-y-4 overflow-hidden bg-white/90 backdrop-blur-sm"
              >
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-80 group-hover:opacity-60 transition-opacity duration-500`}></div>
                  
                  {/* Icon container */}
                  <div className="absolute top-6 left-6">
                    <div className={`${step.iconBg} rounded-xl p-3 shadow-medium backdrop-blur-sm group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div className="absolute bottom-6 left-6">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                      <span className="text-white font-bold text-2xl">{step.number}</span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-synapse-dark mb-4 group-hover:text-synapse-primary transition-colors duration-300 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-synapse-gray leading-relaxed group-hover:text-synapse-dark transition-colors duration-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Arrow connector for larger screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="bg-white rounded-full p-2 shadow-medium border border-synapse-light/30">
                    <ArrowRight className="h-4 w-4 text-synapse-primary" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
