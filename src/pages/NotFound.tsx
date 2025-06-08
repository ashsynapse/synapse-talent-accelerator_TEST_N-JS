
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Search, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageTemplate 
      title="Page Not Found"
      description="The page you're looking for doesn't exist. Explore our recruitment solutions and services."
    >
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50 px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Visual */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-synapse-primary mb-4 leading-none">
              404
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-synapse-primary to-synapse-secondary mx-auto rounded-full"></div>
          </div>

          {/* Error Message */}
          <div className="mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-synapse-gray leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let's get you back to exploring our recruitment solutions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              className="bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold text-lg py-6 px-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.location.href = "/"}
            >
              <Home className="w-5 h-5 mr-2" />
              Go Home
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-synapse-primary text-synapse-primary bg-white hover:bg-synapse-light text-lg py-6 px-8 rounded-xl transition-all duration-200 shadow-soft hover:shadow-medium"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 border border-synapse-lighter hover:border-synapse-primary group">
              <Search className="w-8 h-8 text-synapse-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-bold text-synapse-dark mb-2">Recruitment Solutions</h3>
              <p className="text-synapse-gray text-sm mb-3">Explore our AI-powered recruitment services</p>
              <Button 
                variant="ghost" 
                className="text-synapse-primary hover:text-synapse-secondary p-0 h-auto font-semibold"
                onClick={() => window.location.href = "/recruitment-solutions"}
              >
                Learn More →
              </Button>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 border border-synapse-lighter hover:border-synapse-primary group">
              <Search className="w-8 h-8 text-synapse-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-bold text-synapse-dark mb-2">For Recruiters</h3>
              <p className="text-synapse-gray text-sm mb-3">Join our global recruiter network</p>
              <Button 
                variant="ghost" 
                className="text-synapse-primary hover:text-synapse-secondary p-0 h-auto font-semibold"
                onClick={() => window.location.href = "/recruiters"}
              >
                Join Now →
              </Button>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 border border-synapse-lighter hover:border-synapse-primary group">
              <Search className="w-8 h-8 text-synapse-primary mb-3 group-hover:scale-110 transition-transform duration-200" />
              <h3 className="font-bold text-synapse-dark mb-2">Industries</h3>
              <p className="text-synapse-gray text-sm mb-3">Discover our industry expertise</p>
              <Button 
                variant="ghost" 
                className="text-synapse-primary hover:text-synapse-secondary p-0 h-auto font-semibold"
                onClick={() => window.location.href = "/industries"}
              >
                Explore →
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default NotFound;
