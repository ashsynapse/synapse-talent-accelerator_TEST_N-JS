
import React from "react";
import { DollarSign, Bot, FileText, GraduationCap, Briefcase, Globe } from "lucide-react";

const WhyJoinSRNSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-synapse-primary" />,
      title: "Earn $10K+ per hire",
      description: "Clear 50% commission structure built for serious recruiters"
    },
    {
      icon: <Bot className="h-8 w-8 text-synapse-primary" />,
      title: "AI-powered sourcing tools and automations",
      description: "Accelerate candidate discovery and outreach with tech-first workflows"
    },
    {
      icon: <FileText className="h-8 w-8 text-synapse-primary" />,
      title: "Outreach playbooks and job guides",
      description: "Use proven templates, strategies, and recruiter best practices for higher conversions"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-synapse-primary" />,
      title: "Continuous recruiter enablement",
      description: "Grow your skills with free training and support from industry pros"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-synapse-primary" />,
      title: "Hundreds of verified roles weekly",
      description: "Access active job openings in tech, healthcare, legal, finance, and more"
    },
    {
      icon: <Globe className="h-8 w-8 text-synapse-primary" />,
      title: "Global recruiter community",
      description: "Collaborate across 25+ countries with high-performing peers"
    }
  ];

  return (
    <section className="section-padding bg-synapse-lighter/30">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Why Join SRN?
          </h2>
          <p className="text-lg text-synapse-gray">
            Join 1,000+ independent, freelance, and full-time recruiters building their own recruiting businesses or earning supplemental income with top-paying roles, AI tools, and expert community support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-synapse-lighter p-3 rounded-lg flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-synapse-dark mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-synapse-gray">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 md:p-12 text-center border-l-4 border-synapse-primary shadow-soft">
          <blockquote className="text-xl md:text-2xl font-medium text-synapse-dark mb-6 italic">
            "SRN is built for modern recruiters who want speed, scale, and freedom. No fluff—just tools, jobs, and results."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSRNSection;
