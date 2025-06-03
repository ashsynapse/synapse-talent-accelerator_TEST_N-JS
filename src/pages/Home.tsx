
import React from "react";
import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import KeyMetricsSection from "../components/KeyMetricsSection";
import LogoCarousel from "../components/LogoCarousel";
import IndustryRolesSection from "../components/IndustryRolesSection";
import PlatformFeaturesSection from "../components/PlatformFeaturesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FinalCtaSection from "../components/FinalCtaSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>
        <HeroSection />
        <KeyMetricsSection />
        <LogoCarousel />
        <IndustryRolesSection />
        <PlatformFeaturesSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
