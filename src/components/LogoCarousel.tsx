import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const LogoCarousel = () => {
  const { addToRefs } = useScrollAnimation();
  
  const logos = [
    { name: "Gojek", url: "/lovable-uploads/29f21b01-cfc6-4c26-bb90-f837348e71ef.png" },
    { name: "Kittyhawk", url: "/lovable-uploads/18dec220-806a-48c7-974a-567316b5a5d1.png" },
    { name: "Polymath", url: "/lovable-uploads/21128a83-239b-4d30-a27d-01864fbc6c0d.png" },
    { name: "Hopper", url: "/lovable-uploads/9be38972-6880-4958-9cca-e862e4788490.png" },
    { name: "RapidSOS", url: "/lovable-uploads/1d3b4ec5-8f7e-45e9-91bf-1aaceca0bf7f.png" },
    { name: "1VALET", url: "/lovable-uploads/c345666f-59dd-42c0-ace2-f70f70089ad1.png" },
    { name: "Genesis Robotics", url: "/lovable-uploads/70303944-1203-42b8-99c1-30966107d1a3.png" },
    { name: "Super Evil Megacorp", url: "/lovable-uploads/0dad57a5-555e-4a3e-9921-c12ff5f0e992.png" },
    { name: "Trade.io", url: "/lovable-uploads/6fa14ac5-8ed8-49e8-bb05-c922c98b3c17.png" },
    { name: "Chatmeter", url: "/lovable-uploads/6a132739-185a-4dc5-837c-0d600ffcf107.png" },
    { name: "Yewno", url: "/lovable-uploads/3fd30706-9eaf-4e07-ac29-298a44c01b60.png" },
    { name: "Teachable", url: "/lovable-uploads/34745bc4-c725-48c6-9a94-a88cab580bb9.png" },
    { name: "SevenBridges", url: "/lovable-uploads/55cda898-2dc0-4382-8a3d-f5a1081569a6.png" },
    { name: "Sermo", url: "/lovable-uploads/e080f95f-2a12-4f17-8950-6b62d84fdc85.png" },
    { name: "Ritual", url: "/lovable-uploads/65001503-5a2b-4a4c-83b2-e70a1b32fff3.png" },
    { name: "Perlin", url: "/lovable-uploads/d6885201-c9d2-4d1c-85b8-10befc9fab84.png" },
    { name: "NZXT", url: "/lovable-uploads/2acfb629-aaf9-43a7-bcc1-9c3294cc0795.png" },
    { name: "MGID", url: "/lovable-uploads/8d50f08d-5437-4c0e-8e72-62454b17fa30.png" },
    { name: "ATIMI", url: "/lovable-uploads/ed93fba4-685c-42f6-8643-f7d0d6757108.png" },
    { name: "JWPlayer", url: "/lovable-uploads/159fe41a-df61-4206-9757-eccd74a15eea.png" },
    { name: "Instaclustr", url: "/lovable-uploads/ccb518a0-d32e-45c8-9e60-1dae3c457072.png" },
    { name: "Insolar", url: "/lovable-uploads/3f9ccf1d-6013-4479-959f-0da96842fbea.png" },
    { name: "Hinge", url: "/lovable-uploads/46d10a5b-9740-4525-9f16-12f840a316ac.png" },
    { name: "FutureFit AI", url: "/lovable-uploads/e5a29429-20f4-419e-87e9-64c0af3ce760.png" },
    { name: "Disco", url: "/lovable-uploads/f0f8a312-711c-4987-9a14-09bbc5102054.png" },
    { name: "AppNeta", url: "/lovable-uploads/ad1bc01d-aa92-41ae-9dab-e1603e3c2ba8.png" },
    { name: "Uniswap", url: "/lovable-uploads/d4608462-4dfa-4a38-af5e-f309a4a0f413.png" },
    { name: "Coins.ph", url: "/lovable-uploads/d857b7da-a7cd-4922-90c4-8dc11773da4e.png" },
    { name: "Clever", url: "/lovable-uploads/188e51e7-6b89-4cc0-9bc1-911088b00335.png" },
    { name: "Carousell", url: "/lovable-uploads/6f52d6e1-bb7e-4d24-b4dc-98e1c0bf9481.png" },
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
          <div className="flex animate-[scroll_10s_linear_infinite] md:animate-[scroll_15s_linear_infinite] hover:pause">
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
