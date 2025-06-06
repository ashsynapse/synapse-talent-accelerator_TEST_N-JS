
import React from "react";
import { Quote, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecruiterTestimonialsSection = () => {
  const testimonial = {
    text: "What makes SRN different is the quality of roles and how it rewards consistency. Even with limited time, I've made successful placements thanks to my background and the platform's structure. It's perfect for recruiters who value high standards and real commissions.",
    author: "Camirama",
    position: "Technical Recruiter",
    avatar: "/lovable-uploads/81a55340-712c-4ee6-b147-516be5c52247.png",
    initials: "C",
    rating: 5,
    company: "SRN Partner",
    gradient: "from-purple-500 to-indigo-500"
  };

  return (
    <section className="section-padding bg-gradient-to-br from-white via-synapse-lighter/20 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-synapse-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-synapse-secondary rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-synapse-tertiary rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Recruiter Review</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight">
            What Our
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> Recruiter Says</span>
          </h2>
          <p className="text-xl text-synapse-gray leading-relaxed">
            Real success story from a recruiter who has transformed their career with our network.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-soft border border-white/60 hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group relative overflow-hidden">
            {/* Gradient overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            
            <div className="relative z-10 flex flex-col">
              {/* Quote and rating */}
              <div className="flex items-center justify-between mb-6">
                <Quote className="h-10 w-10 text-synapse-primary/40 group-hover:text-synapse-primary/60 transition-colors duration-300" />
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Testimonial text */}
              <p className="text-synapse-dark mb-8 leading-relaxed text-lg italic font-medium text-center">
                "{testimonial.text}"
              </p>
              
              {/* Author info */}
              <div className="flex items-center justify-center gap-4 pt-6 border-t border-gray-100">
                <div className="relative">
                  <Avatar className="h-14 w-14 ring-3 ring-synapse-light/50 group-hover:ring-synapse-primary/30 transition-all duration-300">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                    <AvatarFallback className={`bg-gradient-to-br ${testimonial.gradient} text-white font-bold text-lg`}>
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white shadow-sm"></div>
                </div>
                <div className="text-center">
                  <p className="font-bold text-synapse-dark group-hover:text-synapse-primary transition-colors duration-300 text-lg">
                    {testimonial.author}
                  </p>
                  <p className="text-synapse-gray text-sm leading-tight">{testimonial.position}</p>
                  <p className="text-synapse-primary text-sm font-semibold">{testimonial.company}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruiterTestimonialsSection;
