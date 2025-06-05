
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, DollarSign, Heart, TrendingUp } from "lucide-react";

const openPositions = [
  {
    title: "Senior Technical Recruiter",
    department: "Recruitment",
    location: "Remote (Global)",
    type: "Full-time",
    experience: "5+ years",
    salary: "$80k - $120k",
    description: "Join our team to source and recruit top technical talent for our global client base.",
    requirements: ["5+ years technical recruiting experience", "Strong understanding of software engineering roles", "Experience with AI/ML recruiting preferred"],
    href: "/careers/senior-technical-recruiter"
  },
  {
    title: "AI Research Scientist",
    department: "Technology",
    location: "San Francisco, CA",
    type: "Full-time",
    experience: "3+ years",
    salary: "$150k - $200k",
    description: "Drive innovation in our AI-powered recruitment platform and matching algorithms.",
    requirements: ["PhD in Computer Science or related field", "Experience with NLP and machine learning", "Python and TensorFlow/PyTorch expertise"],
    href: "/careers/ai-research-scientist"
  },
  {
    title: "Global Sales Director",
    department: "Sales",
    location: "New York, NY",
    type: "Full-time",
    experience: "8+ years",
    salary: "$120k - $180k + Commission",
    description: "Lead our global sales efforts and build relationships with enterprise clients.",
    requirements: ["8+ years B2B sales experience", "Experience selling to enterprise clients", "Track record of exceeding sales targets"],
    href: "/careers/global-sales-director"
  },
  {
    title: "Product Marketing Manager",
    department: "Marketing",
    location: "Remote (US/EU)",
    type: "Full-time",
    experience: "4+ years",
    salary: "$90k - $130k",
    description: "Drive product marketing strategy for our AI recruitment platform.",
    requirements: ["4+ years product marketing experience", "SaaS/B2B experience required", "Strong analytical and communication skills"],
    href: "/careers/product-marketing-manager"
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "London, UK",
    type: "Full-time",
    experience: "3+ years",
    salary: "£50k - £70k",
    description: "Ensure client success and drive retention for our European client base.",
    requirements: ["3+ years customer success experience", "SaaS platform experience", "Excellent communication skills"],
    href: "/careers/customer-success-manager"
  }
];

const benefits = [
  {
    icon: <Heart size={24} />,
    title: "Health & Wellness",
    description: "Comprehensive health insurance, mental health support, and wellness stipends"
  },
  {
    icon: <TrendingUp size={24} />,
    title: "Professional Growth",
    description: "Learning stipends, conference attendance, and career development programs"
  },
  {
    icon: <Users size={24} />,
    title: "Flexible Work",
    description: "Remote-first culture with flexible hours and unlimited PTO policy"
  },
  {
    icon: <DollarSign size={24} />,
    title: "Competitive Package",
    description: "Market-competitive salaries, equity options, and performance bonuses"
  }
];

const Careers = () => {
  return (
    <PageTemplate 
      title="Careers at Synapse"
      description="Join our mission to transform recruitment through AI and build the future of talent acquisition"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Build the Future of Recruitment
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Join our mission to transform how companies find and hire exceptional talent. Be part of a team that's revolutionizing recruitment through AI and human expertise.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-synapse-primary mb-2">50+</div>
              <div className="text-synapse-gray">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-synapse-primary mb-2">15+</div>
              <div className="text-synapse-gray">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-synapse-primary mb-2">98%</div>
              <div className="text-synapse-gray">Employee Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-synapse-primary mb-2">$5M+</div>
              <div className="text-synapse-gray">Series A Raised</div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Open Positions</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              We're always looking for talented individuals to join our growing team
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="grid lg:grid-cols-4 gap-6 items-center">
                    <div className="lg:col-span-2">
                      <h3 className="text-xl font-bold text-synapse-dark mb-2 group-hover:text-synapse-primary transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-synapse-gray mb-3">{position.description}</p>
                      
                      <div className="space-y-1 text-sm">
                        <h4 className="font-medium text-synapse-dark">Key Requirements:</h4>
                        <ul className="text-synapse-gray">
                          {position.requirements.slice(0, 2).map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2">
                              <span className="text-synapse-primary">•</span>
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-synapse-gray">
                        <Users size={14} />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-synapse-gray">
                        <MapPin size={14} />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-synapse-gray">
                        <Clock size={14} />
                        <span>{position.type} • {position.experience}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-synapse-gray">
                        <DollarSign size={14} />
                        <span>{position.salary}</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button 
                        className="btn-primary"
                        onClick={() => window.location.href = position.href}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-synapse-gray mb-4">Don't see the right role? We're always open to exceptional talent.</p>
            <Button 
              variant="outline"
              className="border-synapse-primary text-synapse-primary hover:bg-synapse-light"
              onClick={() => window.location.href = "mailto:careers@synapseint.com"}
            >
              Send Us Your Resume
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits & Culture */}
      <section className="py-20 bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Why Work at Synapse?</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              We believe in creating an environment where everyone can thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center border hover:border-synapse-primary transition-colors duration-300 group">
                <CardContent className="p-6">
                  <div className="text-synapse-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-synapse-dark">{benefit.title}</h3>
                  <p className="text-synapse-gray text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Culture Section */}
          <div className="bg-white rounded-lg p-8 shadow-soft">
            <h3 className="text-2xl font-bold text-synapse-dark mb-6 text-center">Our Culture</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-synapse-dark mb-3">Innovation & Growth</h4>
                <p className="text-synapse-gray text-sm mb-4">
                  We encourage experimentation, learning from failures, and pushing the boundaries of what's possible in recruitment technology.
                </p>
                
                <h4 className="font-semibold text-synapse-dark mb-3">Diversity & Inclusion</h4>
                <p className="text-synapse-gray text-sm">
                  Our diverse team brings different perspectives that drive innovation and better outcomes for our clients.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-synapse-dark mb-3">Work-Life Balance</h4>
                <p className="text-synapse-gray text-sm mb-4">
                  We believe that great work comes from well-rested, fulfilled individuals. Our policies support both professional and personal growth.
                </p>
                
                <h4 className="font-semibold text-synapse-dark mb-3">Global Impact</h4>
                <p className="text-synapse-gray text-sm">
                  Every day, our work helps connect talent with opportunity across the globe, making a real difference in people's careers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-synapse-primary to-synapse-primary/80">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Mission?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Be part of the team that's transforming recruitment for companies worldwide
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8"
            onClick={() => window.location.href = "mailto:careers@synapseint.com"}
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Careers;
