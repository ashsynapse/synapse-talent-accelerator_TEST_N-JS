
import React from "react";
import { Quote, Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Synapse delivered outstanding candidates within 72 hours, all of whom were perfectly aligned with our company culture and role requirements. We hired our ideal candidate within 2 weeks.",
      author: "Sarah Johnson",
      position: "VP of People, TechGrowth Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      initials: "SJ",
      rating: 5,
      company: "TechGrowth Inc."
    },
    {
      text: "The quality of candidates we received through Synapse was exceptional. Their pre-vetting process saved us countless hours of screening, allowing us to focus on the final selection.",
      author: "Michael Reeves",
      position: "Talent Acquisition Manager, HealthPlus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      initials: "MR",
      rating: 5,
      company: "HealthPlus"
    },
    {
      text: "Working with Synapse has transformed our hiring process. Their specialized recruiters understood our industry needs immediately, and their 72-hour turnaround is unmatched.",
      author: "Jennifer Tang",
      position: "COO, Hospitality Partners",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      initials: "JT",
      rating: 5,
      company: "Hospitality Partners"
    },
    {
      text: "The AI-powered matching system is incredible. We've seen a 300% improvement in candidate quality and reduced our time-to-hire from months to weeks.",
      author: "David Chen",
      position: "Head of Talent, InnovaCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      initials: "DC",
      rating: 5,
      company: "InnovaCorp"
    },
    {
      text: "Synapse doesn't just find candidates; they find the right candidates. Our retention rate has improved significantly since we started working with them.",
      author: "Lisa Rodriguez",
      position: "Chief People Officer, FutureScale",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      initials: "LR",
      rating: 5,
      company: "FutureScale"
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-synapse-lighter/30 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-40 h-40 bg-synapse-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-synapse-secondary rounded-full blur-2xl"></div>
      </div>
      
      <div className="container-wide relative">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 shadow-soft">
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium text-synapse-primary">Client Reviews</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-synapse-dark mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-synapse-gray">
            Don't just take our word for it. Here's what hiring managers and talent
            acquisition leaders have to say about Synapse.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/2">
                  <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-soft border border-white/50 h-full flex flex-col hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group">
                    <div className="flex items-center gap-2 mb-4">
                      <Quote className="h-8 w-8 text-synapse-primary/30 group-hover:text-synapse-primary/50 transition-colors duration-300" />
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                    
                    <p className="text-synapse-dark mb-8 flex-grow leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-12 w-12 ring-2 ring-synapse-light/50 group-hover:ring-synapse-primary/30 transition-all duration-300">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                          <AvatarFallback className="bg-synapse-light text-synapse-primary font-semibold">
                            {testimonial.initials}
                          </AvatarFallback>
                        </Avatar>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                      </div>
                      <div>
                        <p className="font-bold text-synapse-dark group-hover:text-synapse-primary transition-colors duration-300">
                          {testimonial.author}
                        </p>
                        <p className="text-synapse-gray text-sm">{testimonial.position}</p>
                        <p className="text-synapse-primary text-xs font-medium">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-white/80 backdrop-blur-sm hover:bg-synapse-primary hover:text-white border-synapse-light/50" />
            <CarouselNext className="hidden md:flex -right-12 bg-white/80 backdrop-blur-sm hover:bg-synapse-primary hover:text-white border-synapse-light/50" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
