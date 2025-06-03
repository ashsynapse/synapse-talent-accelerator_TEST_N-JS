
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Award } from "lucide-react";

const CalendarBooking = () => {
  return (
    <div className="bg-synapse-light/20 rounded-2xl p-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-synapse-dark mb-4">
          Prefer a Call?
        </h2>
        <p className="text-synapse-gray mb-6">
          Book a 30-minute strategy call with our recruitment experts to discuss your specific needs.
        </p>
      </div>

      {/* Calendar Embed Placeholder */}
      <div className="bg-white rounded-xl p-6 mb-6 border-2 border-dashed border-synapse-primary/30">
        <div className="text-center py-8">
          <Calendar className="w-16 h-16 text-synapse-primary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-synapse-dark mb-2">
            Schedule Your Demo Call
          </h3>
          <p className="text-synapse-gray mb-6">
            Calendly widget would be embedded here
          </p>
          <Button 
            className="btn-primary"
            onClick={() => window.open("https://calendly.com/synapse-demo", "_blank")}
          >
            Schedule a Demo Call
          </Button>
        </div>
      </div>

      {/* What to Expect */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-synapse-dark mb-4">
          What to Expect on the Call:
        </h3>
        
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-synapse-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-synapse-dark">30-Minute Strategy Session</h4>
            <p className="text-sm text-synapse-gray">Deep dive into your specific hiring challenges</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Users className="w-5 h-5 text-synapse-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-synapse-dark">Custom Recruitment Plan</h4>
            <p className="text-sm text-synapse-gray">Tailored strategy for your industry and roles</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <Award className="w-5 h-5 text-synapse-primary mt-1 flex-shrink-0" />
          <div>
            <h4 className="font-medium text-synapse-dark">No Obligation</h4>
            <p className="text-sm text-synapse-gray">Free consultation with our senior recruitment experts</p>
          </div>
        </div>
      </div>

      {/* Additional CTA */}
      <div className="mt-8 p-6 bg-white rounded-xl border border-synapse-primary/20">
        <h4 className="font-semibold text-synapse-dark mb-2">
          Urgent Hiring Need?
        </h4>
        <p className="text-sm text-synapse-gray mb-4">
          Need to start immediately? Email us directly for priority handling.
        </p>
        <Button 
          variant="outline" 
          className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light"
          onClick={() => window.location.href = "mailto:urgent@synapseint.com?subject=Urgent Hiring Need"}
        >
          Email for Urgent Requests
        </Button>
      </div>
    </div>
  );
};

export default CalendarBooking;
