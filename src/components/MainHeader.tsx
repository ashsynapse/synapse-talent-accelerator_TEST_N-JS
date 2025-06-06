
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Plus, Minus, 
         Bot, Users, Building2, Search, UserCheck, 
         Briefcase, Code, TrendingUp, Heart, Scale,
         Factory, Calculator, Crown, FileText, 
         Calendar, Phone, Info, HelpCircle } from "lucide-react";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileItem = (itemLabel: string) => {
    setExpandedItems(prev => 
      prev.includes(itemLabel) 
        ? prev.filter(item => item !== itemLabel)
        : [...prev, itemLabel]
    );
  };

  const getIconForSubmenu = (label: string) => {
    const iconMap: { [key: string]: any } = {
      "Passive AI Sourcing": Bot,
      "AI Candidate Discovery": Search,
      "Project Staffing": Users,
      "Executive Search": Crown,
      "Remote Staffing": Building2,
      "Permanent Placement": UserCheck,
      "Contingent Staffing": Briefcase,
      "Apprenticeship AI Sourcing": Bot,
      "AI Candidate Sourcing": Bot,
      "Pre-Employment AI Screening": UserCheck,
      "AI Resume Analysis": FileText,
      "Technology": Code,
      "Finance": TrendingUp,
      "Healthcare": Heart,
      "Legal": Scale,
      "Manufacturing": Factory,
      "Sales & Marketing": Calculator,
      "Leadership": Crown,
      "Operations": Users,
      "Blogs": FileText,
      "Case Studies": FileText,
      "Events": Calendar,
      "About Us": Info,
      "Team": Users,
      "Recruiters": UserCheck,
      "Careers": Briefcase,
      "FAQ": HelpCircle,
      "Contact Us": Phone
    };
    
    return iconMap[label] || FileText;
  };

  const navItems = [
    { 
      label: "Solutions", 
      href: "/recruitment-solutions",
      submenu: [
        { label: "Passive AI Sourcing", href: "/recruitment-solutions/passive-recruitment" },
        { label: "AI Candidate Discovery", href: "/recruitment-solutions/candidate-sourcing" },
        { label: "Project Staffing", href: "/recruitment-solutions/project-staffing" },
        { label: "Executive Search", href: "/recruitment-solutions/executive-search" },
        { label: "Remote Staffing", href: "/recruitment-solutions/remote-staffing" },
        { label: "Permanent Placement", href: "/recruitment-solutions/permanent-staffing" },
        { label: "Contingent Staffing", href: "/recruitment-solutions/contingent-staffing" },
        { label: "Apprenticeship AI Sourcing", href: "/recruitment-solutions/apprenticeship-recruitment" }
      ]
    },
    { 
      label: "Products", 
      href: "/recruitment-tools",
      submenu: [
        { label: "AI Candidate Sourcing", href: "/recruitment-tools/ai-candidate-sourcing" },
        { label: "Pre-Employment AI Screening", href: "/recruitment-tools/pre-employment-screening" },
        { label: "AI Resume Analysis", href: "/recruitment-tools/ai-resume-screening" }
      ]
    },
    { 
      label: "Industries", 
      href: "/industries",
      submenu: [
        { label: "Technology", href: "/industries/technology" },
        { label: "Finance", href: "/industries/finance" },
        { label: "Healthcare", href: "/industries/healthcare" },
        { label: "Legal", href: "/industries/legal" },
        { label: "Manufacturing", href: "/industries/manufacturing" },
        { label: "Sales & Marketing", href: "/industries/sales-marketing" },
        { label: "Leadership", href: "/industries/leadership" },
        { label: "Operations", href: "/industries/operations" }
      ]
    },
    { 
      label: "Resources", 
      href: null,
      submenu: [
        { label: "Blogs", href: "/resources/blog" },
        { label: "Case Studies", href: "/resources/case-studies" },
        { label: "Events", href: "/resources/events" }
      ]
    },
    { 
      label: "Company", 
      href: null,
      submenu: [
        { label: "About Us", href: "/company/about" },
        { label: "Team", href: "/company/team" },
        { label: "Recruiters", href: "/recruiters" },
        { label: "Careers", href: "/company/careers" },
        { label: "FAQ", href: "/company/faq" },
        { label: "Contact Us", href: "/company/contact" }
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
          <a href="/" className="flex items-center space-x-1">
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
        <nav className="hidden lg:flex items-center space-x-1 ml-12">
          {navItems.map((item) => (
            <div key={item.label} className="relative group">
              {item.href ? (
                <a
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-synapse-dark hover:text-synapse-primary transition-colors"
                >
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="ml-1" />}
                </a>
              ) : (
                <span className="flex items-center px-3 py-2 text-sm font-medium text-synapse-dark hover:text-synapse-primary transition-colors cursor-default">
                  {item.label}
                  {item.submenu && <ChevronDown size={16} className="ml-1" />}
                </span>
              )}
              
              {item.submenu && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 pt-2">
                  <div className="bg-gradient-to-br from-white via-synapse-lighter to-synapse-light shadow-medium border border-synapse-light/30 rounded-xl p-6 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4 min-w-[500px]">
                      {item.submenu.map((subItem, index) => {
                        const IconComponent = getIconForSubmenu(subItem.label);
                        return (
                          <a
                            key={subItem.label}
                            href={subItem.href}
                            className="group/item flex items-start p-3 rounded-lg hover:bg-white/80 hover:shadow-soft transition-all duration-200 border border-transparent hover:border-synapse-primary/20"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-synapse-primary to-synapse-secondary flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                              <IconComponent className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-synapse-dark group-hover/item:text-synapse-primary transition-colors text-sm leading-tight">
                                {subItem.label}
                              </h3>
                              <p className="text-xs text-synapse-gray mt-1 opacity-0 group-hover/item:opacity-100 transition-opacity duration-200">
                                {index % 2 === 0 ? "Advanced solutions" : "Professional services"}
                              </p>
                            </div>
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-3 ml-8">
            <Button
              className="btn-primary"
              onClick={() => window.location.href = "/contact"}
            >
              Book Demo
            </Button>
            <Button
              variant="outline"
              className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white transition-colors"
              onClick={() => window.open("https://app.synapserecruiternetwork.com/", "_blank")}
            >
              Login
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
                  <div className="flex items-center justify-between">
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex-1 py-2 text-synapse-dark hover:text-synapse-primary font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="flex-1 py-2 text-synapse-dark font-medium">
                        {item.label}
                      </span>
                    )}
                    {item.submenu && (
                      <button
                        onClick={() => toggleMobileItem(item.label)}
                        className="p-2 text-synapse-dark hover:text-synapse-primary transition-colors"
                      >
                        {expandedItems.includes(item.label) ? (
                          <Minus size={20} />
                        ) : (
                          <Plus size={20} />
                        )}
                      </button>
                    )}
                  </div>
                  {item.submenu && expandedItems.includes(item.label) && (
                    <div className="pl-4 space-y-1 mt-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block py-2 text-sm text-synapse-gray hover:text-synapse-primary transition-colors"
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
              <Button
                variant="outline"
                className="border-synapse-primary text-synapse-primary hover:bg-synapse-primary hover:text-white transition-colors w-full"
                onClick={() => {
                  window.open("https://app.synapserecruiternetwork.com/", "_blank");
                  setMobileMenuOpen(false);
                }}
              >
                Login
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
