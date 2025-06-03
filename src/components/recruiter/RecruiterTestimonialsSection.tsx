
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const RecruiterTestimonialsSection = () => {
  const testimonials = [
    {
      text: "Since joining SRN, I've tripled my placement rate. The quality of job openings and speed of client decisions is unmatched.",
      author: "Sarah Chen",
      position: "Senior Technical Recruiter",
      metrics: "12 placements in 3 months"
    },
    {
      text: "The automated payout system and transparent commission structure make SRN the most professional network I've worked with.",
      author: "Marcus Rodriguez",
      position: "Healthcare Recruitment Specialist",
      metrics: "$45K earned in Q1"
    },
    {
      text: "Working with pre-qualified clients has eliminated the guesswork. Every submission gets a response within 48 hours.",
      author: "Emily Foster",
      position: "Finance & Sales Recruiter",
      metrics: "95% client response rate"
    }
  ];

  const metrics = [
    { label: "Avg Payout", value: "$2,800" },
    { label: "Avg Placement Time", value: "12 days" },
    { label: "Global Clients", value: "200+" },
    { label: "Success Rate", value: "87%" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-wide">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            What SRN Recruiters Say
          </h2>
          <p className="text-lg text-synapse-gray">
            Real success stories from recruiters who have transformed their careers with our network.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-shadow">
              <CardContent className="p-7">
                <Quote className="h-8 w-8 text-synapse-light mb-4" />
                <p className="text-synapse-dark mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-synapse-dark">{testimonial.author}</p>
                  <p className="text-synapse-gray text-sm mb-2">{testimonial.position}</p>
                  <p className="text-synapse-primary text-sm font-medium">{testimonial.metrics}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-synapse-lighter/50 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-synapse-dark text-center mb-8">
            SRN Network Performance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-synapse-primary mb-2">
                  {metric.value}
                </div>
                <div className="text-synapse-gray font-medium">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterTestimonialsSection;
