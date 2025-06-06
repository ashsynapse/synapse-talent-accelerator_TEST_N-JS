
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Target, Users, TrendingUp, CheckCircle, ArrowRight } from "lucide-react";

const PassiveRecruitment = () => {
  const benefits = [
    "Access to 85% of professionals not actively job searching",
    "Higher quality candidates with proven track records",
    "Reduced competition for top talent",
    "AI-powered candidate identification and engagement"
  ];

  const process = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Identify Targets",
      description: "AI algorithms scan professional networks to identify potential candidates"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Analyze Fit",
      description: "Advanced matching technology assesses candidate compatibility"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Strategic Outreach",
      description: "Personalized engagement strategies to attract passive talent"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Nurture Relationships",
      description: "Long-term relationship building for future opportunities"
    }
  ];

  return (
    <PageTemplate 
      title="Passive Recruitment Services | AI-Powered Talent Sourcing"
      description="Unlock hidden talent with our passive recruitment services. Access top professionals who aren't actively job searching through AI-powered sourcing strategies."
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Passive Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Tap into the hidden talent market with AI-powered passive recruitment strategies that identify and engage top professionals who aren't actively job searching.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Why Passive Recruitment?</h2>
              <p className="text-synapse-gray mb-8">
                The best talent is often already employed and not actively looking for new opportunities. Our passive recruitment approach uses advanced AI algorithms to identify, assess, and engage these high-quality candidates.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary mt-1 flex-shrink-0" />
                    <span className="text-synapse-gray">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-synapse-lighter/20 to-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-synapse-dark mb-6">Our Process</h3>
              <div className="space-y-6">
                {process.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-synapse-primary rounded-lg flex items-center justify-center text-white flex-shrink-0">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-synapse-dark mb-2">{step.title}</h4>
                      <p className="text-sm text-synapse-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="btn-primary text-lg py-4 px-8"
              onClick={() => window.location.href = "/contact"}
            >
              Start Your Passive Recruitment Campaign
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default PassiveRecruitment;
