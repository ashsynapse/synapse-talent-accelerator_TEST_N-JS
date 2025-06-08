
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const glossaryTerms = [
  {
    term: "360-Degree Feedback",
    definition: "A performance evaluation method that collects feedback from multiple sources including supervisors, peers, subordinates, and sometimes external sources like customers."
  },
  {
    term: "Active Candidate",
    definition: "A job seeker who is actively searching for new employment opportunities and has taken concrete steps like updating their resume or applying to positions."
  },
  {
    term: "Applicant Tracking System (ATS)",
    definition: "Software application that enables the electronic handling of recruitment and hiring needs, including managing candidate applications, screening resumes, and tracking hiring progress."
  },
  {
    term: "Assessment Center",
    definition: "A comprehensive evaluation method using multiple assessment techniques like simulations, interviews, and tests to evaluate candidates for specific roles."
  },
  {
    term: "Background Check",
    definition: "The process of verifying a candidate's employment history, education, criminal record, and other relevant information before making a hiring decision."
  },
  {
    term: "Behavioral Interview",
    definition: "An interview technique that focuses on past behavior and experiences as indicators of future performance, often using STAR (Situation, Task, Action, Result) methodology."
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
    term: "Candidate Persona",
    definition: "A detailed profile representing the ideal candidate for a specific role, including skills, experience, motivations, and characteristics."
  },
  {
    term: "Competency-Based Interview",
    definition: "An interview approach that focuses on specific skills and competencies required for the role, using structured questions to assess capabilities."
  },
  {
    term: "Contingent Recruitment",
    definition: "A recruitment model where the recruiter is paid only upon successful placement of a candidate, typically a percentage of the candidate's first-year salary."
  },
  {
    term: "Cost-Per-Hire",
    definition: "A key recruitment metric that calculates the total cost of hiring divided by the number of hires, including advertising, recruiter fees, and internal costs."
  },
  {
    term: "Cultural Fit",
    definition: "The alignment between a candidate's values, beliefs, and behaviors with the company's culture and working environment."
  },
  {
    term: "Diversity and Inclusion (D&I)",
    definition: "Organizational efforts to create a workplace that values different backgrounds, perspectives, and experiences while ensuring all employees feel included."
  },
  {
    term: "Employee Referral Program",
    definition: "A structured program that incentivizes current employees to refer qualified candidates for open positions within the organization."
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
    term: "Gig Economy",
    definition: "A labor market characterized by temporary, flexible jobs where independent contractors and freelancers work on short-term engagements."
  },
  {
    term: "Headhunting",
    definition: "The practice of recruiting candidates who are not actively looking for new employment opportunities, typically for senior or specialized positions."
  },
  {
    term: "Human Resources Information System (HRIS)",
    definition: "Software that combines HR processes and information technology to manage employee data, payroll, benefits, and recruitment activities."
  },
  {
    term: "Job Analysis",
    definition: "The systematic process of collecting information about job duties, responsibilities, necessary skills, outcomes, and work environment."
  },
  {
    term: "Job Description",
    definition: "A written statement that describes the duties, responsibilities, required qualifications, and reporting relationships of a specific position."
  },
  {
    term: "KPI (Key Performance Indicator)",
    definition: "Measurable values that demonstrate how effectively recruitment goals are being achieved, such as time-to-fill, cost-per-hire, or quality of hire."
  },
  {
    term: "Labor Market",
    definition: "The supply and demand for labor in a particular geographic area or industry, including available talent pools and compensation trends."
  },
  {
    term: "Onboarding",
    definition: "The process of integrating new employees into an organization, including orientation, training, and helping them become productive team members."
  },
  {
    term: "Passive Candidate",
    definition: "A job candidate who is currently employed and not actively seeking new employment but may be open to the right opportunity."
  },
  {
    term: "Pre-Employment Screening",
    definition: "The process of verifying candidate information and assessing suitability through background checks, drug tests, and skill assessments."
  },
  {
    term: "Quality of Hire",
    definition: "A metric that measures the value new hires bring to an organization, often assessed through performance ratings, retention rates, and cultural fit."
  },
  {
    term: "Recruitment Marketing",
    definition: "The application of marketing strategies and tactics to attract, engage, and nurture talent before they apply for jobs."
  },
  {
    term: "Retained Search",
    definition: "A recruitment model where the client pays a fee upfront to engage the recruiter's services, typically used for senior-level or specialized positions."
  },
  {
    term: "Skill Gap Analysis",
    definition: "The process of identifying the difference between current workforce skills and the skills needed to meet organizational objectives."
  },
  {
    term: "Sourcing",
    definition: "The process of identifying and engaging potential candidates for current or future job opportunities through various channels and methods."
  },
  {
    term: "STAR Method",
    definition: "A structured interview technique where candidates describe Situation, Task, Action, and Result to provide concrete examples of their experience."
  },
  {
    term: "Succession Planning",
    definition: "The process of identifying and developing potential leaders to fill key positions when they become vacant due to promotion, retirement, or departure."
  },
  {
    term: "Talent Acquisition",
    definition: "A strategic approach to identifying, attracting, and onboarding top talent to efficiently meet dynamic business needs."
  },
  {
    term: "Talent Management",
    definition: "The strategic process of attracting, developing, retaining, and utilizing employees with the skills and aptitude to meet current and future business needs."
  },
  {
    term: "Talent Pipeline",
    definition: "A pool of qualified candidates who have been identified and engaged for future job opportunities within an organization."
  },
  {
    term: "Time-to-Fill",
    definition: "The number of days between when a job requisition is opened and when an offer is accepted by a candidate."
  },
  {
    term: "Workforce Planning",
    definition: "The strategic process of analyzing current workforce capabilities and planning for future talent needs based on business objectives."
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
      <section className="pt-32 pb-20 bg-gradient-to-br from-white to-synapse-lighter/30">
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
