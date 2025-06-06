
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const glossaryTerms = [
  {
    term: "Applicant Tracking System (ATS)",
    definition: "Software application that enables the electronic handling of recruitment and hiring needs, including managing candidate applications, screening resumes, and tracking hiring progress."
  },
  {
    term: "Boolean Search",
    definition: "A search method that uses operators like AND, OR, and NOT to refine search results when looking for candidates in databases or on platforms like LinkedIn."
  },
  {
    term: "Candidate Experience",
    definition: "The overall perception and feeling a job candidate has about an employer's recruitment process, from initial contact through onboarding."
  },
  {
    term: "Contingent Recruitment",
    definition: "A recruitment model where the recruiter is paid only upon successful placement of a candidate, typically a percentage of the candidate's first-year salary."
  },
  {
    term: "Cultural Fit",
    definition: "The alignment between a candidate's values, beliefs, and behaviors with the company's culture and working environment."
  },
  {
    term: "Employer Branding",
    definition: "The process of promoting a company as the employer of choice to a desired target group, enhancing the company's reputation as a great place to work."
  },
  {
    term: "Executive Search",
    definition: "A specialized recruitment service focused on finding and placing senior-level executives and C-suite positions, often involving headhunting passive candidates."
  },
  {
    term: "Headhunting",
    definition: "The practice of recruiting candidates who are not actively looking for new employment opportunities, typically for senior or specialized positions."
  },
  {
    term: "KPI (Key Performance Indicator)",
    definition: "Measurable values that demonstrate how effectively recruitment goals are being achieved, such as time-to-fill, cost-per-hire, or quality of hire."
  },
  {
    term: "Passive Candidate",
    definition: "A job candidate who is currently employed and not actively seeking new employment but may be open to the right opportunity."
  },
  {
    term: "Retained Search",
    definition: "A recruitment model where the client pays a fee upfront to engage the recruiter's services, typically used for senior-level or specialized positions."
  },
  {
    term: "Sourcing",
    definition: "The process of identifying and engaging potential candidates for current or future job opportunities through various channels and methods."
  },
  {
    term: "Talent Acquisition",
    definition: "A strategic approach to identifying, attracting, and onboarding top talent to efficiently meet dynamic business needs."
  },
  {
    term: "Talent Pipeline",
    definition: "A pool of qualified candidates who have been identified and engaged for future job opportunities within an organization."
  },
  {
    term: "Time-to-Fill",
    definition: "The number of days between when a job requisition is opened and when an offer is accepted by a candidate."
  }
];

// Group glossary terms by first letter
const groupTermsByFirstLetter = (terms) => {
  const grouped = {};
  
  terms.sort((a, b) => a.term.localeCompare(b.term)).forEach(item => {
    const firstLetter = item.term.charAt(0).toUpperCase();
    if (!grouped[firstLetter]) {
      grouped[firstLetter] = [];
    }
    grouped[firstLetter].push(item);
  });
  
  return grouped;
};

const Glossary = () => {
  const groupedTerms = groupTermsByFirstLetter(glossaryTerms);
  const alphabet = Object.keys(groupedTerms).sort();
  
  return (
    <PageTemplate 
      title="Recruitment Glossary"
      description="Comprehensive glossary of recruitment and talent acquisition terms and definitions"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Glossary
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Your comprehensive guide to recruitment and talent acquisition terminology
            </p>
          </div>
          
          {/* Alphabetical index */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {alphabet.map(letter => (
              <a 
                key={letter} 
                href={`#letter-${letter}`}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-synapse-lighter hover:bg-synapse-light text-synapse-primary font-medium transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>

          {/* Glossary terms by letter */}
          <div className="space-y-12 max-w-4xl mx-auto">
            {alphabet.map(letter => (
              <div key={letter} id={`letter-${letter}`} className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-synapse-primary mb-6 border-b border-synapse-lighter pb-2">
                  {letter}
                </h2>
                <div className="grid gap-6">
                  {groupedTerms[letter].map((item, index) => (
                    <Card key={index} className="border hover:border-synapse-primary transition-all duration-300">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl text-synapse-primary">
                          {item.term}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-synapse-gray leading-relaxed">
                          {item.definition}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Glossary;
