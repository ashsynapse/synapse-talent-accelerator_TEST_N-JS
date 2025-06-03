
import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import KeyMetricsSection from "../components/KeyMetricsSection";
import IndustryRolesSection from "../components/IndustryRolesSection";
import PlatformFeaturesSection from "../components/PlatformFeaturesSection";
import FinalCtaSection from "../components/FinalCtaSection";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <KeyMetricsSection />
        <IndustryRolesSection />
        <PlatformFeaturesSection />
        <FinalCtaSection />
      </main>
    </div>
  );
};

export default Home;
