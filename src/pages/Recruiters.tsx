
import React from "react";
import PageTemplate from "../components/PageTemplate";
import RecruiterHeroSection from "../components/recruiter/RecruiterHeroSection";
import RecruiterTestimonialsSection from "../components/recruiter/RecruiterTestimonialsSection";
import HowItWorksRecruiterSection from "../components/recruiter/HowItWorksRecruiterSection";
import WhyJoinSRNSection from "../components/recruiter/WhyJoinSRNSection";
import IndustriesRecruiterSection from "../components/recruiter/IndustriesRecruiterSection";
import RecruiterFinalCTASection from "../components/recruiter/RecruiterFinalCTASection";
import KPIPerformanceSection from "../components/KPIPerformanceSection";

const Recruiters = () => {
  return (
    <PageTemplate 
      title="Join Synapse Recruiter Network"
      description="Join a high-performing global recruiter network. Earn top commissions, access live jobs, and work on your schedule with SRN."
    >
      <div className="min-h-screen">
        <RecruiterHeroSection />
        <KPIPerformanceSection />
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
