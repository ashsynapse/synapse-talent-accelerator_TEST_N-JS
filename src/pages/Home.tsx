
import React from "react";
import MainHeader from "../components/MainHeader";
import HeroSection from "../components/HeroSection";
import LogoCarousel from "../components/LogoCarousel";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import KPIPerformanceSection from "../components/KPIPerformanceSection";
import HowWeWorkSection from "../components/HowWeWorkSection";
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
        <WhyChooseUsSection />
        <KPIPerformanceSection />
        <HowWeWorkSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
