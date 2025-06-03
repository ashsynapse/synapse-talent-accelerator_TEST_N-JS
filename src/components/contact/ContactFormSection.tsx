
import React from "react";
import ContactForm from "./ContactForm";
import CalendarBooking from "./CalendarBooking";

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <ContactForm />
          <CalendarBooking />
        </div>
        
        {/* Additional Trust Elements */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-synapse-dark mb-8">
              Trusted by Leading Companies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {["Fortune 500", "Startups", "Scale-ups", "Enterprise"].map((type) => (
                <div key={type} className="text-center">
                  <div className="w-16 h-16 bg-synapse-light rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-synapse-primary font-bold text-sm">{type.charAt(0)}</span>
                  </div>
                  <p className="text-sm font-medium text-synapse-gray">{type}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
