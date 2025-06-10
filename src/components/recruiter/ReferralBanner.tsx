
import React, { useState, useEffect } from "react";
import { X, Megaphone } from "lucide-react";

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
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('referralBannerDismissed'));
  };

  const handleCTAClick = () => {
    window.open('https://app.synapserecruiternetwork.com/signup?step=1', '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary text-white relative overflow-hidden fixed top-0 left-0 right-0 z-50 shadow-xl border-b border-white/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>
      
      <div className="container-wide relative">
        <div className="flex items-center justify-between py-1.5 gap-4">
          {/* Content Section with Icon */}
          <div className="flex items-center flex-1 text-center md:text-left max-w-xl">
            <div className="mr-2 flex-shrink-0">
              <Megaphone className="h-4 w-4 md:h-5 md:w-5 text-white/90" />
            </div>
            <div>
              <h3 className="text-xs md:text-sm font-bold mb-0 leading-tight">
                💸 Earn 5%—That's $10K–15K a Year.
              </h3>
              <p className="text-xs md:text-xs text-white/90 leading-relaxed">
                Bring in US/CA recruiters. Get paid every month for 12 months.
              </p>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleCTAClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group bg-white/15 hover:bg-white/25 backdrop-blur-md text-white font-semibold text-xs px-3 py-1 md:py-1.5 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1">
                {isHovered ? "Invite & Earn" : "Start Earning"}
                <span className="text-xs">→</span>
              </span>
            </button>
            
            {/* Close Button */}
            <button
              onClick={handleDismiss}
              className="p-1 hover:bg-white/15 rounded-full transition-colors duration-200 flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
