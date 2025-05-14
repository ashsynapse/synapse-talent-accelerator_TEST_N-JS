
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  const faqs = [
    {
      question: "How long does it typically take to fill a position with Synapse?",
      answer:
        "Our platform delivers the first batch of pre-vetted candidates within 72 hours. The time to hire depends on your interview process, but our clients typically make offers within 2-3 weeks of engagement, which is significantly faster than the industry average of 6+ weeks.",
    },
    {
      question: "How does Synapse pre-vet candidates?",
      answer:
        "Our Synapse Recruiter Network (SRN) consists of specialized recruiters who conduct thorough screenings based on your specific requirements. Candidates are evaluated for technical skills, experience, cultural fit, and motivation. We also perform reference checks and verify work eligibility before presenting candidates to your team.",
    },
    {
      question: "What industries does Synapse specialize in?",
      answer:
        "We have deep expertise in Technology/SaaS, Healthcare, Hospitality, Finance, and Manufacturing. However, our network of specialized recruiters covers many more industries and roles. Contact us to discuss your specific industry needs.",
    },
    {
      question: "What is the pricing model for Synapse's services?",
      answer:
        "We offer flexible pricing models tailored to your hiring needs. This includes success-based fees, subscription models for ongoing hiring, and custom enterprise solutions. Book a demo to receive a personalized quote based on your specific requirements.",
    },
    {
      question: "How does Synapse match the right recruiter to my position?",
      answer:
        "Our AI-powered matching system analyzes your job requirements and matches them with recruiters in our network who have demonstrated success with similar roles and industries. This ensures you work with specialists who understand the nuances of your specific hiring needs.",
    },
    {
      question: "What happens if a hire doesn't work out?",
      answer:
        "We stand behind our placements with a replacement guarantee. If a candidate doesn't meet expectations within the first 90 days, we'll find a replacement at no additional cost. Our 94% retention rate for placements after one year demonstrates our commitment to quality matches.",
    },
  ];

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-synapse-gray">
            Everything you need to know about working with Synapse and our
            recruitment process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-synapse-dark hover:text-synapse-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-synapse-gray">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-synapse-gray mb-4">
            Still have questions? We're here to help.
          </p>
          <a
            href="#"
            className="text-synapse-primary font-medium hover:underline"
          >
            Contact our support team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
