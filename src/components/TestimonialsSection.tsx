
import React from "react";
import { Quote } from "lucide-react";
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
    },
    {
      text: "The quality of candidates we received through Synapse was exceptional. Their pre-vetting process saved us countless hours of screening, allowing us to focus on the final selection.",
      author: "Michael Reeves",
      position: "Talent Acquisition Manager, HealthPlus",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      initials: "MR",
    },
    {
      text: "Working with Synapse has transformed our hiring process. Their specialized recruiters understood our industry needs immediately, and their 72-hour turnaround is unmatched.",
      author: "Jennifer Tang",
      position: "COO, Hospitality Partners",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      initials: "JT",
    },
    {
      text: "The AI-powered matching system is incredible. We've seen a 300% improvement in candidate quality and reduced our time-to-hire from months to weeks.",
      author: "David Chen",
      position: "Head of Talent, InnovaCorp",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      initials: "DC",
    },
    {
      text: "Synapse doesn't just find candidates; they find the right candidates. Our retention rate has improved significantly since we started working with them.",
      author: "Lisa Rodriguez",
      position: "Chief People Officer, FutureScale",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      initials: "LR",
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
                  <div className="bg-white p-8 rounded-xl shadow-soft border border-gray-100 h-full flex flex-col">
                    <Quote className="h-8 w-8 text-synapse-light mb-6" />
                    <p className="text-synapse-dark mb-8 flex-grow leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
                        <AvatarFallback className="bg-synapse-light text-synapse-primary font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-synapse-dark">{testimonial.author}</p>
                        <p className="text-synapse-gray text-sm">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
