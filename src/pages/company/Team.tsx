
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const leadership = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    bio: "Former VP of Talent at tech unicorn. 15+ years in executive recruitment with expertise in scaling high-growth companies.",
    image: "/placeholder.svg",
    linkedin: "#",
    email: "sarah@synapseint.com"
  },
  {
    name: "Michael Chen",
    role: "CTO & Co-Founder",
    bio: "AI/ML expert with PhD from Stanford. Previously led engineering teams at Google and Microsoft.",
    image: "/placeholder.svg",
    linkedin: "#",
    email: "michael@synapseint.com"
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Global Operations",
    bio: "International business leader with 12+ years experience managing global recruitment operations across 20+ countries.",
    image: "/placeholder.svg",
    linkedin: "#",
    email: "emily@synapseint.com"
  },
  {
    name: "David Kim",
    role: "Head of AI Research",
    bio: "Former research scientist at DeepMind. Specializes in natural language processing and machine learning for talent matching.",
    image: "/placeholder.svg",
    linkedin: "#",
    email: "david@synapseint.com"
  }
];

const recruitmentTeam = [
  {
    name: "Lisa Thompson",
    role: "Senior Technical Recruiter",
    specialization: "Software Engineering & AI",
    experience: "8+ years",
    image: "/placeholder.svg"
  },
  {
    name: "James Wilson",
    role: "Executive Search Director",
    specialization: "C-Suite & Leadership",
    experience: "12+ years",
    image: "/placeholder.svg"
  },
  {
    name: "Anna Martinez",
    role: "Healthcare Recruitment Lead",
    specialization: "Healthcare & Life Sciences",
    experience: "10+ years",
    image: "/placeholder.svg"
  },
  {
    name: "Robert Taylor",
    role: "Manufacturing Specialist",
    specialization: "Engineering & Manufacturing",
    experience: "15+ years",
    image: "/placeholder.svg"
  },
  {
    name: "Jennifer Lee",
    role: "Sales Recruitment Manager",
    specialization: "Sales & Business Development",
    experience: "7+ years",
    image: "/placeholder.svg"
  },
  {
    name: "Carlos Garcia",
    role: "Remote Staffing Expert",
    specialization: "Global Remote Teams",
    experience: "9+ years",
    image: "/placeholder.svg"
  }
];

const Team = () => {
  return (
    <PageTemplate 
      title="Our Team"
      description="Meet the experts behind Synapse International's recruitment success"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Meet Our Expert Team
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Our diverse team of recruitment experts, technologists, and industry specialists are dedicated to connecting exceptional talent with outstanding opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Leadership Team</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              Visionary leaders with decades of combined experience in recruitment, technology, and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((member, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-synapse-lighter overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-synapse-dark mb-1">{member.name}</h3>
                  <p className="text-synapse-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-synapse-gray mb-4">{member.bio}</p>
                  
                  <div className="flex justify-center gap-3">
                    <a 
                      href={member.linkedin} 
                      className="text-synapse-gray hover:text-synapse-primary transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="text-synapse-gray hover:text-synapse-primary transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Team */}
      <section className="py-20 bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Recruitment Specialists</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              Industry experts with deep knowledge in their specialized sectors
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recruitmentTeam.map((member, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-full bg-synapse-lighter overflow-hidden flex-shrink-0">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-synapse-dark mb-1">{member.name}</h3>
                      <p className="text-synapse-primary font-medium mb-2">{member.role}</p>
                      <div className="space-y-1 text-sm">
                        <p className="text-synapse-gray">
                          <span className="font-medium">Specialization:</span> {member.specialization}
                        </p>
                        <p className="text-synapse-gray">
                          <span className="font-medium">Experience:</span> {member.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Culture */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Our Culture & Values</h2>
              <div className="space-y-4 text-synapse-gray">
                <p>
                  At Synapse International, we believe that great recruitment starts with great people. Our team is built on a foundation of diversity, expertise, and shared passion for connecting talent with opportunity.
                </p>
                <p>
                  We foster a culture of continuous learning, innovation, and collaboration. Our team members are encouraged to stay ahead of industry trends, develop new skills, and contribute to the evolution of recruitment technology.
                </p>
                <p>
                  From our headquarters to our global remote team members, we maintain a people-first approach that extends to both our internal culture and our client relationships.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-synapse-lighter/30 to-synapse-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-synapse-dark mb-4">Why Our Team Excels</h3>
              <ul className="space-y-3 text-synapse-gray">
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Deep industry expertise across multiple sectors</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Continuous training on latest recruitment technologies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Global perspective with local market knowledge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Commitment to diversity and inclusive hiring practices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Results-driven approach with measurable outcomes</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Team;
