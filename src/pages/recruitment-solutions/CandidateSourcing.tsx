
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Target, ArrowRight, CheckCircle, Search, Users, Brain, Globe } from "lucide-react";

const CandidateSourcing = () => {
  const features = [
    "Multi-channel sourcing across 50+ platforms",
    "AI-powered candidate matching algorithms",
    "Real-time market intelligence and insights",
    "Comprehensive candidate screening and vetting"
  ];

  return (
    <PageTemplate 
      title="Candidate Sourcing Services | Global Talent Acquisition"
      description="Comprehensive candidate sourcing strategies to find the perfect match for your roles across multiple channels and platforms."
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Candidate Sourcing
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Comprehensive candidate sourcing strategies that leverage multiple channels, advanced technology, and market intelligence to find the perfect match for your roles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Strategic Sourcing Approach</h2>
              <p className="text-synapse-gray mb-8">
                Our candidate sourcing methodology combines traditional recruitment techniques with cutting-edge AI technology to cast the widest possible net while maintaining quality standards.
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
                { icon: Search, title: "Advanced Search", desc: "Boolean and semantic search capabilities" },
                { icon: Users, title: "Network Mining", desc: "Leverage professional networks and referrals" },
                { icon: Brain, title: "AI Matching", desc: "Machine learning for precise candidate fits" },
                { icon: Globe, title: "Global Reach", desc: "Access to international talent pools" }
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
              Get Started with Candidate Sourcing
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default CandidateSourcing;
