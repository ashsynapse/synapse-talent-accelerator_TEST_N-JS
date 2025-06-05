
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Briefcase, 
  Calculator, 
  Hammer, 
  Heart, 
  TrendingUp, 
  Palette, 
  Users, 
  ShoppingCart, 
  Truck 
} from "lucide-react";

const IndustriesRecruiterSection = () => {
  const industries = [
    {
      name: "Technology",
      icon: Code2,
      description: "Software engineers, data scientists, DevOps specialists, and IT professionals",
      roles: "1,200+ open roles"
    },
    {
      name: "Legal",
      icon: Briefcase,
      description: "Attorneys, paralegals, compliance officers, and legal support staff",
      roles: "800+ open roles"
    },
    {
      name: "Accounting",
      icon: Calculator,
      description: "CPAs, financial analysts, bookkeepers, and tax specialists",
      roles: "950+ open roles"
    },
    {
      name: "Industrial",
      icon: Hammer,
      description: "Engineers, project managers, quality control, and operations specialists",
      roles: "600+ open roles"
    },
    {
      name: "Healthcare",
      icon: Heart,
      description: "Medical professionals, administrators, technicians, and support staff",
      roles: "750+ open roles"
    },
    {
      name: "Finance",
      icon: TrendingUp,
      description: "Investment bankers, financial advisors, analysts, and portfolio managers",
      roles: "650+ open roles"
    },
    {
      name: "Creative",
      icon: Palette,
      description: "Designers, content creators, marketing specialists, and brand managers",
      roles: "400+ open roles"
    },
    {
      name: "Human Resources",
      icon: Users,
      description: "HR managers, talent acquisition, benefits specialists, and people operations",
      roles: "350+ open roles"
    },
    {
      name: "Sales & Marketing",
      icon: ShoppingCart,
      description: "Sales representatives, marketing managers, business development, and growth specialists",
      roles: "900+ open roles"
    },
    {
      name: "Supply Chain",
      icon: Truck,
      description: "Logistics coordinators, procurement specialists, and supply chain analysts",
      roles: "300+ open roles"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/30 via-white to-synapse-light/20">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Industries You Can Recruit For
          </h2>
          <p className="text-lg text-synapse-gray">
            Access high-quality job opportunities across diverse industries with competitive commissions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg flex items-center justify-center mr-4">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-synapse-dark">{industry.name}</h3>
                      <p className="text-sm text-synapse-primary font-medium">{industry.roles}</p>
                    </div>
                  </div>
                  <p className="text-synapse-gray leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default IndustriesRecruiterSection;
