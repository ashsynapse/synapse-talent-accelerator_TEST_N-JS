
import React from "react";
import MainHeader from "../components/MainHeader";
import HomeHeroSection from "../components/HomeHeroSection";
import LogoCarousel from "../components/LogoCarousel";
import KPIPerformanceSection from "../components/KPIPerformanceSection";
import WhoWeHireSection from "../components/WhoWeHireSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import ParallaxHiringSection from "../components/ParallaxHiringSection";
import WhatsUnderTheHoodSection from "../components/WhatsUnderTheHoodSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FinalCtaSection from "../components/FinalCtaSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>
        <HomeHeroSection />
        <LogoCarousel />
        <KPIPerformanceSection />
        <WhoWeHireSection />
        <HowWeWorkSection />
        <ParallaxHiringSection />
        <WhatsUnderTheHoodSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
