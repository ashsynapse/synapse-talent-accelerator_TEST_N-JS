
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Brain, Search, UserCheck, Calendar, CheckCircle } from "lucide-react";

const ParallaxHiringSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const steps = [
    {
      id: 1,
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "AI Agent Analyzes Your Job Description",
      subtitle: "Intelligent parsing of skills, requirements, and cultural fit criteria"
    },
    {
      id: 2,
      icon: <Search className="h-8 w-8 text-white" />,
      title: "Agent-Led Global Sourcing",
      subtitle: "Real-time candidate identification across global talent pools"
    },
    {
      id: 3,
      icon: <UserCheck className="h-8 w-8 text-white" />,
      title: "Autonomous Screening & Qualification",
      subtitle: "No human filtering required - AI handles all qualification processes"
    },
    {
      id: 4,
      icon: <Calendar className="h-8 w-8 text-white" />,
      title: "Smart Outreach and Interview Scheduling",
      subtitle: "24/7 agent operation with personalized candidate engagement"
    },
    {
      id: 5,
      icon: <CheckCircle className="h-8 w-8 text-white" />,
      title: "AI-Powered Offer Management",
      subtitle: "Final delivery of fully vetted, interview-ready candidates"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      const visibleTop = Math.max(0, -sectionRect.top);
      const visibleBottom = Math.min(sectionHeight, viewportHeight - sectionRect.top);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visiblePercentage = visibleHeight / viewportHeight;

      // Show steps based on scroll progress
      const newVisibleSteps: number[] = [];
      steps.forEach((step, index) => {
        const stepThreshold = (index + 1) / steps.length * 0.8; // Show each step at different scroll positions
        if (visiblePercentage > stepThreshold) {
          newVisibleSteps.push(step.id);
        }
      });

      setVisibleSteps(newVisibleSteps);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="tech-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1" fill="%23473bbd" opacity="0.1"/><path d="M5,0 L5,10 M0,5 L10,5" stroke="%23473bbd" stroke-width="0.5" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23tech-pattern)"/></svg>')`,
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-synapse-dark/90 via-synapse-primary/80 to-synapse-secondary/90"></div>
      
      <div className="container-wide relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Sticky content on left */}
          <div className="lg:sticky lg:top-1/2 lg:-translate-y-1/2">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Fully Autonomous Hiring,
              <span className="bg-gradient-to-r from-synapse-light to-white bg-clip-text text-transparent"> Explained</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 leading-relaxed">
              Experience the future of recruitment with our AI-first platform that handles every step of the hiring process.
            </p>
            
            <Button 
              className="bg-gradient-to-r from-synapse-light to-white text-synapse-dark hover:from-white hover:to-synapse-light font-semibold text-lg py-6 px-10 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open("/contact", "_self")}
            >
              Experience AI Hiring Live – Book a Demo
            </Button>
          </div>

          {/* Steps on right with parallax effect */}
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`transform transition-all duration-1000 ease-out ${
                  visibleSteps.includes(step.id)
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-16 opacity-0'
                }`}
                style={{
                  transitionDelay: visibleSteps.includes(step.id) ? `${index * 200}ms` : '0ms'
                }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-br from-synapse-light to-white rounded-xl p-4 group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-synapse-light transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-white/80 leading-relaxed text-lg">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accessibility: Disable parallax for reduced motion */}
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          section {
            background-attachment: scroll !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ParallaxHiringSection;
