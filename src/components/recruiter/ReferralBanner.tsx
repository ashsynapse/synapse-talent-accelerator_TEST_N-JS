
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const ReferralBanner = () => {
  const [isDismissed, setIsDismissed] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const buttonTexts = ["Start Earning", "Invite & Earn", "Refer Now"];

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('referral-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
      return;
    }

    // Show banner with animation
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
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
      className={`w-full bg-gradient-to-r from-synapse-primary to-synapse-secondary text-white shadow-soft transition-all duration-500 ease-out ${
        isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform -translate-y-full'
      }`}
    >
      <div className="container-wide py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <div className="text-center lg:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-1">
                Earn 5% for 12 Months
              </h3>
              <p className="text-sm sm:text-base text-white/90">
                Refer recruiters (US/Canada preferred) and earn a share of their earnings for a full year.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-4">
            <Button
              onClick={handleSignUp}
              className="bg-white text-synapse-primary hover:bg-white/90 font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg whitespace-nowrap"
            >
              <span className="transition-all duration-300">
                {buttonTexts[currentTextIndex]}
              </span>
            </Button>
            
            <button
              onClick={handleDismiss}
              className="text-white/80 hover:text-white transition-colors duration-200 p-1 rounded-full hover:bg-white/10"
              aria-label="Dismiss banner"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
