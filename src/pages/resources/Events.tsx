
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, ExternalLink, Star, CheckCircle } from "lucide-react";

const Events = () => {
  const eventDetails = [
    "How to use the shared lead & company lists",
    "Walking through the Synapse Recruiting Guide", 
    "Reviewing new collateral being added to jobs to help you",
    "Creating urgency - we have a lot of open jobs!!",
    "Qualifying candidates (salary and beyond)",
    "Candidate Interview prep and info gathering",
    "Building trust and getting feedback",
    "Negotiating and closing",
    "Tying it all together for consistent wins"
  ];

  return (
    <PageTemplate 
      title="Live Sourcing Deep Dive: Full-Funnel Focus"
      description="Join our exclusive live recruiting webinar focused on driving real results through the recruiting funnel"
    >
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Live Sourcing Deep Dive: Full-Funnel Focus
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Join us for a no-fluff, high-impact session focused on driving real results through the recruiting funnel
            </p>
          </div>

          {/* Main Event Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-synapse-primary shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Star className="text-yellow-500 fill-current" size={24} />
                  <span className="text-lg font-semibold text-synapse-primary">Featured Event</span>
                </div>
                
                <h2 className="text-3xl font-bold text-synapse-dark mb-4">
                  Live Recruiting Webinar and AMA
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="text-synapse-primary" size={20} />
                      <span className="text-synapse-dark font-medium">Friday</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-synapse-primary" size={20} />
                      <span className="text-synapse-dark font-medium">8:30 AM Eastern Time (ET)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="text-synapse-primary" size={20} />
                      <span className="text-synapse-dark font-medium">Virtual Event</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-synapse-primary" size={20} />
                      <span className="text-synapse-dark font-medium">15+ People Interested</span>
                    </div>
                  </div>
                  
                  <div className="bg-synapse-lighter/50 p-4 rounded-lg">
                    <h3 className="font-bold text-synapse-dark mb-2">Event Host</h3>
                    <p className="text-synapse-gray">Ali Taghikhani</p>
                    <p className="text-sm text-synapse-gray">CEO at Synapse</p>
                    <div className="mt-3">
                      <span className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full">
                        Absolutely Free
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-yellow-500 fill-current" size={20} />
                    <h3 className="text-xl font-bold text-synapse-dark">
                      What You'll Learn
                    </h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-3">
                    {eventDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 mt-0.5" size={16} />
                        <span className="text-synapse-gray text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <Button 
                    className="btn-primary text-lg px-8 py-3"
                    onClick={() => window.open("https://meet.google.com/qcw-unwt-xrc", "_blank")}
                  >
                    Join Live Session
                    <ExternalLink size={18} className="ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Event Series */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-8 text-center">Upcoming Events in Series</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { date: "Fri Dec 6th", time: "8:30 AM ET" },
                { date: "Fri Dec 13th", time: "8:30 AM ET" },
                { date: "Fri Dec 20th", time: "8:30 AM ET" },
                { date: "Fri Dec 27th", time: "8:30 AM ET" }
              ].map((event, index) => (
                <Card key={index} className="border hover:border-synapse-primary transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <Calendar className="mx-auto mb-3 text-synapse-primary" size={24} />
                    <h3 className="font-bold text-synapse-dark mb-1">{event.date}</h3>
                    <p className="text-synapse-gray text-sm">{event.time}</p>
                    {index === 0 && (
                      <span className="inline-block mt-2 bg-synapse-primary text-white text-xs px-2 py-1 rounded">
                        Next Session
                      </span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Recruiting Results?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Don't miss this opportunity to learn proven strategies that drive consistent wins
            </p>
            <Button 
              className="bg-white text-synapse-primary hover:bg-gray-100 text-lg px-8 py-3"
              onClick={() => window.open("https://meet.google.com/qcw-unwt-xrc", "_blank")}
            >
              Join the Live Session
              <ExternalLink size={18} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Events;
