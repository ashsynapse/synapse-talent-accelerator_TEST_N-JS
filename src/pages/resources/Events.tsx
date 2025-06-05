
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, ExternalLink } from "lucide-react";

const upcomingEvents = [
  {
    title: "AI-Powered Recruitment Summit 2024",
    type: "Virtual Conference",
    date: "January 25, 2024",
    time: "9:00 AM - 5:00 PM EST",
    location: "Virtual Event",
    attendees: "500+ Expected",
    description: "Join industry leaders as we explore the latest AI innovations transforming recruitment. Learn about cutting-edge tools, best practices, and future trends.",
    speakers: ["Dr. Sarah Chen - AI Research Director", "Mike Rodriguez - VP of Talent", "Lisa Wang - Tech Recruiter"],
    price: "Free",
    registrationUrl: "/events/ai-recruitment-summit-2024"
  },
  {
    title: "Remote Hiring Masterclass",
    type: "Workshop",
    date: "February 8, 2024",
    time: "2:00 PM - 4:00 PM EST",
    location: "Virtual Workshop",
    attendees: "50 Participants",
    description: "Interactive workshop covering best practices for remote hiring, from sourcing to onboarding distributed teams.",
    speakers: ["Jennifer Adams - Remote Work Expert", "David Kim - Global Recruiter"],
    price: "$99",
    registrationUrl: "/events/remote-hiring-masterclass"
  },
  {
    title: "Tech Recruitment Networking Mixer",
    type: "Networking Event",
    date: "February 15, 2024",
    time: "6:00 PM - 9:00 PM PST",
    location: "San Francisco, CA",
    attendees: "200+ Professionals",
    description: "Connect with fellow recruiters, hiring managers, and tech professionals in the Bay Area. Casual networking with industry insights.",
    speakers: ["Panel Discussion with Local Tech Leaders"],
    price: "$50",
    registrationUrl: "/events/tech-recruitment-mixer-sf"
  }
];

const pastEvents = [
  {
    title: "The Future of Work: Recruitment Trends 2024",
    type: "Webinar",
    date: "December 10, 2023",
    attendees: "800+ Attendees",
    recording: "/events/recordings/future-of-work-2024"
  },
  {
    title: "Diversity & Inclusion in Tech Hiring",
    type: "Panel Discussion",
    date: "November 20, 2023",
    attendees: "350+ Attendees",
    recording: "/events/recordings/diversity-inclusion-tech"
  },
  {
    title: "Candidate Experience Optimization Workshop",
    type: "Workshop",
    date: "October 28, 2023",
    attendees: "120+ Participants",
    recording: "/events/recordings/candidate-experience-workshop"
  }
];

const Events = () => {
  return (
    <PageTemplate 
      title="Events & Webinars"
      description="Join our exclusive recruitment events, workshops, and webinars to stay ahead of industry trends"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Events & Webinars
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Connect, learn, and grow with industry experts through our exclusive recruitment events and educational content
            </p>
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-8">Upcoming Events</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingEvents.map((event, index) => (
                <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4">
                      <span className="text-xs px-3 py-1 bg-synapse-primary text-white rounded-full font-medium">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-synapse-dark group-hover:text-synapse-primary transition-colors">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4 text-sm text-synapse-gray">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    
                    <p className="text-synapse-gray mb-4 flex-grow text-sm">
                      {event.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-synapse-dark text-sm mb-2">Featured Speakers</h4>
                      <ul className="text-xs text-synapse-gray space-y-1">
                        {event.speakers.map((speaker, speakerIndex) => (
                          <li key={speakerIndex}>• {speaker}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="font-bold text-synapse-primary">{event.price}</span>
                      <Button 
                        className="btn-primary"
                        onClick={() => window.location.href = event.registrationUrl}
                      >
                        Register Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-8">Past Events & Recordings</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event, index) => (
                <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="text-xs px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full font-medium">
                        {event.type}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-2 text-synapse-dark">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-1 mb-4 text-sm text-synapse-gray">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light"
                      onClick={() => window.location.href = event.recording}
                    >
                      Watch Recording
                      <ExternalLink size={14} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="text-center bg-synapse-lighter/30 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-xl text-synapse-gray mb-6 max-w-2xl mx-auto">
              Be the first to know about our latest events, workshops, and exclusive industry insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-synapse-primary"
              />
              <Button className="btn-primary whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Events;
