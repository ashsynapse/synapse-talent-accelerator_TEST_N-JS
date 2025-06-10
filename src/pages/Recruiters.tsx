
import React, { useEffect } from "react";
import PageTemplate from "../components/PageTemplate";
import RecruiterHeroSection from "../components/recruiter/RecruiterHeroSection";
import RecruiterTestimonialsSection from "../components/recruiter/RecruiterTestimonialsSection";
import HowItWorksRecruiterSection from "../components/recruiter/HowItWorksRecruiterSection";
import WhyJoinSRNSection from "../components/recruiter/WhyJoinSRNSection";
import IndustriesRecruiterSection from "../components/recruiter/IndustriesRecruiterSection";
import RecruiterFinalCTASection from "../components/recruiter/RecruiterFinalCTASection";
import RecruiterKPISection from "../components/recruiter/RecruiterKPISection";
import ReferralBanner from "../components/recruiter/ReferralBanner";

const Recruiters = () => {
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
    <PageTemplate 
      title="Join Synapse Recruiter Network"
      description="Join a high-performing global recruiter network. Earn top commissions, access live jobs, and work on your schedule with SRN."
    >
      <ReferralBanner />
      <div className="min-h-screen pt-32">
        <RecruiterHeroSection />
        <RecruiterKPISection />
        <HowItWorksRecruiterSection />
        <WhyJoinSRNSection />
        <IndustriesRecruiterSection />
        <RecruiterTestimonialsSection />
        <RecruiterFinalCTASection />
      </div>
    </PageTemplate>
  );
};

export default Recruiters;
