
import React from "react";
import ContactForm from "./ContactForm";

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container-wide">
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
