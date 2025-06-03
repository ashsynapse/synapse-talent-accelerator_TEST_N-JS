
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LogoCarousel = () => {
  const companies = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=40&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=100&h=40&fit=crop&crop=center" },
    { name: "McKinsey", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=40&fit=crop&crop=center" },
    { name: "Pfizer", logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=100&h=40&fit=crop&crop=center" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&h=40&fit=crop&crop=center" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=100&h=40&fit=crop&crop=center" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=100&h=40&fit=crop&crop=center" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=100&h=40&fit=crop&crop=center" },
  ];

  return (
    <section className="py-16 bg-gray-50 border-y border-gray-100">
      <div className="container-wide">
        <h3 className="text-xl font-semibold text-synapse-dark text-center mb-10">
          Trusted by Leading Companies
        </h3>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {companies.map((company, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center h-16">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-8 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default LogoCarousel;
