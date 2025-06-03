
import React from "react";
import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import KeyMetricsSection from "../components/KeyMetricsSection";
import IndustryRolesSection from "../components/IndustryRolesSection";
import PlatformFeaturesSection from "../components/PlatformFeaturesSection";
import FinalCtaSection from "../components/FinalCtaSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>
        <HeroSection />
        <KeyMetricsSection />
        <IndustryRolesSection />
        <PlatformFeaturesSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
