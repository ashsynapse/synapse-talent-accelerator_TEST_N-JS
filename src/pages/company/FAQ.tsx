
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const generalFAQs = [
  {
    question: "What makes Synapse International different from other recruitment agencies?",
    answer: "We combine cutting-edge AI technology with expert human recruiters to provide faster, more accurate matches. Our AI-powered platform screens thousands of candidates in minutes, while our experienced recruiters ensure cultural fit and provide personalized service throughout the entire process."
  },
  {
    question: "How does your AI-powered recruitment process work?",
    answer: "Our AI system analyzes job requirements, candidate profiles, skills, experience, and cultural preferences to identify the best matches. It continuously learns from successful placements to improve accuracy. However, all final decisions involve human oversight to ensure the perfect fit for both candidates and clients."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve multiple industries including Information Technology, Digital Marketing, Engineering, Human Resources, Sales, Accounting, Legal, and Manufacturing. Our recruiters have deep expertise in their respective sectors and understand industry-specific requirements."
  },
  {
    question: "Do you handle both permanent and temporary staffing?",
    answer: "Yes, we offer comprehensive staffing solutions including permanent placements, contingent staffing, project-based roles, executive search, and remote staffing. We can adapt our services to meet your specific hiring needs and timeline."
  },
  {
    question: "What geographical regions do you serve?",
    answer: "We operate globally with a strong presence in the USA, Canada, and expanding into other markets. Our remote staffing capabilities allow us to source talent worldwide while our local expertise ensures compliance with regional employment laws."
  }
];

const clientFAQs = [
  {
    question: "How much do your recruitment services cost?",
    answer: "Our pricing varies based on the type of service, role level, and complexity. We offer competitive rates with transparent pricing models. Contact us for a customized quote based on your specific requirements. We also offer volume discounts for multiple positions."
  },
  {
    question: "What is your typical time-to-hire?",
    answer: "Our AI-powered process significantly reduces time-to-hire. On average, we can present qualified candidates within 48-72 hours and complete the hiring process 40-60% faster than traditional methods. Timeline varies based on role complexity and specific requirements."
  },
  {
    question: "Do you offer any guarantees on your placements?",
    answer: "Yes, we stand behind our work with replacement guarantees. If a placed candidate doesn't work out within the guarantee period (typically 90 days for most roles), we'll find a replacement at no additional cost. Terms vary by service type and role level."
  },
  {
    question: "How do you ensure candidate quality?",
    answer: "We use a multi-step vetting process combining AI screening, skills assessments, background checks, reference verification, and thorough interviews. Our recruiters also assess cultural fit and career motivations to ensure long-term success."
  },
  {
    question: "Can you handle high-volume recruitment projects?",
    answer: "Absolutely. Our AI platform is designed to scale efficiently for high-volume needs. We've successfully managed projects requiring 100+ hires within tight timelines while maintaining quality standards. We assign dedicated project teams for large-scale initiatives."
  }
];

const candidateFAQs = [
  {
    question: "Is there any cost for candidates to use your services?",
    answer: "No, our services are completely free for job candidates. We are paid by the hiring companies, so there are never any fees or charges for candidates seeking employment opportunities through our platform."
  },
  {
    question: "How do I apply for positions through Synapse?",
    answer: "You can submit your resume through our website, apply to specific job postings, or be contacted by our recruiters if your profile matches client requirements. Our AI system will match your profile with relevant opportunities automatically."
  },
  {
    question: "Will I work directly with a human recruiter?",
    answer: "Yes, while our AI handles initial matching and screening, you'll work directly with an experienced human recruiter who will guide you through the process, prepare you for interviews, and advocate for you with the client."
  },
  {
    question: "How do you protect my personal information?",
    answer: "We take data privacy seriously and comply with all relevant data protection regulations including GDPR. Your information is secure and only shared with potential employers with your explicit consent. You can update your privacy preferences at any time."
  },
  {
    question: "Do you provide interview coaching and career advice?",
    answer: "Yes, our recruiters provide interview preparation, resume optimization, salary negotiation guidance, and career counseling. We're invested in your success and offer ongoing support throughout your job search and beyond."
  }
];

const FAQ = () => {
  return (
    <PageTemplate 
      title="Frequently Asked Questions"
      description="Find answers to common questions about our recruitment services, processes, and policies"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Get answers to the most common questions about our AI-powered recruitment services
            </p>
          </div>

          {/* General FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-synapse-dark mb-8">General Information</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`general-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-synapse-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-synapse-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Client FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-synapse-dark mb-8">For Clients & Employers</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {clientFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`client-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-synapse-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-synapse-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Candidate FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-synapse-dark mb-8">For Job Seekers</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {candidateFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`candidate-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-synapse-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-synapse-gray">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Contact Section */}
          <div className="text-center bg-synapse-lighter/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-synapse-dark mb-4">
              Still Have Questions?
            </h2>
            <p className="text-synapse-gray mb-6 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help with any questions about our recruitment services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary"
                onClick={() => window.location.href = "/contact"}
              >
                Contact Our Team
              </Button>
              <Button 
                variant="outline"
                className="border-synapse-primary text-synapse-primary hover:bg-synapse-light"
                onClick={() => window.location.href = "mailto:info@synapseint.com"}
              >
                Send Email
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default FAQ;
