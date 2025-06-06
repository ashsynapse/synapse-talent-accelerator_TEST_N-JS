
import React from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const RecruiterTestimonialsSection = () => {
  const testimonials = [
    {
      text: "What makes SRN different is the quality of roles and how it rewards consistency. Even with limited time, I've made successful placements thanks to my background and the platform's structure. It's perfect for recruiters who value high standards and real commissions.",
      author: "Camirama",
      position: "Technical Recruiter",
      avatar: "/lovable-uploads/81a55340-712c-4ee6-b147-516be5c52247.png",
      initials: "C",
      rating: 5,
      company: "SRN Partner",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      text: "Since joining SRN, I've tripled my placement rate. The quality of job openings and speed of client decisions is unmatched.",
      author: "Sarah Chen",
      position: "Senior Technical Recruiter",
      avatar: "/placeholder.svg",
      initials: "SC",
      rating: 5,
      company: "SRN Partner",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      text: "The automated payout system and transparent commission structure make SRN the most professional network I've worked with.",
      author: "Marcus Rodriguez",
      position: "Healthcare Recruitment Specialist",
      avatar: "/placeholder.svg",
      initials: "MR",
      rating: 5,
      company: "SRN Partner",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      text: "Working with pre-qualified clients has eliminated the guesswork. Every submission gets a response within 48 hours.",
      author: "Emily Foster",
      position: "Finance & Sales Recruiter",
      avatar: "/placeholder.svg",
      initials: "EF",
      rating: 5,
      company: "SRN Partner",
      gradient: "from-orange-500 to-amber-500"
    }
  ];

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
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Recruiter Reviews</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight">
            What Our
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> Recruiters Say</span>
          </h2>
          <p className="text-xl text-synapse-gray leading-relaxed">
            Real success stories from recruiters who have transformed their careers with our network.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-6">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-6 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-soft border border-white/60 hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group relative overflow-hidden h-full">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 flex flex-col h-full min-h-[400px]">
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
                      <p className="text-synapse-dark mb-8 flex-grow leading-relaxed text-lg italic font-medium">
                        "{testimonial.text}"
                      </p>
                      
                      {/* Author info */}
                      <div className="flex items-center gap-4 pt-6 border-t border-gray-100 mt-auto">
                        <div className="relative">
                          <Avatar className="h-14 w-14 ring-3 ring-synapse-light/50 group-hover:ring-synapse-primary/30 transition-all duration-300">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                            <AvatarFallback className={`bg-gradient-to-br ${testimonial.gradient} text-white font-bold text-lg`}>
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-3 border-white shadow-sm"></div>
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-synapse-dark group-hover:text-synapse-primary transition-colors duration-300 text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-synapse-gray text-sm leading-tight">{testimonial.position}</p>
                          <p className="text-synapse-primary text-sm font-semibold">{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            
            {/* Custom navigation */}
            <div className="flex items-center justify-center gap-4 mt-12">
              <CarouselPrevious className="static translate-x-0 translate-y-0 bg-white/90 backdrop-blur-sm hover:bg-synapse-primary hover:text-white border-synapse-light/50 shadow-soft hover:shadow-medium transition-all duration-300 w-12 h-12">
                <ArrowLeft className="h-5 w-5" />
              </CarouselPrevious>
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <div key={index} className="w-2 h-2 bg-synapse-light rounded-full opacity-50"></div>
                ))}
              </div>
              <CarouselNext className="static translate-x-0 translate-y-0 bg-white/90 backdrop-blur-sm hover:bg-synapse-primary hover:text-white border-synapse-light/50 shadow-soft hover:shadow-medium transition-all duration-300 w-12 h-12">
                <ArrowRight className="h-5 w-5" />
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default RecruiterTestimonialsSection;
