
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const LogoCarousel = () => {
  const companies = [
    { name: "Google", logo: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=120&h=50&fit=crop&crop=center" },
    { name: "Microsoft", logo: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=120&h=50&fit=crop&crop=center" },
    { name: "McKinsey", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=50&fit=crop&crop=center" },
    { name: "Pfizer", logo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=50&fit=crop&crop=center" },
    { name: "Amazon", logo: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=120&h=50&fit=crop&crop=center" },
    { name: "Tesla", logo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=120&h=50&fit=crop&crop=center" },
    { name: "Apple", logo: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=120&h=50&fit=crop&crop=center" },
    { name: "Meta", logo: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=120&h=50&fit=crop&crop=center" },
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <div className="container-wide">
        <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark text-center mb-12">
          Trusted by Leading Companies
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {companies.map((company, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="flex items-center justify-center h-20 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-10 w-auto max-w-[100px] object-contain filter brightness-100"
                    style={{ 
                      objectFit: 'contain',
                      objectPosition: 'center'
                    }}
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
