
import React from "react";

const ContactHero = () => {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-synapse-light/30 to-white">
      <div className="container-wide">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
            Let's Build Your Dream Team
          </h1>
          <p className="text-xl md:text-2xl text-synapse-gray mb-8 leading-relaxed">
            Fill out the form or book a call with our recruitment experts — we'll help you find top talent, fast.
          </p>
          
          {/* Trust Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-synapse-gray mt-12">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-synapse-primary rounded-full"></div>
              <span className="font-medium">1,000+ Recruiters</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-synapse-primary rounded-full"></div>
              <span className="font-medium">50+ Countries</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-synapse-primary rounded-full"></div>
              <span className="font-medium">94% Match Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-synapse-primary rounded-full"></div>
              <span className="font-medium">Average 7 Days to Hire</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
