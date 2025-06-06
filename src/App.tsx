
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Home from "./pages/Home";
import RecruitmentSolutions from "./pages/RecruitmentSolutions";
import Industries from "./pages/Industries";
import Products from "./pages/Products";
import Recruiters from "./pages/Recruiters";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import NotFound from "./pages/NotFound";

// Resources Pages
import Blog from "./pages/resources/Blog";
import CaseStudies from "./pages/resources/CaseStudies";
import Events from "./pages/resources/Events";

// Company Pages
import About from "./pages/company/About";
import Team from "./pages/company/Team";
import Careers from "./pages/company/Careers";
import FAQ from "./pages/company/FAQ";

// Blog Post Pages
import CandidateEngagement from "./pages/blog/CandidateEngagement";
import ChatGPTQuality from "./pages/blog/ChatGPTQuality";
import ChatGPTFitAnalysis from "./pages/blog/ChatGPTFitAnalysis";
import GoogleXrayBoolean from "./pages/blog/GoogleXrayBoolean";
import SRNWebApp from "./pages/blog/SRNWebApp";
import StrategicSourcing from "./pages/blog/StrategicSourcing";
import LinkedInOptimization from "./pages/blog/LinkedInOptimization";
import ReferralPlatforms from "./pages/blog/ReferralPlatforms";
import AIRecruitment2025 from "./pages/blog/AIRecruitment2025";
import OutsourcedDevelopmentTeam from "./pages/blog/OutsourcedDevelopmentTeam";
import RecruitmentTrends2025 from "./pages/blog/RecruitmentTrends2025";
import TalentAcquisitionStrategies from "./pages/blog/TalentAcquisitionStrategies";
import EmployerBranding from "./pages/blog/EmployerBranding";
import RetentionSuccessionPlanning from "./pages/blog/RetentionSuccessionPlanning";
import GlobalHiringTrends2025 from "./pages/blog/GlobalHiringTrends2025";
import ExpertHiringTips from "./pages/blog/ExpertHiringTips";
import FutureOfRecruiting from "./pages/blog/FutureOfRecruiting";

// Additional Pages
import Glossary from "./pages/Glossary";
import Partners from "./pages/Partners";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";

// Create QueryClient with proper configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Home />} />
            <Route path="/recruitment-solutions" element={<RecruitmentSolutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/recruitment-tools" element={<Products />} />
            <Route path="/recruiters" element={<Recruiters />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
            
            {/* Resources Routes - Direct URLs */}
            <Route path="/blogs" element={<Blog />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/events" element={<Events />} />
            
            {/* Individual Blog Post Routes */}
            <Route path="/blogs/candidate-engagement" element={<CandidateEngagement />} />
            <Route path="/blogs/chatgpt-quality-submissions" element={<ChatGPTQuality />} />
            <Route path="/blogs/chatgpt-candidate-fit-analysis" element={<ChatGPTFitAnalysis />} />
            <Route path="/blogs/google-xray-boolean-sourcing" element={<GoogleXrayBoolean />} />
            <Route path="/blogs/srn-web-app-beta" element={<SRNWebApp />} />
            <Route path="/blogs/strategic-talent-sourcing" element={<StrategicSourcing />} />
            <Route path="/blogs/linkedin-optimization" element={<LinkedInOptimization />} />
            <Route path="/blogs/referral-based-platforms" element={<ReferralPlatforms />} />
            <Route path="/blogs/ai-recruitment-2025" element={<AIRecruitment2025 />} />
            
            {/* Company Routes - Direct URLs */}
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/faq" element={<FAQ />} />
            
            {/* Legacy Resources Routes (for backward compatibility) */}
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/resources/case-studies" element={<CaseStudies />} />
            <Route path="/resources/events" element={<Events />} />
            
            {/* Legacy Company Routes (for backward compatibility) */}
            <Route path="/company/about" element={<About />} />
            <Route path="/company/team" element={<Team />} />
            <Route path="/company/careers" element={<Careers />} />
            <Route path="/company/contact" element={<Contact />} />
            <Route path="/company/faq" element={<FAQ />} />
            
            {/* Additional Pages */}
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            
            {/* Placeholder routes for future implementation */}
            <Route path="/resources" element={<div>Resources - Coming Soon</div>} />
            <Route path="/for-employers" element={<div>For Employers - Coming Soon</div>} />
            <Route path="/for-recruiters" element={<div>For Recruiters - Coming Soon</div>} />
            <Route path="/company" element={<div>Company - Coming Soon</div>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
