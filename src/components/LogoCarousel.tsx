
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LogoCarousel = () => {
  const { addToRefs } = useScrollAnimation();
  
  const logos = [
    { name: "Sermo", url: "/lovable-uploads/01d0c7c8-ccb3-4373-b2aa-1682616d8e1b.png" },
    { name: "Boost Media", url: "/lovable-uploads/7dad1848-c16f-470e-82cb-049fd51234ce.png" },
    { name: "Bread", url: "/lovable-uploads/67a605b0-9587-44b7-b089-651cb314ba5e.png" },
    { name: "Coins.ph", url: "/lovable-uploads/a50812b7-7ab3-48ba-b221-015ea950c671.png" },
    { name: "Conduit", url: "/lovable-uploads/37f14594-ad62-458c-9104-4c5e2290cca5.png" },
    { name: "Livepeer", url: "/lovable-uploads/1158a508-ae52-46da-93f0-8d958af12dbf.png" },
    { name: "Exodus", url: "/lovable-uploads/657ecdd7-703c-4f39-b015-0825e89fcbac.png" },
    { name: "Gojek", url: "/lovable-uploads/327ff1f3-3247-4c56-b852-9253a14b2ac0.png" },
    { name: "IN", url: "/lovable-uploads/d88e9238-084c-4f57-9ef3-d729a3890674.png" },
    { name: "Joy", url: "/lovable-uploads/67bfefa5-8cf4-4d15-9cb9-dcf9a4d5d145.png" },
    { name: "OMsignal", url: "/lovable-uploads/59460ce8-ffec-445c-b563-389e602f8460.png" },
    { name: "Polymath", url: "/lovable-uploads/576277ea-71e0-41dd-85de-89a281cd3e5e.png" },
    { name: "Quandary Peak Research", url: "/lovable-uploads/80275ff1-f6b1-44d0-8ce1-e93117378a3c.png" },
    { name: "RadPad", url: "/lovable-uploads/7e22dca5-c9ca-4f12-ad00-04514d2d25c2.png" },
    { name: "Soshio", url: "/lovable-uploads/0962ef3c-a61b-4179-8057-c1621a2ca200.png" },
    { name: "Telescope", url: "/lovable-uploads/b0354fa4-d158-4bc7-a82b-9ee68d44e7d7.png" },
    { name: "Uniswap", url: "/lovable-uploads/f6649d08-2922-4751-9687-a5d55a57c45b.png" },
  ];

  return (
    <section className="py-6 md:py-10 bg-gradient-to-r from-gray-50/50 via-white to-gray-50/50 border-y border-gray-100/50 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-synapse-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-synapse-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center mb-6 md:mb-8">
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-soft border border-synapse-light/30"
          >
            <div className="w-2 h-2 bg-synapse-primary rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-synapse-primary uppercase tracking-wide">
              Trusted Globally
            </span>
          </div>
          <p 
            ref={addToRefs}
            className="scroll-animate text-lg font-semibold text-synapse-dark"
          >
            Trusted by <span className="text-synapse-primary font-bold">700+</span> companies worldwide
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_5s_linear_infinite] md:animate-[scroll_15s_linear_infinite] hover:pause">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 group"
              >
                <div className="h-16 w-32 bg-white/90 backdrop-blur-sm rounded-xl shadow-soft border border-gray-100/50 flex items-center justify-center group-hover:shadow-medium transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-10 w-28 object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50/80 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50/80 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
