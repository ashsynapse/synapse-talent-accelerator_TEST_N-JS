
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, FileSearch } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const products = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI Candidate Sourcing",
    description: "Advanced AI algorithms to identify and source the best candidates from our global talent network",
    href: "/recruitment-tools/ai-candidate-sourcing"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Pre-Employment Screening",
    description: "Comprehensive background checks and pre-employment screening to ensure quality hires",
    href: "/recruitment-tools/pre-employment-screening"
  },
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "AI Resume Screening",
    description: "Intelligent resume parsing and screening to quickly identify qualified candidates",
    href: "/recruitment-tools/ai-resume-screening"
  }
];

const Products = () => {
  return (
    <PageTemplate 
      title="Recruitment Products"
      description="AI-powered recruitment tools and products for modern hiring needs"
    >
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Products
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Cutting-edge AI-powered tools designed to streamline your recruitment process and deliver exceptional results for your hiring needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">{product.title}</h3>
                  <p className="text-synapse-gray mb-6 flex-grow leading-relaxed">{product.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light mt-auto"
                    onClick={() => window.location.href = product.href}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Products;
