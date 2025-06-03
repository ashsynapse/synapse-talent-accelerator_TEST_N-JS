
import React from "react";
import PageTemplate from "../components/PageTemplate";
import RecruiterHeroSection from "../components/recruiter/RecruiterHeroSection";
import HowItWorksRecruiterSection from "../components/recruiter/HowItWorksRecruiterSection";
import WhyJoinSRNSection from "../components/recruiter/WhyJoinSRNSection";
import RecruiterTestimonialsSection from "../components/recruiter/RecruiterTestimonialsSection";
import IndustriesRecruiterSection from "../components/recruiter/IndustriesRecruiterSection";
import RecruiterFinalCTASection from "../components/recruiter/RecruiterFinalCTASection";

const Recruiters = () => {
  return (
    <PageTemplate 
      title="Join Synapse Recruiter Network"
      description="Join a high-performing global recruiter network. Earn top commissions, access live jobs, and work on your schedule with SRN."
    >
      <div className="min-h-screen">
        <RecruiterHeroSection />
        <HowItWorksRecruiterSection />
        <WhyJoinSRNSection />
        <RecruiterTestimonialsSection />
        <IndustriesRecruiterSection />
        <RecruiterFinalCTASection />
      </div>
    </PageTemplate>
  );
};

export default Recruiters;
