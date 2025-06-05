
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
            <p className="mb-4 text-gray-300">
              Global AI-powered recruitment platform automating the entire hiring lifecycle — from job intake to offer — blending artificial intelligence with expert recruiters.
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
                "Passive Recruitment",
                "Candidate Sourcing", 
                "Project Staffing",
                "Executive Search",
                "Remote Staffing",
                "Permanent Staffing",
                "Contingent Staffing",
                "Apprenticeship Recruitment"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {[
                "AI Candidate Sourcing",
                "Pre-Employment Screening",
                "AI Resume Screening"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-8">Locations</h4>
            <ul className="space-y-2">
              {["USA", "Canada"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Industries</h4>
            <ul className="space-y-2">
              {[
                "Information Technology",
                "Digital Marketing",
                "Engineering",
                "Human Resources (HR)",
                "Sales",
                "Accounting",
                "Legal",
                "Manufacturing"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              {[
                "Blogs",
                "Case Studies",
                "Events"
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-lg font-bold mb-4 mt-8">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Team", "Careers", "FAQ"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:info@synapseint.com"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Synapse International. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Glossary
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Partners
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
