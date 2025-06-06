
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ReferralBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [currentCTAIndex, setCurrentCTAIndex] = useState(0);

  const ctaTexts = ["Start Earning", "Invite & Earn", "Refer Now"];

  // Check if banner was previously dismissed
  useEffect(() => {
    const isDismissed = localStorage.getItem('referral-banner-dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  // Rotate CTA text every 3 seconds
  useEffect(() => {
    if (!isVisible) return;
    
    const interval = setInterval(() => {
      setCurrentCTAIndex((prev) => (prev + 1) % ctaTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isVisible, ctaTexts.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('referral-banner-dismissed', 'true');
  };

  const handleCTAClick = () => {
    window.open('https://app.synapserecruiternetwork.com/signup?step=1', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-synapse-primary to-synapse-secondary text-white relative overflow-hidden animate-fade-in mt-16 md:mt-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-wide relative">
        <div className="flex items-center justify-between py-3 md:py-4">
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center lg:justify-start gap-3">
              <div>
                <h3 className="text-base md:text-lg font-bold mb-1 italic">
                  Earn 5% for 12 Months
                </h3>
                <p className="text-xs md:text-sm text-white/90 leading-relaxed italic">
                  Refer recruiters (US/CA) and earn a share of their earnings for a full year
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={handleCTAClick}
                  className="relative overflow-hidden bg-gradient-to-r from-synapse-primary to-synapse-secondary hover:from-synapse-secondary hover:to-synapse-primary text-white font-semibold text-sm py-3 px-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border-2 border-transparent"
                >
                  {/* Infinite flowing black border animation */}
                  <div className="absolute inset-0 rounded-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black to-transparent opacity-80 animate-infinite-flow rounded-xl"></div>
                  </div>
                  
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  
                  {/* Subtle glow animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-synapse-primary/50 to-synapse-secondary/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  
                  <span className="relative z-10 flex items-center gap-2">
                    {ctaTexts[currentCTAIndex]}
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  </span>
                </button>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200 flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
