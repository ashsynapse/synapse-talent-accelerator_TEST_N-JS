
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Building, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Global Tech Company Scales Engineering Team by 300%",
    client: "Fortune 500 Technology Company",
    industry: "Information Technology",
    challenge: "Rapid expansion required hiring 150+ senior engineers across 5 countries within 6 months",
    solution: "AI-powered candidate sourcing combined with specialized technical recruiters",
    results: {
      timeToHire: "45% reduction",
      candidateQuality: "92% retention rate",
      costSavings: "$2.3M saved"
    },
    duration: "6 months",
    teamSize: "25+ roles filled",
    href: "/resources/case-studies/tech-company-scaling"
  },
  {
    title: "Healthcare Startup Builds C-Suite Leadership Team",
    client: "Series B Healthcare Startup",
    industry: "Healthcare",
    challenge: "Needed to recruit CTO, VP of Sales, and Head of Marketing for rapid market expansion",
    solution: "Executive search with industry-specific expertise and extensive network",
    results: {
      timeToHire: "60 days average",
      candidateQuality: "100% acceptance rate",
      costSavings: "30% below market rate"
    },
    duration: "3 months",
    teamSize: "3 executive roles",
    href: "/resources/case-studies/healthcare-startup-leadership"
  },
  {
    title: "Manufacturing Giant Transforms HR Operations",
    client: "Global Manufacturing Corporation",
    industry: "Manufacturing",
    challenge: "Modernize HR operations and fill 200+ positions across multiple locations",
    solution: "Comprehensive staffing strategy with permanent and contingent solutions",
    results: {
      timeToHire: "50% faster",
      candidateQuality: "95% performance rating",
      costSavings: "$5M operational savings"
    },
    duration: "12 months",
    teamSize: "200+ positions",
    href: "/resources/case-studies/manufacturing-hr-transformation"
  },
  {
    title: "Financial Services Digital Transformation",
    client: "Regional Banking Institution",
    industry: "Financial Services",
    challenge: "Urgent need for digital transformation expertise and cybersecurity professionals",
    solution: "Specialized recruiting for fintech and cybersecurity roles with passive candidate engagement",
    results: {
      timeToHire: "40% improvement",
      candidateQuality: "98% client satisfaction",
      costSavings: "$1.8M saved"
    },
    duration: "8 months",
    teamSize: "45 specialized roles",
    href: "/resources/case-studies/financial-services-digital"
  }
];

const CaseStudies = () => {
  return (
    <PageTemplate 
      title="Case Studies"
      description="Real success stories showcasing how we've helped companies transform their recruitment and build exceptional teams"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Discover how we've helped companies across industries build exceptional teams and achieve their growth objectives
            </p>
          </div>

          {/* Case Studies Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {caseStudies.map((study, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={16} className="text-synapse-primary" />
                      <span className="text-sm text-synapse-gray">{study.industry}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-synapse-dark mb-3 group-hover:text-synapse-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-synapse-gray font-medium">{study.client}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-synapse-dark mb-2">Challenge</h4>
                      <p className="text-synapse-gray text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-synapse-dark mb-2">Solution</h4>
                      <p className="text-synapse-gray text-sm">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="bg-synapse-lighter/50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-synapse-dark mb-3">Key Results</h4>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-synapse-primary" />
                        <span className="text-sm text-synapse-dark">
                          <strong>Time to Hire:</strong> {study.results.timeToHire}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className="text-synapse-primary" />
                        <span className="text-sm text-synapse-dark">
                          <strong>Quality:</strong> {study.results.candidateQuality}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <TrendingUp size={16} className="text-synapse-primary" />
                        <span className="text-sm text-synapse-dark">
                          <strong>Cost Impact:</strong> {study.results.costSavings}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4 text-sm text-synapse-gray">
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        <span>{study.teamSize}</span>
                      </div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light group-hover:bg-synapse-primary group-hover:text-white transition-all"
                    onClick={() => window.location.href = study.href}
                  >
                    Read Full Case Study
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-synapse-gray mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results for your organization
            </p>
            <Button 
              className="btn-primary text-lg py-4 px-8"
              onClick={() => window.location.href = "/contact"}
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default CaseStudies;
