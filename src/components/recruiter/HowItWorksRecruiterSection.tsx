
import React from "react";
import { UserPlus, Briefcase, Users, DollarSign } from "lucide-react";

const HowItWorksRecruiterSection = () => {
  const steps = [
    {
      icon: <UserPlus className="h-10 w-10 text-white" />,
      title: "Sign Up & Complete Onboarding",
      description: "Quick 15-minute application process with skills verification and background check."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-white" />,
      title: "Access Verified Job Openings",
      description: "Browse live opportunities from pre-qualified clients across multiple industries."
    },
    {
      icon: <Users className="h-10 w-10 text-white" />,
      title: "Submit Qualified Candidates",
      description: "Use our AI-powered tools to source and submit the best candidates for each role."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-white" />,
      title: "Get Paid on Successful Placements",
      description: "Receive automated payouts within 5 business days of successful candidate placement."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            How SRN Works
          </h2>
          <p className="text-lg text-synapse-gray">
            Join our network in 4 simple steps and start earning commissions on quality placements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-br from-synapse-primary to-synapse-secondary p-6 rounded-lg inline-block mb-6">
                {step.icon}
              </div>
              <div className="bg-synapse-primary text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-synapse-dark mb-3">
                {step.title}
              </h3>
              <p className="text-synapse-gray">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksRecruiterSection;
