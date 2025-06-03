
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

  // Duplicate the companies array to create seamless looping
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-8 bg-gray-50 border-y border-gray-100">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark text-center mb-8">
          Trusted by Leading Companies
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
            slidesToScroll: 1,
            speed: 12,
          }}
          plugins={[
            Autoplay({
              delay: 0,
              jump: false,
              stopOnInteraction: false,
              stopOnMouseEnter: false,
              stopOnLastSnap: false,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent 
            className="-ml-2"
            style={{
              animation: 'scroll-left 12s linear infinite',
            }}
          >
            {duplicatedCompanies.map((company, index) => (
              <CarouselItem key={`${company.name}-${index}`} className="pl-2 basis-1/3 md:basis-1/4 lg:basis-1/6 flex-shrink-0">
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
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default LogoCarousel;
