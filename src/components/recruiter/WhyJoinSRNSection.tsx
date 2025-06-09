
import React from "react";
import { DollarSign, Bot, FileText, GraduationCap, Briefcase, Globe, TrendingUp, Users, Clock, Shield } from "lucide-react";

const WhyJoinSRNSection = () => {
  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      title: "Earn Up to $30K per placement",
      description: "Industry-leading 50% commission structure with no caps on earnings potential",
      highlight: "Top Earnings"
    },
    {
      icon: <Bot className="h-8 w-8 text-white" />,
      title: "AI-powered sourcing suite",
      description: "Advanced automation tools that accelerate candidate discovery and boost your productivity",
      highlight: "Smart Tools"
    },
    {
      icon: <FileText className="h-8 w-8 text-white" />,
      title: "Proven outreach playbooks",
      description: "Battle-tested templates and strategies for higher response rates and faster conversions",
      highlight: "Success Templates"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: "Expert-led training program",
      description: "Continuous skill development with industry pros to maximize your recruiting effectiveness",
      highlight: "Skill Growth"
    },
    {
      icon: <Briefcase className="h-8 w-8 text-white" />,
      title: "500+ verified roles weekly",
      description: "Fresh opportunities across tech, healthcare, finance, legal, and executive positions",
      highlight: "Live Jobs"
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Global recruiter network",
      description: "Connect with 1,000+ high-performing peers across 25+ countries for collaboration and support",
      highlight: "Community"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/20 via-white to-synapse-light/10 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-synapse-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-synapse-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-synapse-primary/10 to-synapse-secondary/10 px-6 py-3 rounded-full mb-6 border border-synapse-primary/20">
            <TrendingUp className="h-4 w-4 text-synapse-primary" />
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Elite Network Benefits</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6 leading-tight">
            Why Top Recruiters Choose 
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> SRN</span>
          </h2>
          <p className="text-xl text-synapse-gray leading-relaxed">
            Join 1,000+ independent, freelance, and full-time recruiters who've transformed their careers with our premium platform, cutting-edge tools, and unmatched earning potential.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft border border-synapse-light/30 hover:shadow-xl hover:border-synapse-primary/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
              {/* Highlight badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-synapse-primary to-synapse-secondary text-white text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {benefit.highlight}
              </div>
              
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-synapse-primary/5 to-synapse-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-synapse-dark mb-4 group-hover:text-synapse-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-synapse-gray leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced testimonial section */}
        <div className="bg-gradient-to-r from-white via-synapse-lighter/30 to-white rounded-2xl p-8 md:p-12 text-center border-l-4 border-synapse-primary shadow-medium relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-synapse-primary/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">★</span>
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium text-synapse-dark mb-6 italic leading-relaxed">
              "SRN isn't just another recruiting platform—it's your complete business acceleration system. Speed, scale, and freedom combined."
            </blockquote>
            <div className="flex justify-center items-center gap-6 text-sm text-synapse-gray">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-synapse-primary" />
                <span>48hr avg placement</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-synapse-primary" />
                <span>97% satisfaction rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-synapse-primary" />
                <span>1000+ active recruiters</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinSRNSection;
