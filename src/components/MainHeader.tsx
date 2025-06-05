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
      label: "Solutions", 
      href: "/recruitment-solutions",
      submenu: [
        { label: "Passive Recruitment", href: "/recruitment-solutions/passive-recruitment" },
        { label: "Candidate Sourcing", href: "/recruitment-solutions/candidate-sourcing" },
        { label: "Project Staffing", href: "/recruitment-solutions/project-staffing" },
        { label: "Executive Search", href: "/recruitment-solutions/executive-search" },
        { label: "Remote Staffing", href: "/recruitment-solutions/remote-staffing" },
        { label: "Permanent Staffing", href: "/recruitment-solutions/permanent-staffing" },
        { label: "Contingent Staffing", href: "/recruitment-solutions/contingent-staffing" },
        { label: "Apprenticeship Recruitment", href: "/recruitment-solutions/apprenticeship-recruitment" }
      ]
    },
    { 
      label: "Products", 
      href: "/recruitment-tools",
      submenu: [
        { label: "AI Candidate Sourcing", href: "/recruitment-tools/ai-candidate-sourcing" },
        { label: "Pre-Employment Screening", href: "/recruitment-tools/pre-employment-screening" },
        { label: "AI Resume Screening", href: "/recruitment-tools/ai-resume-screening" }
      ]
    },
    { 
      label: "Industries", 
      href: "/industries",
      submenu: [
        { label: "Information Technology", href: "/industries/information-technology" },
        { label: "Digital Marketing", href: "/industries/digital-marketing" },
        { label: "Engineering", href: "/industries/engineering" },
        { label: "Human Resources (HR)", href: "/industries/human-resources" },
        { label: "Sales", href: "/industries/sales" },
        { label: "Accounting", href: "/industries/accounting" },
        { label: "Legal", href: "/industries/legal" },
        { label: "Manufacturing", href: "/industries/manufacturing" }
      ]
    },
    { 
      label: "Locations", 
      href: "/locations",
      submenu: [
        { label: "USA", href: "/locations" },
        { label: "Canada", href: "/locations" }
      ]
    },
    { 
      label: "Resources", 
      href: "/resources",
      submenu: [
        { label: "Blog", href: "/resources/blog" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Webinars", href: "/resources/webinars" }
      ]
    },
    { 
      label: "Company", 
      href: "/company",
      submenu: [
        { label: "About Us", href: "/company/about" },
        { label: "Team", href: "/company/team" },
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
        <nav className="hidden lg:flex items-center space-x-1 ml-12">
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
                <div className="absolute top-full left-0 w-64 bg-white shadow-medium border border-gray-100 rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
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
          
          <div className="flex items-center ml-8">
            <Button
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Book Demo
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
                className="btn-primary w-full"
                onClick={() => {
                  window.location.href = "/contact";
                  setMobileMenuOpen(false);
                }}
              >
                Book Demo
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
