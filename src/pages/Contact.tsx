
import React from "react";
import PageTemplate from "../components/PageTemplate";
import ContactHero from "../components/contact/ContactHero";
import ContactFormSection from "../components/contact/ContactFormSection";
import LogoCarousel from "../components/LogoCarousel";

const Contact = () => {
  return (
    <PageTemplate 
      title="Contact Synapse | AI Recruitment Experts"
      description="Get in touch with Synapse to find top talent fast. Fill out our form or book a demo call with our recruitment experts."
    >
      <ContactHero />
      <ContactFormSection />
      <LogoCarousel />
    </PageTemplate>
  );
};

export default Contact;
