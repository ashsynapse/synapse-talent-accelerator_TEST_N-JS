
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const PromoStickyBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Check if banner was previously dismissed for this session
  useEffect(() => {
    const isDismissed = sessionStorage.getItem('promo-banner-dismissed');
    if (isDismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('promo-banner-dismissed', 'true');
  };

  const handleCTAClick = () => {
    window.open('https://app.synapserecruiternetwork.com/signup?step=1', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed top-16 md:top-20 left-0 right-0 z-50 bg-gradient-to-r from-synapse-primary via-synapse-secondary to-synapse-tertiary text-white shadow-xl animate-fade-in">
      {/* Subtle animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-2 left-1/4 w-20 h-20 bg-white rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1 right-1/3 w-16 h-16 bg-white rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
          
          {/* CTA and Close Section */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <button
              onClick={handleCTAClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-synapse-dark font-bold text-sm md:text-base px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-full"></div>
              
              <span className="relative z-10 flex items-center gap-2">
                {isHovered ? "Invite & Earn" : "Start Earning"}
                <span className="text-lg transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/50 to-yellow-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110 rounded-full"></div>
            </button>
            
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200 flex-shrink-0 group"
              aria-label="Close banner"
            >
              <X className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
    </div>
  );
};

export default PromoStickyBanner;
