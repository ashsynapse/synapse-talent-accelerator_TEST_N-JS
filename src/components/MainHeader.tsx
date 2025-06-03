
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const MainHeader = () => {
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
    { 
      label: "Recruitment Solutions", 
      href: "/recruitment-solutions",
      submenu: [
        { label: "Passive Recruitment", href: "/recruitment-solutions/passive-recruitment" },
        { label: "Active Recruitment", href: "/recruitment-solutions/active-recruitment" },
        { label: "Executive Search", href: "/recruitment-solutions/executive-search" },
        { label: "Contract Staffing", href: "/recruitment-solutions/contract-staffing" }
      ]
    },
    { 
      label: "Recruitment Tools", 
      href: "/recruitment-tools",
      submenu: [
        { label: "AI Candidate Sourcing", href: "/recruitment-tools/ai-candidate-sourcing" },
        { label: "Automated Screening", href: "/recruitment-tools/automated-screening" },
        { label: "Interview Scheduling", href: "/recruitment-tools/interview-scheduling" },
        { label: "Performance Analytics", href: "/recruitment-tools/performance-analytics" }
      ]
    },
    { 
      label: "Industries", 
      href: "/industries",
      submenu: [
        { label: "IT Recruitment", href: "/industries/IT-recruitment-solutions" },
        { label: "Healthcare Recruitment", href: "/industries/healthcare-recruitment-solutions" },
        { label: "Finance Recruitment", href: "/industries/finance-recruitment-solutions" },
        { label: "Manufacturing", href: "/industries/manufacturing-recruitment-solutions" }
      ]
    },
    { 
      label: "Locations", 
      href: "/locations",
      submenu: [
        { label: "California", href: "/locations/california" },
        { label: "New York", href: "/locations/new-york" },
        { label: "Texas", href: "/locations/texas" },
        { label: "Florida", href: "/locations/florida" }
      ]
    },
    { 
      label: "Resources", 
      href: "/resources",
      submenu: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Whitepapers", href: "/resources/whitepapers" },
        { label: "Webinars", href: "/resources/webinars" }
      ]
    },
    { label: "For Employers", href: "/for-employers" },
    { label: "For Recruiters", href: "/for-recruiters" },
    { 
      label: "Company", 
      href: "/company",
      submenu: [
        { label: "About Us", href: "/company/about" },
        { label: "Careers", href: "/company/careers" },
        { label: "Contact", href: "/company/contact" }
      ]
    }
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-soft py-2"
          : "bg-white/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-wide flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-synapse-primary">
            Synapse
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              <a
                href={item.href}
                className="flex items-center px-3 py-2 text-sm font-medium text-synapse-dark hover:text-synapse-primary transition-colors"
              >
                {item.label}
                {item.submenu && <ChevronDown size={16} className="ml-1" />}
              </a>
              
              {item.submenu && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-medium border border-gray-100 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  {item.submenu.map((subItem) => (
                    <a
                      key={subItem.label}
                      href={subItem.href}
                      className="block px-4 py-2 text-sm text-synapse-dark hover:text-synapse-primary hover:bg-synapse-lighter transition-colors"
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center space-x-3 ml-6">
            <Button
              variant="outline"
              className="border-synapse-primary text-synapse-primary hover:bg-synapse-light"
              onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
            >
              Join as Recruiter
            </Button>
            <Button
              className="btn-primary"
              onClick={() => window.location.href = "mailto:info@synapseint.com"}
            >
              Hire Talent
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-synapse-dark p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-white border-t border-gray-200 shadow-medium">
          <div className="container-wide py-4">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block py-2 text-synapse-dark hover:text-synapse-primary font-medium transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.submenu && (
                    <div className="pl-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-1 text-sm text-synapse-gray hover:text-synapse-primary transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col space-y-3 mt-6 pt-4 border-t border-gray-200">
              <Button
                variant="outline"
                className="border-synapse-primary text-synapse-primary hover:bg-synapse-light w-full"
                onClick={() => {
                  window.open("https://app.synapserecruiternetwork.com/", "_blank");
                  setMobileMenuOpen(false);
                }}
              >
                Join as Recruiter
              </Button>
              <Button
                className="btn-primary w-full"
                onClick={() => {
                  window.location.href = "mailto:info@synapseint.com";
                  setMobileMenuOpen(false);
                }}
              >
                Hire Talent
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
