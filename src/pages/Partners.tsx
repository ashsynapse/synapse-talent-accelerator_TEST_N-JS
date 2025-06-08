
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles } from "lucide-react";

const techPartners = [
  {
    name: "Apollo",
    logo: "/lovable-uploads/50bda3cf-d5f9-4108-80a3-1463404614f1.png",
    description: "Apollo.io is the leading B2B sales intelligence and engagement platform, trusted by over 160,000 companies and more than one million users globally."
  },
  {
    name: "Top Echelon",
    logo: "/lovable-uploads/a34c31f9-4ee0-4675-94d8-2d2e676b8536.png",
    description: "Top Echelon is an applicant tracking and recruiting software designed to help businesses streamline their hiring process."
  },
  {
    name: "ZoomInfo",
    logo: "/lovable-uploads/28965736-5cf7-4e1e-bc4e-62767ac5c500.png",
    description: "ZoomInfo is how business goes to market (GTM). Powered by real-time data and insights, our unified engagement platform helps sales and marketing teams find, acquire, and grow customers."
  },
  {
    name: "Multiplier",
    logo: "/lovable-uploads/ca7321d2-36a2-4c51-8900-af1afc5a6963.png",
    description: "The World's Leading Global Human Platform, Multiplier simplifies global employment. Powered by advanced technology and local expertise, our platform enables businesses to hire, onboard, and manage employees across the world seamlessly."
  }
];

const toolboxCategories = [
  "SRN Recruiter's Toolbox",
  "Human Resources",
  "Finance & Accounting",
  "Marketing Development",
  "E-commerce"
];

const Partners = () => {
  return (
    <PageTemplate 
      title="Our Technology Partners"
      description="We collaborate with industry-leading technology platforms to deliver exceptional recruitment solutions"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Our Technology Partners
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              We collaborate with industry-leading technology platforms to deliver exceptional recruitment solutions
            </p>
          </div>
        </div>
      </section>

      {/* Tech Partners Section */}
      <section className="py-16 bg-synapse-lighter/20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {toolboxCategories.map((category, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white rounded-full shadow-soft border border-synapse-light/30 text-synapse-primary text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techPartners.map((partner, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                  <div className="w-full mb-6 flex justify-center items-center h-32 bg-white rounded-lg p-4">
                    <img 
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-synapse-dark mb-3">{partner.name}</h3>
                    <p className="text-sm text-synapse-gray">{partner.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-wide text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Ready to Partner with Us?</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Join Our Partner Network
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Ready to explore partnership opportunities? Let's discuss how we can grow together and create innovative recruitment solutions.
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-6 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Become a Partner
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Partners;
