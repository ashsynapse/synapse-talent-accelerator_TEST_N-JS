
import React from "react";
import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import LogoCarousel from "../components/LogoCarousel";
import KPIPerformanceSection from "../components/KPIPerformanceSection";
import WhoWeHireSection from "../components/WhoWeHireSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
import WhatsUnderTheHoodSection from "../components/WhatsUnderTheHoodSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FinalCtaSection from "../components/FinalCtaSection";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>
        <HeroSection />
        <LogoCarousel />
        <KPIPerformanceSection />
        <WhoWeHireSection />
        <HowWeWorkSection />
        <WhatsUnderTheHoodSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
