
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Shield, FileSearch } from "lucide-react";

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
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Products
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Cutting-edge AI-powered tools designed to streamline your recruitment process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          <div className="text-center">
            <Button 
              className="btn-primary text-lg py-4 px-8"
              onClick={() => window.location.href = "mailto:info@synapseint.com"}
            >
              Request Demo
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Products;
