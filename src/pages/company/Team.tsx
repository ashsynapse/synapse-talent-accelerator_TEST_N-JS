
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Users, Globe, ArrowRight, Sparkles } from "lucide-react";

const leadership = [
  {
    name: "Ali Taghikhani",
    role: "CEO & Co-Founder",
    bio: "Visionary leader driving AI-first recruitment innovation. 11+ years of experience revolutionizing how exceptional talent connects with outstanding opportunities.",
    image: "/lovable-uploads/288b2441-5447-41a5-8e94-983b2646dbfb.png",
    linkedin: "#",
    email: "ali@synapseint.com"
  },
  {
    name: "Cody Sklar",
    role: "COO & Co-Founder",
    bio: "Operations expert scaling global recruitment networks. Focused on building systems that connect the world's top 1% of talent with companies that value excellence.",
    image: "/lovable-uploads/cff89055-2eee-4829-9e61-79d45d33d003.png",
    linkedin: "#",
    email: "cody@synapseint.com"
  }
];

const Team = () => {
  return (
    <PageTemplate 
      title="Our Team - Synapse International"
      description="Meet the leadership and global team behind Synapse's AI-first recruitment revolution"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Meet Our Global Team
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              The exceptional minds behind Synapse International's AI-first recruitment revolution, connecting the world's top 1% of talent with outstanding opportunities.
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
              Visionary leaders with over 11 years of combined experience in AI-powered recruitment innovation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {leadership.map((member, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-medium">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-synapse-dark mb-2">{member.name}</h3>
                  <p className="text-synapse-primary font-medium mb-4 text-lg">{member.role}</p>
                  <p className="text-synapse-gray mb-6 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex justify-center gap-4">
                    <a 
                      href={member.linkedin} 
                      className="w-12 h-12 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="w-12 h-12 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white hover:scale-110 transition-transform duration-300"
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

      {/* Team Structure */}
      <section className="py-20 bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Our Global Organization</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              A diverse, worldwide team committed to revolutionizing recruitment through AI and human expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Internal Team */}
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white">
                    <Users size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-synapse-dark">Internal Team</h3>
                    <p className="text-synapse-primary font-medium">10+ Core Team Members</p>
                  </div>
                </div>
                
                <div className="space-y-3 text-synapse-gray">
                  <div className="flex items-start gap-2">
                    <span className="text-synapse-primary">•</span>
                    <span><strong>Operations Lead:</strong> Streamlining global recruitment processes</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-synapse-primary">•</span>
                    <span><strong>Marketing Manager:</strong> Building our global brand presence</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-synapse-primary">•</span>
                    <span><strong>Community Lead:</strong> Managing our recruiter network</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-synapse-primary">•</span>
                    <span><strong>AI Engineers:</strong> Developing cutting-edge recruitment algorithms</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-synapse-primary">•</span>
                    <span><strong>Full Stack Engineers:</strong> Building our platform infrastructure</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Global Network */}
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white">
                    <Globe size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-synapse-dark">Global Network</h3>
                    <p className="text-synapse-primary font-medium">1K+ Professional Recruiters</p>
                  </div>
                </div>
                
                <div className="space-y-4 text-synapse-gray">
                  <p>
                    Our extensive freelance recruiter network spans across continents, bringing together the world's most skilled recruitment professionals.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <span className="text-synapse-primary">•</span>
                      <span>Specialized industry experts across all major sectors</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-synapse-primary">•</span>
                      <span>Regional specialists with local market knowledge</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-synapse-primary">•</span>
                      <span>Senior-level recruitment professionals</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="text-synapse-primary">•</span>
                      <span>Continuous training on AI-powered recruitment tools</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Our Culture & Mission</h2>
              <div className="space-y-4 text-synapse-gray">
                <p>
                  At Synapse International, we've built more than a company - we've created a global movement. Our team is united by a shared passion for connecting exceptional talent with extraordinary opportunities.
                </p>
                <p>
                  Founded in 2013 and headquartered in Los Angeles, CA, we operate with a remote-first mindset that attracts the best talent regardless of geography. Our culture celebrates innovation, excellence, and the belief that the right connection can transform careers and companies.
                </p>
                <p>
                  Every team member, from our Los Angeles headquarters to our global network, contributes to our mission of revolutionizing recruitment through AI-first technology and human expertise.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-synapse-lighter/30 to-synapse-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-synapse-dark mb-4">What Drives Our Team</h3>
              <ul className="space-y-3 text-synapse-gray">
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Passion for connecting the world's top 1% of talent</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Commitment to AI-first innovation in recruitment</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Global perspective with local expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Quality-over-quantity approach to everything we do</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Building long-term partnerships, not just transactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Network */}
      <section className="py-20 bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container-wide text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/30">
            <Sparkles className="h-4 w-4 text-white animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Join Our Global Network</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Be Part of Something Bigger?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Whether you're exceptional talent or a professional recruiter, there's a place for you in the Synapse family
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Get in Touch
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Team;
