
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  TrendingUp, 
  Settings, 
  Users, 
  DollarSign,
  Calculator,
  Scale,
  Factory,
  Sparkles
} from "lucide-react";

const WhoWeHireSection = () => {
  const { addToRefs } = useScrollAnimation();

  const industries = [
    {
      title: "Information Technology",
      description: "Software engineers, data scientists, AI specialists, and tech professionals",
      icon: <Code2 className="h-8 w-8 text-white" />
    },
    {
      title: "Digital Marketing",
      description: "Digital marketing professionals, SEO specialists, content creators",
      icon: <TrendingUp className="h-8 w-8 text-white" />
    },
    {
      title: "Engineering",
      description: "Engineering professionals across mechanical, electrical, civil disciplines",
      icon: <Settings className="h-8 w-8 text-white" />
    },
    {
      title: "Human Resources (HR)",
      description: "HR professionals, talent acquisition specialists, organizational development",
      icon: <Users className="h-8 w-8 text-white" />
    },
    {
      title: "Sales",
      description: "Sales executives, business development, account management professionals",
      icon: <DollarSign className="h-8 w-8 text-white" />
    },
    {
      title: "Accounting",
      description: "Accounting and finance professionals, CPAs, financial analysts",
      icon: <Calculator className="h-8 w-8 text-white" />
    },
    {
      title: "Legal",
      description: "Legal professionals specializing in corporate law, litigation, compliance",
      icon: <Scale className="h-8 w-8 text-white" />
    },
    {
      title: "Manufacturing",
      description: "Manufacturing professionals, operations, supply chain management",
      icon: <Factory className="h-8 w-8 text-white" />
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20 relative overflow-hidden" id="who-we-hire">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-synapse-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-synapse-secondary rounded-full blur-3xl"></div>
      </div>

      <div className="container-wide relative">
        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30"
          >
            <Sparkles className="h-4 w-4 text-synapse-primary animate-pulse" />
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Global Reach</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight"
          >
            Industries We Transform
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> with AI Hiring</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            From Fortune 500 enterprises to fast-growing startups, our AI agents deliver top talent across every major industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {industries.map((industry, index) => (
            <Card 
              key={industry.title}
              ref={addToRefs}
              className="scroll-animate border-none shadow-soft hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group overflow-hidden bg-white/90 backdrop-blur-sm"
            >
              <CardContent className="p-8 relative">
                <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-2xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-synapse-dark mb-3 group-hover:text-synapse-primary transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-synapse-gray leading-relaxed group-hover:text-synapse-dark transition-colors duration-300">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHireSection;
