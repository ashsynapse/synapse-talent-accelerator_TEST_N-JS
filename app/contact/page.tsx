import { Metadata } from 'next';
import MainHeader from "@/components/MainHeader";
import ContactHero from "@/components/contact/ContactHero";
import ContactFormSection from "@/components/contact/ContactFormSection";
import StaticLogosGrid from "@/components/StaticLogosGrid";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: 'Contact Synapse | AI Recruitment Experts',
  description: 'Get in touch with Synapse to find top talent fast. Fill out our form or book a demo call with our recruitment experts.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <main>
        <ContactHero />
        <ContactFormSection />
        <StaticLogosGrid />
      </main>
      <Footer />
    </div>
  );
}