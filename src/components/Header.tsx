
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Contact", href: "mailto:info@synapseint.com" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png" 
              alt="Synapse Logo" 
              className="h-8 w-8"
            />
            <span className="text-2xl font-bold text-synapse-primary">
              Synapse
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-synapse-dark hover:text-synapse-primary font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="outline"
            className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white transition-colors"
            onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
          >
            Login
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-synapse-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white absolute w-full py-5 shadow-medium">
          <div className="container-wide flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-synapse-dark hover:text-synapse-primary font-medium transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="outline"
              className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white transition-colors w-full mt-4"
              onClick={() => {
                window.open("https://app.synapserecruiternetwork.com/", "_blank");
                setMobileMenuOpen(false);
              }}
            >
              Login
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
