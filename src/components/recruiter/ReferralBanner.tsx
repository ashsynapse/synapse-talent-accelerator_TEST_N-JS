
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const ReferralBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Check if banner was previously dismissed
  useEffect(() => {
    const isDismissed = localStorage.getItem('referral-banner-dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('referral-banner-dismissed', 'true');
  };

  const handleCTAClick = () => {
    window.open('https://app.synapserecruiternetwork.com/signup?step=1', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-synapse-primary via-synapse-secondary to-synapse-tertiary text-white relative overflow-hidden animate-fade-in mt-16 md:mt-20 sticky top-0 z-50 shadow-lg">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container-wide relative">
        <div className="flex items-center justify-between py-4 md:py-5 gap-4">
          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-1 leading-tight">
              Refer Top Recruiters. 💸 Earn 5%—That's $10K–15K a Year.
            </h3>
            <p className="text-sm md:text-base text-white/90 leading-relaxed">
              Bring in US/CA recruiters. Get paid every month for 12 months.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={handleCTAClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/50"
            >
              {/* Animated shimmer effect on button */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                {isHovered ? "Invite & Earn" : "Start Earning"}
                <span className="text-lg">→</span>
              </span>
              
              {/* Subtle glow animation behind button */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110 rounded-full"></div>
            </button>
            
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
