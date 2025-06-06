import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Globe, Target, Award, TrendingUp, Heart, Lightbulb } from "lucide-react";
import FinalCtaSection from "../../components/FinalCtaSection";

const About = () => {
  return (
    <PageTemplate 
      title="About Synapse | AI-Powered Recruitment Leaders"
      description="Learn about Synapse International's mission to revolutionize recruitment through AI technology and human expertise"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              About Synapse
            </h1>
            
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              We're revolutionizing recruitment by combining cutting-edge AI technology with human expertise to connect exceptional talent with outstanding opportunities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Our Mission</h2>
              <p className="text-xl text-synapse-gray mb-8">
                To empower companies to build exceptional teams by connecting them with top talent through AI-driven recruitment solutions.
              </p>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Our Vision</h2>
              <p className="text-xl text-synapse-gray">
                To be the global leader in AI-powered recruitment, transforming how companies and talent connect.
              </p>
            </div>
            <div className="space-y-6">
              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                    <Brain size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-synapse-dark mb-4">AI-Powered</h3>
                  <p className="text-synapse-gray">
                    We leverage cutting-edge AI technology to identify, engage, and assess top talent.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                    <Users size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-synapse-dark mb-4">Global Reach</h3>
                  <p className="text-synapse-gray">
                    We connect companies with talent from around the world, expanding your hiring pool.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="standard-section bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              We've helped hundreds of companies transform their hiring process and build exceptional teams.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                  <Globe size={32} />
                </div>
                <div className="text-4xl font-bold text-synapse-dark mb-2">700+</div>
                <p className="text-synapse-gray">Companies Served</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                  <Target size={32} />
                </div>
                <div className="text-4xl font-bold text-synapse-dark mb-2">98%</div>
                <p className="text-synapse-gray">Client Satisfaction</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                  <Award size={32} />
                </div>
                <div className="text-4xl font-bold text-synapse-dark mb-2">11+</div>
                <p className="text-synapse-gray">Years of Experience</p>
              </CardContent>
            </Card>

            <Card className="text-center border-none shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                  <TrendingUp size={32} />
                </div>
                <div className="text-4xl font-bold text-synapse-dark mb-2">40%</div>
                <p className="text-synapse-gray">Faster Time-to-Hire</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              These values guide everything we do, from how we work with our clients to how we build our team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Lightbulb size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Innovation</h3>
                <p className="text-synapse-gray">
                  We're always pushing the boundaries of what's possible in recruitment through AI and technology.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">People-First</h3>
                <p className="text-synapse-gray">
                  We believe that people are the most important asset, and we treat everyone with respect and empathy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Excellence</h3>
                <p className="text-synapse-gray">
                  We're committed to delivering the highest quality service and results to our clients and candidates.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="standard-section bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Meet the experienced leaders driving Synapse International's vision and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-none shadow-soft">
              <CardContent className="p-6">
                <img
                  src="/lovable-uploads/4e0b1cf8-ab85-4f55-a3fb-5f39206731ef.png"
                  alt="Ali Taghikhani"
                  className="rounded-full w-24 h-24 mx-auto mb-4"
                />
                <h3 className="text-2xl font-bold text-synapse-dark mb-2 text-center">
                  Ali Taghikhani
                </h3>
                <p className="text-synapse-gray text-center">
                  CEO
                </p>
              </CardContent>
            </Card>

            {/* Add more team members here */}
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </PageTemplate>
  );
};

export default About;
