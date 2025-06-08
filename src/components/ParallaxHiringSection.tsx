
import React, { useEffect, useRef, useState } from "react";
import { Brain, Search, UserCheck, Calendar, CheckCircle } from "lucide-react";

const ParallaxHiringSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const steps = [
    {
      id: 1,
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "AI Job Analysis",
      subtitle: "Intelligent parsing of skills and requirements"
    },
    {
      id: 2,
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Global Sourcing",
      subtitle: "Real-time candidate identification"
    },
    {
      id: 3,
      icon: <UserCheck className="h-6 w-6 text-white" />,
      title: "Auto Screening",
      subtitle: "AI handles all qualification processes"
    },
    {
      id: 4,
      icon: <Calendar className="h-6 w-6 text-white" />,
      title: "Smart Outreach",
      subtitle: "24/7 personalized engagement"
    },
    {
      id: 5,
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: "Offer Management",
      subtitle: "Fully vetted candidates delivered"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const backgroundStyle = {
    backgroundImage: `
      radial-gradient(circle at 25% 25%, rgba(71, 59, 189, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 75% 75%, rgba(126, 105, 171, 0.08) 0%, transparent 50%),
      linear-gradient(45deg, transparent 48%, rgba(71, 59, 189, 0.02) 49%, rgba(71, 59, 189, 0.02) 51%, transparent 52%),
      linear-gradient(-45deg, transparent 48%, rgba(126, 105, 171, 0.02) 49%, rgba(126, 105, 171, 0.02) 51%, transparent 52%)
    `,
    backgroundSize: '400px 400px, 300px 300px, 50px 50px, 50px 50px',
    backgroundPosition: '0% 0%, 100% 100%, 0% 0%, 0% 0%',
    transform: `translateY(${scrollProgress * 30}px)`,
  };

  return (
    <section 
      ref={containerRef}
      className="py-16 relative overflow-hidden"
      style={backgroundStyle}
    >
      {/* Tech pattern overlay */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="circuit" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="4" cy="4" r="1.5" fill="%23473bbd" opacity="0.1"/><circle cx="16" cy="16" r="1" fill="%237E69AB" opacity="0.08"/><path d="M4,4 L16,4 L16,16" stroke="%23473bbd" stroke-width="0.5" opacity="0.06" fill="none"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>')`,
          backgroundSize: '40px 40px',
          transform: `translateX(${scrollProgress * -20}px)`,
        }}
      />

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-synapse-primary/5 to-transparent"></div>
      
      <div className="container-wide relative z-10">
        {/* Horizontal scrolling cards */}
        <div className="overflow-x-auto pb-6">
          <div className="flex gap-6 min-w-max px-4">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="flex-shrink-0 w-80 transform transition-all duration-700 ease-out hover:scale-105"
                style={{
                  transform: `translateY(${Math.sin((scrollProgress + index * 0.2) * Math.PI) * 10}px)`,
                  opacity: Math.max(0.7, 1 - Math.abs(scrollProgress - (index * 0.2))),
                }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
                  {/* Card background pattern */}
                  <div 
                    className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><circle cx="25" cy="25" r="20" stroke="%23473bbd" stroke-width="0.5" fill="none" opacity="0.3"/><circle cx="25" cy="25" r="10" stroke="%237E69AB" stroke-width="0.3" fill="none" opacity="0.2"/></svg>')`,
                      backgroundSize: '100px 100px',
                      backgroundPosition: 'center',
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-synapse-primary opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                        {step.id.toString().padStart(2, '0')}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-synapse-dark mb-2 group-hover:text-synapse-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-synapse-gray leading-relaxed">
                      {step.subtitle}
                    </p>
                  </div>

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-synapse-light/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 text-synapse-gray text-sm">
            <div className="w-4 h-4 border-2 border-synapse-primary/30 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-synapse-primary rounded-full animate-pulse"></div>
            </div>
            Scroll horizontally to explore our AI process
          </div>
        </div>
      </div>

      {/* CSS for accessibility */}
      <style>
        {`
          @media (prefers-reduced-motion: reduce) {
            .transform {
              transform: none !important;
            }
            .animate-pulse {
              animation: none !important;
            }
          }
          
          /* Custom scrollbar for horizontal scroll */
          .overflow-x-auto::-webkit-scrollbar {
            height: 6px;
          }
          .overflow-x-auto::-webkit-scrollbar-track {
            background: rgba(71, 59, 189, 0.1);
            border-radius: 3px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb {
            background: linear-gradient(90deg, #473bbd, #7E69AB);
            border-radius: 3px;
          }
          .overflow-x-auto::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(90deg, #7E69AB, #473bbd);
          }
        `}
      </style>
    </section>
  );
};

export default ParallaxHiringSection;
