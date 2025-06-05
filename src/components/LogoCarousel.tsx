
import React from "react";

const LogoCarousel = () => {
  const logos = [
    { name: "TechCorp", url: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center" },
    { name: "InnovateHub", url: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=60&fit=crop&crop=center" },
    { name: "DataFlow", url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&h=60&fit=crop&crop=center" },
    { name: "CloudTech", url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=120&h=60&fit=crop&crop=center" },
    { name: "NextGen", url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&h=60&fit=crop&crop=center" },
    { name: "ScaleUp", url: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=120&h=60&fit=crop&crop=center" },
  ];

  return (
    <section className="py-12 bg-gray-50/50 border-y border-gray-100">
      <div className="container-wide">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-synapse-gray uppercase tracking-wide">
            Trusted by 700+ companies worldwide
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_20s_linear_infinite] hover:pause">
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 group"
              >
                <div className="h-12 w-24 bg-white rounded-lg shadow-soft border border-gray-100 flex items-center justify-center group-hover:shadow-medium transition-all duration-300 group-hover:scale-105">
                  <img
                    src={logo.url}
                    alt={logo.name}
                    className="h-8 w-20 object-contain opacity-60 group-hover:opacity-90 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;
