
import React, { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { X } from "lucide-react";

const ReferralPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Check if popup was already shown in this session
    const hasShown = sessionStorage.getItem('referral-popup-shown');
    
    if (!hasShown) {
      // Show popup after 2 seconds delay
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('referral-popup-shown', 'true');
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTAClick = () => {
    window.open('https://app.synapserecruiternetwork.com/signup?step=1', '_blank');
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogOverlay className="bg-black/60 backdrop-blur-sm" />
      <DialogContent className="max-w-lg mx-auto p-0 bg-transparent border-0 shadow-none [&>button]:hidden">
        <div className="relative bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary rounded-2xl overflow-hidden shadow-2xl">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="absolute top-4 right-8 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-8 left-4 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Custom Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200 group"
            aria-label="Close popup"
          >
            <X className="h-5 w-5 text-white group-hover:scale-110 transition-transform duration-200" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-8 text-center text-white">
            {/* Header */}
            <div className="mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                Refer Top Recruiters. 💸 <br />
                <span className="text-synapse-light">Earn 5%—That's Up To $10K–15K a Year.</span>
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Bring in US/CA recruiters. Get paid every month for 12 months.
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-synapse-light">5%</div>
                <div className="text-sm text-white/80">Commission</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-synapse-light">12</div>
                <div className="text-sm text-white/80">Months</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-synapse-light">Up To $15K</div>
                <div className="text-sm text-white/80">Per Year</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={handleCTAClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative group w-full bg-white hover:bg-white/90 text-synapse-primary font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
            >
              {/* Shimmer effect contained within button */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-synapse-primary/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isHovered ? "Invite & Earn" : "Start Earning"}
                <span className="text-xl transition-transform duration-200 group-hover:translate-x-1">→</span>
              </span>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-white/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 scale-110 rounded-xl"></div>
            </button>

            {/* Trust indicators */}
            <div className="mt-6 flex justify-center items-center gap-4 text-sm text-white/70">
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-synapse-light rounded-full"></div>
                Instant approval
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-synapse-light rounded-full"></div>
                No fees
              </span>
              <span className="flex items-center gap-1">
                <div className="w-2 h-2 bg-synapse-light rounded-full"></div>
                Monthly payouts
              </span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReferralPopup;
