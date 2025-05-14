
import React from "react";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Synapse delivered outstanding candidates within 72 hours, all of whom were perfectly aligned with our company culture and role requirements. We hired our ideal candidate within 2 weeks.",
      author: "Sarah Johnson",
      position: "VP of People, TechGrowth Inc.",
      companyLogo: "https://via.placeholder.com/100x40",
    },
    {
      text: "The quality of candidates we received through Synapse was exceptional. Their pre-vetting process saved us countless hours of screening, allowing us to focus on the final selection.",
      author: "Michael Reeves",
      position: "Talent Acquisition Manager, HealthPlus",
      companyLogo: "https://via.placeholder.com/100x40",
    },
    {
      text: "Working with Synapse has transformed our hiring process. Their specialized recruiters understood our industry needs immediately, and their 72-hour turnaround is unmatched.",
      author: "Jennifer Tang",
      position: "COO, Hospitality Partners",
      companyLogo: "https://via.placeholder.com/100x40",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-synapse-gray">
            Don't just take our word for it. Here's what hiring managers and talent
            acquisition leaders have to say about Synapse.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-xl shadow-soft border border-gray-100 flex flex-col"
            >
              <Quote className="h-10 w-10 text-synapse-light mb-5" />
              <p className="text-synapse-dark mb-6 flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-start mt-auto">
                <div className="flex-grow">
                  <p className="font-bold text-synapse-dark">{testimonial.author}</p>
                  <p className="text-synapse-gray text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-gray-100">
          <h3 className="text-xl font-bold text-synapse-dark text-center mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-32 bg-gray-100 rounded-md flex items-center justify-center"
              >
                <span className="text-synapse-gray text-sm font-medium">
                  COMPANY {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
