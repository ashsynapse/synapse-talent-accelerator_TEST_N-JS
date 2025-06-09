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
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const TestimonialsSection = () => {
  const { addToRefs } = useScrollAnimation();

  const testimonials = [
    {
      text: "Sermo.com is the world's largest social network for doctors, raising more than $100M to date. Based in New York, danish CEO Peter Kirk approached us to fill positions in engineering, Product, Sales, and Marketing across the Americas and Europe. We have helped them fill 17 hires and continue to work together.",
      author: "Peter Kirk",
      position: "CEO",
      avatar: "/lovable-uploads/91bf90aa-d7e5-4b83-8a52-c96419b0980b.png",
      initials: "PK",
      rating: 5,
      company: "Sermo",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      text: "Cody and Synapse International were instrumental to helping me recruit a co-founder and CTO. It's not easy finding this type of position, however Cody came through in spades.",
      author: "Oren Singer",
      position: "CEO",
      avatar: "/lovable-uploads/2b75feab-e3fd-4139-9fa3-61ef99e4dbee.png",
      initials: "OS",
      rating: 5,
      company: "Sparrow",
      gradient: "from-emerald-500 to-green-500"
    },
    {
      text: "Working with Cody and his team at Synapse International was such a pleasure. We often get inbound marketing messages from recruiters offering to help us source talent for our open roles, and more times than not they aren't equipped to locate the web3 talent and experience we're looking for. However, that was not the case for Synapse International so I am looking forward to working with them again in the future. They were an amazing recruitment partner for quite a few of our open roles.",
      author: "Shaykara Webster, MBA",
      position: "Head of People",
      avatar: "/lovable-uploads/5248e727-e17d-45e1-b631-2c2de4612977.png",
      initials: "SW",
      rating: 5,
      company: "Livepeer",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      text: "These guys truly lived up to their moniker of 'The Startup Recruiters' by being dedicated to their craft and passionate about their work, all while being flexible and transparent in their process. They brought quality candidates to us when it was needed most.",
      author: "Ali Khosh",
      position: "Quandary Peak Research",
      avatar: "/lovable-uploads/53d68efa-a3fb-40fc-a04a-dca396de8bd0.png",
      initials: "AK",
      rating: 5,
      company: "Quandary Peak Research",
      gradient: "from-orange-500 to-amber-500"
    },
    {
      text: "I highly recommend working with Synapse International and believe they can provide a valuable boost to any high-growth company looking to scale their development capabilities.",
      author: "Colin Goltra",
      position: "General Manager",
      avatar: "/lovable-uploads/328759e0-ba0c-4385-96ee-3443e3d95357.png",
      initials: "CG",
      rating: 5,
      company: "Coins.ph",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      text: "We have been looking for researchers all over the world and did not have that many candidates to choose from. Despite that, Synapse International was very helpful in providing Insolar with highly experienced candidates.",
      author: "Natalia Zhyrkina",
      position: "Head of HR",
      avatar: "/lovable-uploads/adc30e12-3c07-495f-900c-7cddd3ec431a.png",
      initials: "NZ",
      rating: 5,
      company: "Insolar",
      gradient: "from-teal-500 to-blue-500"
    },
    {
      text: "The Synapse Team are experts at understanding exactly what it is you really need, then working to find you the perfect candidate. No matter how narrow the spec, they continue to amaze us by delivering the right folks.",
      author: "Matt Grotenstein",
      position: "CEO",
      avatar: "/lovable-uploads/dd78b784-b909-44a2-9e75-411a173fc73f.png",
      initials: "MG",
      rating: 5,
      company: "Soshio",
      gradient: "from-red-500 to-pink-500"
    },
    {
      text: "Synapse has helped source many great candidates and assisted in drastically increasing the flow of great candidates in our engineering hiring pipeline. They are personable, forward looking, and well versed with the inherently sensitive nature of Engineering recruiting. I look forward to continuing to work with Synapse on sourcing candidates for our staff sourcing needs.",
      author: "Jonathan Eppers",
      position: "CEO",
      avatar: "/lovable-uploads/7ecc8678-9df9-491b-8673-258bc34f6089.png",
      initials: "JE",
      rating: 5,
      company: "RadPad",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      text: "Synapse has helped source many great candidates and assisted in drastically increasing the flow of great candidates in our engineering hiring pipeline. They are personable, forward looking, and well versed with the inherently sensitive nature of Engineering recruiting. I look forward to continuing to work with Synapse on sourcing candidates for our staff sourcing needs.",
      author: "Zach Sherry",
      position: "Director of Engineering",
      avatar: "/lovable-uploads/c45621f8-203b-4345-93e0-fc5ae8751e9e.png",
      initials: "ZS",
      rating: 5,
      company: "Boost Media",
      gradient: "from-green-500 to-teal-500"
    },
    {
      text: "While most of the recruiters in Montréal kept calling the same individuals, Synapse worked out of a different pool of candidates and quickly presented us many highly qualified, talented and motivated individuals. They soon became our most trusted source of talent.",
      author: "Maxime Julien",
      position: "OMsignal",
      avatar: "/lovable-uploads/8abae81a-37a4-43b1-b2e2-8936ce996b7f.png",
      initials: "MJ",
      rating: 5,
      company: "OMsignal",
      gradient: "from-yellow-500 to-orange-500"
    },
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
          <div 
            ref={addToRefs}
            className="scroll-animate inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-soft border border-synapse-light/30"
          >
            <div className="flex gap-1">
              {[1,2,3,4,5].map((star) => (
                <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-synapse-primary uppercase tracking-wide">Client Reviews</span>
          </div>
          <h2 
            ref={addToRefs}
            className="scroll-animate text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-8 leading-tight"
          >
            What Our
            <span className="bg-gradient-to-r from-synapse-primary to-synapse-secondary bg-clip-text text-transparent"> Clients Say</span>
          </h2>
          <p 
            ref={addToRefs}
            className="scroll-animate text-xl text-synapse-gray leading-relaxed"
          >
            Don't just take our word for it. Here's what hiring managers and talent acquisition leaders have to say about Synapse.
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
                  <div 
                    ref={addToRefs}
                    className="scroll-animate bg-white/95 backdrop-blur-sm p-10 rounded-3xl shadow-soft border border-white/60 hover:shadow-xl transition-all duration-700 hover:-translate-y-2 group relative overflow-hidden h-full"
                  >
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
            
            {/* Side navigation arrows */}
            <CarouselPrevious className="left-4 md:left-8 bg-white/90 backdrop-blur-sm hover:bg-synapse-primary hover:text-white border-synapse-light/50 shadow-soft hover:shadow-medium transition-all duration-300 w-12 h-12" />
            <CarouselNext className="right-4 md:right-8 bg-white/90 backdrop-blur-sm hover:bg-synapse-primary hover:text-white border-synapse-light/50 shadow-soft hover:shadow-medium transition-all duration-300 w-12 h-12" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
