
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="bg-gradient-to-r from-synapse-primary to-synapse-secondary text-white relative overflow-hidden animate-fade-in">
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
                  Refer recruiters (US/Canada preferred) and earn a share of their earnings for a full year
                </p>
              </div>
              
              <div className="flex justify-center md:justify-start">
                <Button
                  onClick={handleCTAClick}
                  className="bg-white text-synapse-primary hover:bg-white/90 hover:text-synapse-primary font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-soft min-w-[120px]"
                >
                  <span className="animate-fade-in" key={currentCTAIndex}>
                    {ctaTexts[currentCTAIndex]}
                  </span>
                </Button>
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
