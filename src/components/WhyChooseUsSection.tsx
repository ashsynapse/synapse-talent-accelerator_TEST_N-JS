
import React from "react";

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark leading-tight">
              We don't just recruit. We partner, source, and deliver—globally.
            </h2>
            
            <div className="space-y-4 text-lg text-synapse-gray leading-relaxed">
              <p>
                Hiring today is reactive, slow, and expensive.
              </p>
              <p>
                We combine the speed of automation with the insight of expert recruiters.
              </p>
              <p>
                Your team gets fully-screened, top-fit candidates in 72 hours.
              </p>
            </div>

            {/* Optional callout quote */}
            <div className="bg-synapse-lighter/50 border-l-4 border-synapse-primary p-6 mt-8">
              <blockquote className="text-xl text-synapse-dark italic leading-relaxed">
                "They nailed the role. Fast turnaround. Amazing results."
              </blockquote>
              <cite className="text-synapse-gray font-medium mt-3 block not-italic">
                — Jonathan Eppers, CEO @ RadPad
              </cite>
            </div>
          </div>

          {/* Right side - Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-synapse-primary/10 to-synapse-secondary/10 rounded-2xl p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-synapse-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">72h</span>
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-2">
                  Rapid Delivery
                </h3>
                <p className="text-synapse-gray">
                  From job brief to candidate shortlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
