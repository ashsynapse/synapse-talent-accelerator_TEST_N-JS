import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail, Award, Users, Brain, Target } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const Team = () => {
  return (
    <PageTemplate 
      title="Our Team | Meet the Synapse Leaders"
      description="Meet the talented team behind Synapse's AI-powered recruitment revolution"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              Meet Our Team
            </h1>
            
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              The passionate professionals driving innovation in AI-powered recruitment and transforming how companies find exceptional talent.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <Card className="border hover:border-synapse-primary transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                  <img 
                    src="/lovable-uploads/team/ali-taghikhani.jpg"
                    alt="Ali Taghikhani" 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <h3 className="text-xl font-bold text-synapse-dark mb-2 text-center">Ali Taghikhani</h3>
                <p className="text-synapse-gray mb-4 text-center">CEO</p>
                <div className="flex justify-center gap-4">
                  <a href="https://www.linkedin.com/in/alitaghikhani/" target="_blank" rel="noopener noreferrer" className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:ali@synapseint.com" className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="border hover:border-synapse-primary transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                  <img 
                    src="/lovable-uploads/team/john-doe.jpg"
                    alt="John Doe" 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <h3 className="text-xl font-bold text-synapse-dark mb-2 text-center">John Doe</h3>
                <p className="text-synapse-gray mb-4 text-center">CTO</p>
                <div className="flex justify-center gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:john.doe@synapseint.com" className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="border hover:border-synapse-primary transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="relative overflow-hidden rounded-full w-24 h-24 mx-auto mb-4">
                  <img 
                    src="/lovable-uploads/team/jane-smith.jpg"
                    alt="Jane Smith" 
                    className="object-cover w-full h-full" 
                  />
                </div>
                <h3 className="text-xl font-bold text-synapse-dark mb-2 text-center">Jane Smith</h3>
                <p className="text-synapse-gray mb-4 text-center">Head of Talent</p>
                <div className="flex justify-center gap-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="mailto:jane.smith@synapseint.com" className="text-synapse-primary hover:text-synapse-secondary transition-colors">
                    <Mail size={20} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default Team;
