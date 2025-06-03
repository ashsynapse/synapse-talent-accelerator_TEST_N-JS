
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
import Recruiters from "./pages/Recruiters";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

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
            <Route path="/recruiters" element={<Recruiters />} />
            <Route path="/contact" element={<Contact />} />
            {/* Placeholder routes for future implementation */}
            <Route path="/recruitment-tools" element={<div>Recruitment Tools - Coming Soon</div>} />
            <Route path="/locations" element={<div>Locations - Coming Soon</div>} />
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
