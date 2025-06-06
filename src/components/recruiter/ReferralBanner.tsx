
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
        <div className="flex items-center justify-between py-4 md:py-6">
          <div className="flex-1 text-center md:text-left">
            <div className="flex flex-col md:flex-row md:items-center md:justify-center lg:justify-start gap-4">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  Earn 5% for 12 Months
                </h3>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  Refer recruiters (US/CA) and earn a share of their earnings for a full year
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <button
                  onClick={handleCTAClick}
                  className="relative overflow-hidden bg-white text-synapse-primary font-bold px-8 py-3 border-2 border-white/30 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  style={{
                    clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                  }}
                >
                  {/* Blinking background effect with synapse gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-synapse-primary to-synapse-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300" 
                       style={{ animation: 'pulse 3s ease-in-out infinite' }}></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                  
                  <span className="relative z-10 animate-fade-in" key={currentCTAIndex}>
                    {ctaTexts[currentCTAIndex]}
                  </span>
                  
                  {/* Blinking border with synapse colors */}
                  <div className="absolute inset-0 border-2 border-synapse-tertiary opacity-0" 
                       style={{
                         clipPath: 'polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)',
                         animation: 'pulse 4s ease-in-out infinite'
                       }}></div>
                </button>
              </div>
            </div>
          </div>
          
          <button
            onClick={handleDismiss}
            className="ml-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-200 flex-shrink-0"
            aria-label="Close banner"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
