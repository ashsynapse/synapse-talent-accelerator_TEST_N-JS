
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-synapse-dark text-white pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12">
          <div className="col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Synapse</div>
            <p className="mb-4 text-gray-300">
              Tech-enabled recruitment platform delivering pre-vetted candidates within 72 hours through our distributed recruiter network.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons */}
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="h-10 w-10 bg-synapse-primary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-40 transition-all"
                >
                  <span className="text-sm">{social.charAt(0)}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog", "Contact"].map((item) => (
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
            <h4 className="text-lg font-bold mb-4">Solutions</h4>
            <ul className="space-y-2">
              {[
                "For Employers",
                "For Recruiters",
                "Enterprise",
                "Case Studies",
                "Industries",
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
                "Help Center",
                "Documentation",
                "API",
                "Partner Program",
                "Privacy Policy",
                "Terms of Service",
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
        </div>

        <div className="pt-8 border-t border-gray-700 text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} Synapse Recruitment. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
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
