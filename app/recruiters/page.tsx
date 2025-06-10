"use client";

import { useEffect } from "react";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import RecruiterHeroSection from "@/components/recruiter/RecruiterHeroSection";
import RecruiterTestimonialsSection from "@/components/recruiter/RecruiterTestimonialsSection";
import HowItWorksRecruiterSection from "@/components/recruiter/HowItWorksRecruiterSection";
import WhyJoinSRNSection from "@/components/recruiter/WhyJoinSRNSection";
import IndustriesRecruiterSection from "@/components/recruiter/IndustriesRecruiterSection";
import RecruiterFinalCTASection from "@/components/recruiter/RecruiterFinalCTASection";
import RecruiterKPISection from "@/components/recruiter/RecruiterKPISection";
import ReferralBanner from "@/components/recruiter/ReferralBanner";

export default function RecruitersPage() {
  // Override the header to show only the recruiter style
  useEffect(() => {
    // Add a class to body to indicate this is the recruiters page
    document.body.classList.add('recruiters-page');
    
    return () => {
      // Clean up by removing the class when navigating away
      document.body.classList.remove('recruiters-page');
    };
  }, []);

  return (
    <div className="min-h-screen">
      <MainHeader />
      <ReferralBanner />
      <div className="min-h-screen pt-24">
        <RecruiterHeroSection />
        <RecruiterKPISection />
        <HowItWorksRecruiterSection />
        <WhyJoinSRNSection />
        <IndustriesRecruiterSection />
        <RecruiterTestimonialsSection />
        <RecruiterFinalCTASection />
      </div>
      <Footer />
    </div>
  );
}