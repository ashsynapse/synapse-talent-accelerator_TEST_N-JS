
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import HowItWorksSection from "../components/HowItWorksSection";
import IndustriesSection from "../components/IndustriesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import FaqSection from "../components/FaqSection";
import DemoFormSection from "../components/DemoFormSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <IndustriesSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <FaqSection />
        <DemoFormSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
