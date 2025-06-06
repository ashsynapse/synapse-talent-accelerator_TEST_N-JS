
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight, CheckCircle, Zap, Target, BarChart } from "lucide-react";

const AICandidateSourcing = () => {
  const features = [
    "Advanced AI algorithms for candidate identification",
    "Natural language processing for skill matching",
    "Predictive analytics for candidate success",
    "Automated candidate ranking and scoring"
  ];

  return (
    <PageTemplate 
      title="AI Candidate Sourcing | Intelligent Talent Discovery"
      description="Advanced AI algorithms to identify and source the best candidates from our global talent network using machine learning and predictive analytics."
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              AI Candidate Sourcing
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Revolutionary AI-powered candidate sourcing that identifies, analyzes, and ranks the best talent from our global network using advanced machine learning algorithms.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">AI-Powered Intelligence</h2>
              <p className="text-synapse-gray mb-8">
                Our AI candidate sourcing platform leverages machine learning, natural language processing, and predictive analytics to find candidates who not only match your requirements but are likely to succeed in your organization.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-synapse-primary mt-1 flex-shrink-0" />
                    <span className="text-synapse-gray">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Brain, title: "Smart Matching", desc: "AI-powered skill and culture fit analysis" },
                { icon: Zap, title: "Real-time Processing", desc: "Instant candidate identification and ranking" },
                { icon: Target, title: "Precision Targeting", desc: "Highly accurate candidate recommendations" },
                { icon: BarChart, title: "Success Prediction", desc: "Predictive analytics for hire success" }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-soft">
                  <item.icon className="w-8 h-8 text-synapse-primary mb-4" />
                  <h3 className="font-semibold text-synapse-dark mb-2">{item.title}</h3>
                  <p className="text-sm text-synapse-gray">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              className="btn-primary text-lg py-4 px-8"
              onClick={() => window.location.href = "/contact"}
            >
              Experience AI Sourcing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default AICandidateSourcing;
