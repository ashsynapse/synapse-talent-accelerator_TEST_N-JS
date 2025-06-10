
import React from "react";
import { Button } from "@/components/ui/button";

const RecruiterHeader = () => {
  const handleLogin = () => {
    window.open('https://app.synapserecruiternetwork.com/login', '_blank');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-30">
      <div className="container-wide">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/67a605b0-9587-44b7-b089-651cb314ba5e.png" 
              alt="Synapse Logo" 
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/industries" className="text-synapse-dark hover:text-synapse-primary transition-colors">
              Industries
            </a>
            <a href="/products" className="text-synapse-dark hover:text-synapse-primary transition-colors">
              Products
            </a>
            <a href="/resources/blog" className="text-synapse-dark hover:text-synapse-primary transition-colors">
              Resources
            </a>
            <a href="/company/about" className="text-synapse-dark hover:text-synapse-primary transition-colors">
              Company
            </a>
            <a href="/contact" className="text-synapse-dark hover:text-synapse-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Login Button */}
          <div className="flex items-center">
            <Button
              onClick={handleLogin}
              className="bg-black hover:bg-gray-800 text-white font-medium px-6 py-2 rounded-lg transition-all duration-200"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RecruiterHeader;
