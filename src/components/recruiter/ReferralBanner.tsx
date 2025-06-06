
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ReferralBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Start visible

  const buttonTexts = ["Start Earning", "Invite & Earn", "Refer Now"];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('referral-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show banner immediately, then add animation
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  useEffect(() => {
    // Rotate button text every 3 seconds
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % buttonTexts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [buttonTexts.length]);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
      localStorage.setItem('referral-banner-dismissed', 'true');
    }, 300);
  };

  const handleSignUp = () => {
    window.open("https://app.synapserecruiternetwork.com/signup?step=1", "_blank");
  };

  if (isDismissed) return null;

  return (
    <div 
      className={`w-full bg-gradient-to-r from-synapse-primary via-synapse-secondary to-synapse-tertiary text-white relative overflow-hidden transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-2'
      }`}
    >
      {/* Background pattern for modern look */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      
      <div className="container-wide py-4 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center sm:text-left">
            <div className="space-y-1">
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Earn 5% for 12 Months
              </h3>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                Refer recruiters (US/Canada preferred) and earn a share of their earnings for a full year.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <Button
              onClick={handleSignUp}
              className="bg-white text-synapse-primary hover:bg-white/95 font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border-0 whitespace-nowrap"
            >
              <span className="transition-all duration-300 font-medium">
                {buttonTexts[currentTextIndex]}
              </span>
            </Button>
            
            <button
              onClick={handleDismiss}
              className="text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-full hover:bg-white/10 flex-shrink-0"
              aria-label="Dismiss banner"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
