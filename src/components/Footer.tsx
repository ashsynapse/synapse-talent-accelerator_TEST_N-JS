
import React from "react";
import { Linkedin, Twitter, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-synapse-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pb-12">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Synapse</div>
            <p className="mb-6 text-gray-300">
              Global AI-powered talent acquisition platform automating the entire hiring lifecycle — from job intake to offer — with autonomous AI agents for infinite scale.
            </p>
            
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {[
                { label: "Passive AI Sourcing", href: "/recruitment-solutions" },
                { label: "AI Candidate Discovery", href: "/recruitment-solutions" }, 
                { label: "Project Staffing", href: "/recruitment-solutions" },
                { label: "Executive Search", href: "/recruitment-solutions" },
                { label: "Remote Staffing", href: "/recruitment-solutions" },
                { label: "Permanent Placement", href: "/recruitment-solutions" },
                { label: "Contingent Staffing", href: "/recruitment-solutions" },
                { label: "Apprenticeship AI Sourcing", href: "/recruitment-solutions" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                { label: "AI Candidate Sourcing", href: "/recruitment-tools" },
                { label: "Pre-Employment AI Screening", href: "/recruitment-tools" },
                { label: "AI Resume Analysis", href: "/recruitment-tools" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-8">Locations</h4>
            <ul className="space-y-2">
              {[
                { label: "USA", href: "/locations" },
                { label: "Canada", href: "/locations" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Industries</h4>
            <ul className="space-y-2">
              {[
                { label: "Technology", href: "/industries" },
                { label: "Finance", href: "/industries" },
                { label: "Healthcare", href: "/industries" },
                { label: "Legal", href: "/industries" },
                { label: "Manufacturing", href: "/industries" },
                { label: "Sales & Marketing", href: "/industries" },
                { label: "Leadership", href: "/industries" },
                { label: "Operations", href: "/industries" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                { label: "Blogs", href: "/resources/blog" },
                { label: "Case Studies", href: "/resources/case-studies" },
                { label: "Events", href: "/resources/events" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-8">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/company/about" },
                { label: "Team", href: "/company/team" },
                { label: "Recruiters", href: "/recruiters" },
                { label: "Careers", href: "/company/careers" },
                { label: "FAQ", href: "/company/faq" }
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@synapseint.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Synapse International. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/glossary" className="hover:text-white transition-colors">
              Glossary
            </a>
            <a href="/partners" className="hover:text-white transition-colors">
              Partners
            </a>
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="/cookies" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
