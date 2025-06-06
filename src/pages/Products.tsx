
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, FileSearch } from "lucide-react";
import FinalCtaSection from "../components/FinalCtaSection";

const products = [
  {
    icon: <Brain size={32} />,
    title: "AI Candidate Sourcing",
    description: "Advanced AI algorithms to identify and source the best candidates from our global talent network",
    href: "/recruitment-tools/ai-candidate-sourcing"
  },
  {
    icon: <Shield size={32} />,
    title: "Pre-Employment Screening",
    description: "Comprehensive background checks and pre-employment screening to ensure quality hires",
    href: "/recruitment-tools/pre-employment-screening"
  },
  {
    icon: <FileSearch size={32} />,
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              Recruitment Products
            </h1>
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              Cutting-edge AI-powered tools designed to streamline your recruitment process and deliver exceptional results for your hiring needs.
            </p>
          </div>
        </div>
      </section>

      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-colors duration-300 group">
                <CardContent className="p-6">
                  <div className="text-synapse-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">{product.title}</h3>
                  <p className="text-synapse-gray mb-4">{product.description}</p>
                  <Button 
                    variant="outline" 
                    className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light"
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
