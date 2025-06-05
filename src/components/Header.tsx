
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
    { label: "Contact", href: "#final-cta" },
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
          <a href="#" className="text-2xl font-bold text-synapse-primary">
            Synapse
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
            className="btn-primary ml-4"
            onClick={() => window.location.href = "/contact"}
          >
            Hire Talent
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
              className="btn-primary w-full mt-4"
              onClick={() => {
                window.location.href = "/contact";
                setMobileMenuOpen(false);
              }}
            >
              Hire Talent
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
