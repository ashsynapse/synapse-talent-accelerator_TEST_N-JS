
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Globe, Award, TrendingUp, Heart } from "lucide-react";

const stats = [
  { number: "10,000+", label: "Successful Placements", icon: <Users size={24} /> },
  { number: "500+", label: "Partner Companies", icon: <Globe size={24} /> },
  { number: "15+", label: "Countries Served", icon: <Globe size={24} /> },
  { number: "98%", label: "Client Satisfaction", icon: <Award size={24} /> }
];

const values = [
  {
    icon: <Target size={32} />,
    title: "Excellence",
    description: "We strive for excellence in every placement, ensuring the perfect match between talent and opportunity."
  },
  {
    icon: <Heart size={32} />,
    title: "Integrity",
    description: "Built on trust and transparency, we maintain the highest ethical standards in all our relationships."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Innovation",
    description: "Leveraging cutting-edge AI technology to revolutionize traditional recruitment processes."
  },
  {
    icon: <Users size={32} />,
    title: "Partnership",
    description: "We view every client relationship as a long-term partnership focused on mutual success."
  }
];

const About = () => {
  return (
    <PageTemplate 
      title="About Synapse"
      description="Learn about our mission to transform recruitment through AI-powered solutions and human expertise"
    >
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              About Synapse International
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              We're transforming the recruitment industry by combining artificial intelligence with human expertise to create perfect matches between talent and opportunity.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="text-synapse-primary mb-3 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-synapse-dark mb-2">{stat.number}</div>
                  <div className="text-synapse-gray">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-synapse-gray">
                <p>
                  Founded in 2018, Synapse International emerged from a simple yet powerful vision: to revolutionize how companies find and hire exceptional talent in an increasingly complex global marketplace.
                </p>
                <p>
                  Our founders, seasoned recruitment professionals with decades of combined experience, recognized that traditional recruitment methods were struggling to keep pace with the rapidly evolving job market. They envisioned a solution that would blend the best of human insight with the power of artificial intelligence.
                </p>
                <p>
                  Today, we're proud to be at the forefront of recruitment innovation, serving companies from startups to Fortune 500 enterprises across 15+ countries. Our AI-powered platform has facilitated over 10,000 successful placements, transforming how businesses build their teams.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-synapse-primary/10 to-synapse-lighter/50 rounded-lg p-8">
              <blockquote className="text-xl italic text-synapse-dark mb-4">
                "Our mission is to create a world where every professional finds their perfect role, and every company builds their dream team."
              </blockquote>
              <cite className="text-synapse-gray">- Synapse International Leadership Team</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Our Core Values</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border hover:border-synapse-primary transition-colors duration-300 group">
                <CardContent className="p-6">
                  <div className="text-synapse-primary mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">{value.title}</h3>
                  <p className="text-synapse-gray">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <Target className="text-synapse-primary mb-4" size={32} />
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Our Mission</h3>
                <p className="text-synapse-gray">
                  To empower organizations worldwide by connecting them with exceptional talent through innovative AI-driven recruitment solutions that prioritize quality, efficiency, and human connection.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <TrendingUp className="text-synapse-primary mb-4" size={32} />
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Our Vision</h3>
                <p className="text-synapse-gray">
                  To become the global leader in intelligent recruitment, creating a future where finding the right talent is seamless, data-driven, and fundamentally human-centered.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-synapse-primary to-synapse-primary/80">
        <div className="container-wide text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Synapse Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of companies who trust us to build their exceptional teams
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8"
              onClick={() => window.location.href = "/contact"}
            >
              Get Started Today
            </Button>
            <Button 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-synapse-primary font-medium py-3 px-8"
              onClick={() => window.location.href = "/company/team"}
            >
              Meet Our Team
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default About;
