
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Sparkles } from "lucide-react";

const srnFAQs = [
  {
    question: "What is SRN / Synapse?",
    answer: "SRN (Synapse Recruiter Network), also known simply as Synapse, is part of Synapse International — a Global AI-First Recruitment Platform built with an extensive worldwide network of professional recruiters. We combine the power of AI with the human touch to deliver faster, higher-quality hiring solutions for startups and growing companies across the world. On SRN, recruiters collaborate, share client job opportunities, and earn commissions on successful placements — unlocking a new, smarter way to scale talent acquisition globally. Note: SRN and Synapse refer to the same platform and community."
  },
  {
    question: "Can I Post SRN Jobs Online?",
    answer: "⭐ No. Never. SRN jobs must not be posted online. You can, however, share them directly with potential candidates who are a fit for the particular job role."
  },
  {
    question: "Are There Membership Fees?",
    answer: "No. There are no membership fees. SRN earns from placement fees and shares a percentage with recruiters."
  },
  {
    question: "What Are Recruiter Responsibilities?",
    answer: "Candidate Submissions: Recommend top candidates. Client Referrals: Introduce hiring clients to SRN. Compliance & Confidentiality: Follow laws and protect all sensitive data."
  },
  {
    question: "How Are Jobs & Clients Shared?",
    answer: "Jobs are posted in Discord and the SRN Job Board. Candidate tracking is done via the ATS Platform."
  },
  {
    question: "Can I Work with My Own Clients?",
    answer: "Yes, you are allowed to work independently with your own clients while also using SRN's job opportunities."
  },
  {
    question: "How Much Commission Do Recruiters Earn?",
    answer: "⭐ Recruiters earn 50% of the total placement fee. Example: If a role pays $500K and SRN's fee is 25% ($125K), your commission = $62,500."
  },
  {
    question: "When Are Commissions Paid?",
    answer: "Within 30 days after SRN receives the placement fee from the client."
  },
  {
    question: "What if a Candidate Doesn't Complete the Guarantee Period?",
    answer: "Commission payments may be impacted according to specific job terms if the candidate fails to complete the guarantee period."
  },
  {
    question: "How Long Does the Agreement Last?",
    answer: "The agreement lasts indefinitely until terminated by either party with written notice."
  },
  {
    question: "What is the Recruiter Status?",
    answer: "Recruiters are independent contractors, not employees or partners of SRN."
  },
  {
    question: "What Are the Confidentiality Rules?",
    answer: "Use confidential information only for SRN activities. Do not disclose client or candidate details. Protect all sensitive information."
  },
  {
    question: "What Are the Non-Solicitation Rules?",
    answer: "For 1 year after leaving SRN, you must: Not solicit SRN clients. Not recruit SRN employees or members."
  },
  {
    question: "How Do I Receive Commission Payments?",
    answer: "Payments are processed through Deel (which includes Wise for international payments)."
  },
  {
    question: "Why Are Some Company Names Hidden?",
    answer: "For confidentiality reasons. You can share general industry and location details with candidates but not company names unless permitted."
  }
];

const generalFAQs = [
  {
    question: "What makes Synapse International different from other recruitment agencies?",
    answer: "We're an AI-first recruitment platform that focuses exclusively on the top 1% of talent. Unlike traditional agencies, we don't post job boards or chase volume. Our DNA is built around identifying exceptional professionals who aren't actively job hunting but are open to extraordinary opportunities. We combine cutting-edge AI technology with human expertise to deliver faster, more accurate matches."
  },
  {
    question: "How does your AI-powered recruitment process work?",
    answer: "Our AI system analyzes job requirements, candidate profiles, skills, experience, and cultural preferences to identify the best matches from the top 1% of professionals. It continuously learns from successful placements to improve accuracy. However, all final decisions involve human oversight to ensure the perfect fit for both candidates and clients."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We serve multiple industries including Information Technology, Digital Marketing, Engineering, Human Resources, Sales, Accounting, Legal, and Manufacturing. Our recruiters have deep expertise in their respective sectors and understand industry-specific requirements for top-tier talent."
  },
  {
    question: "Do you handle both permanent and temporary staffing?",
    answer: "Yes, we offer comprehensive staffing solutions including permanent placements, contingent staffing, project-based roles, executive search, and remote staffing. We specialize in connecting companies with the most exceptional talent for any engagement type."
  },
  {
    question: "What geographical regions do you serve?",
    answer: "We operate globally with headquarters in Los Angeles, CA, and a network of 1K+ professional recruiters worldwide. Our AI-powered platform and global network allow us to source exceptional talent anywhere while ensuring compliance with regional employment laws."
  }
];

const clientFAQs = [
  {
    question: "How much do your recruitment services cost?",
    answer: "Our pricing varies based on the type of service, role level, and complexity. We offer competitive rates with transparent pricing models focused on quality over quantity. Contact us for a customized quote based on your specific requirements for top 1% talent."
  },
  {
    question: "What is your typical time-to-hire?",
    answer: "Our AI-powered process significantly reduces time-to-hire. We can typically present qualified candidates from the top 1% within 48-72 hours and complete the hiring process 40-60% faster than traditional methods. Timeline varies based on role complexity and specific requirements."
  },
  {
    question: "Do you offer any guarantees on your placements?",
    answer: "Yes, we stand behind our work with replacement guarantees. If a placed candidate doesn't work out within the guarantee period (typically 90 days for most roles), we'll find a replacement at no additional cost. Terms vary by service type and role level."
  },
  {
    question: "How do you ensure candidate quality?",
    answer: "We use a multi-step vetting process combining AI screening, skills assessments, background checks, reference verification, and thorough interviews. Our focus on the top 1% of talent means we only work with professionals who have proven track records of exceptional performance."
  },
  {
    question: "Can you handle high-volume recruitment projects?",
    answer: "While our focus is on quality over quantity, our AI platform can efficiently scale for projects requiring multiple top-tier hires. We've successfully managed projects requiring dozens of exceptional placements while maintaining our high standards for the top 1% of talent."
  }
];

const FAQ = () => {
  return (
    <PageTemplate 
      title="Frequently Asked Questions - Synapse International"
      description="Find answers to common questions about our AI-powered recruitment services, SRN platform, and policies"
    >
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Get answers to the most common questions about our AI-first recruitment platform and SRN community
            </p>
          </div>

          {/* SRN/Synapse FAQs */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-synapse-dark mb-8">SRN (Synapse Recruiter Network)</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {srnFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`srn-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:text-synapse-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-synapse-gray whitespace-pre-line">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-wide text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Synapse Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies who trust us to connect them with the world's most exceptional talent
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default FAQ;
