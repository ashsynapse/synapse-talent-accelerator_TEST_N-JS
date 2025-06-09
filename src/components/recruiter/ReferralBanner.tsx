
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
    <div className="bg-gradient-to-r from-synapse-primary via-synapse-secondary to-synapse-tertiary text-white relative overflow-hidden fixed top-12 md:top-14 left-0 right-0 z-40 shadow-xl border-b border-white/10">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white rounded-full blur-xl"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="flex items-center justify-between py-3 md:py-4 gap-4">
          {/* Content Section */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-base md:text-lg font-bold mb-0.5 leading-tight">
              💸 Earn 5%—That's $10K–15K a Year.
            </h3>
            <p className="text-xs md:text-sm text-white/90 leading-relaxed">
              Bring in US/CA recruiters. Get paid every month for 12 months.
            </p>
          </div>
          
          {/* CTA Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCTAClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-xs md:text-sm px-4 md:px-6 py-2 md:py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {isHovered ? "Invite & Earn" : "Start Earning"}
                <span className="text-sm">→</span>
              </span>
              
              {/* Refined glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-full"></div>
            </button>
            
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="p-1.5 hover:bg-white/15 rounded-full transition-colors duration-200 flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
