
import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LogoCarousel = () => {
  const { addToRefs } = useScrollAnimation();
  
  const logos = [
    { name: "TechCorp", url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "InnovateHub", url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center" },
    { name: "DataFlow", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop&crop=center" },
    { name: "CloudTech", url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=120&h=60&fit=crop&crop=center" },
    { name: "NextGen", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop&crop=center" },
    { name: "ScaleUp", url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&h=60&fit=crop&crop=center" },
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
          <div className="flex animate-[scroll_25s_linear_infinite] hover:pause">
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
