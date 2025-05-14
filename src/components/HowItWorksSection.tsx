
import React from "react";
import { Check, Users, Building, Calendar } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: <Building className="h-10 w-10 text-synapse-primary" />,
      title: "Brief Us On Your Needs",
      description:
        "Tell us about your hiring goals, company culture, and specific role requirements in a 30-minute briefing call.",
    },
    {
      icon: <Users className="h-10 w-10 text-synapse-primary" />,
      title: "Get Matched With Recruiters",
      description:
        "Our platform matches your position with specialized recruiters from our vetted Synapse Recruiter Network (SRN).",
    },
    {
      icon: <Calendar className="h-10 w-10 text-synapse-primary" />,
      title: "Receive Quality Candidates",
      description:
        "Within 72 hours, receive your first batch of pre-vetted candidates who match your exact requirements.",
    },
  ];

  return (
    <section className="section-padding bg-white" id="how-it-works">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            How Synapse Works
          </h2>
          <p className="text-lg text-synapse-gray">
            Our tech-enabled platform simplifies the recruitment process,
            delivering quality candidates quickly and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300"
            >
              <div className="bg-synapse-lighter p-4 rounded-lg inline-block mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-synapse-dark mb-3">
                {index + 1}. {step.title}
              </h3>
              <p className="text-synapse-gray">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-synapse-light rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-synapse-dark mb-4">
                Why Our Approach Works Better
              </h3>
              <p className="text-synapse-gray mb-6">
                Synapse combines human expertise with advanced technology to deliver
                faster, more accurate results than traditional recruitment methods.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Pre-vetted candidates matched to your specific needs",
                  "72-hour delivery time compared to industry average of 3-4 weeks",
                  "Specialized recruiters with industry-specific knowledge",
                  "AI-powered matching for optimal recruiter selection",
                  "Ongoing quality assurance and performance tracking"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-synapse-primary mt-1 flex-shrink-0" />
                    <span className="text-synapse-dark">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Recruitment process visualization"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm rounded-full w-32 h-32 flex flex-col items-center justify-center shadow-medium">
                <span className="text-synapse-primary text-3xl font-bold">72</span>
                <span className="text-synapse-dark font-medium">Hours</span>
                <span className="text-sm text-synapse-gray">delivery time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
