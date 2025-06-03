
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LogoCarousel = () => {
  const companies = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=150&h=50&fit=crop&crop=center&q=80" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=150&h=50&fit=crop&crop=center&q=80" },
    { name: "McKinsey", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=50&fit=crop&crop=center&q=80" },
    { name: "Pfizer", logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=150&h=50&fit=crop&crop=center&q=80" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=150&h=50&fit=crop&crop=center&q=80" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=50&fit=crop&crop=center&q=80" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=150&h=50&fit=crop&crop=center&q=80" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=150&h=50&fit=crop&crop=center&q=80" },
  ];

  // Triple the companies array to create truly seamless looping
  const tripleCompanies = [...companies, ...companies, ...companies];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-100">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark text-center mb-8">
          Trusted by Leading Companies
        </h2>
        
        <div className="w-full max-w-6xl mx-auto overflow-hidden">
          <div className="flex animate-scroll-left">
            {tripleCompanies.map((company, index) => (
              <div key={`${company.name}-${index}`} className="flex-shrink-0 w-48 mx-4">
                <div className="flex items-center justify-center h-16 bg-white rounded-lg border border-gray-100 hover:shadow-sm transition-shadow duration-300 p-4">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-10 w-auto max-w-full object-contain"
                    style={{ 
                      filter: 'brightness(1) contrast(1.1)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
          
          .animate-scroll-left {
            animation: scroll-left 24s linear infinite;
            width: max-content;
          }
        `
      }} />
    </section>
  );
};

export default LogoCarousel;
