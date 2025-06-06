import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Globe, Award, TrendingUp, Heart, Sparkles, Brain, ArrowRight } from "lucide-react";

const stats = [
  { number: "11+", label: "Years of Experience", icon: <Award size={24} /> },
  { number: "700+", label: "Companies Served", icon: <Globe size={24} /> },
  { number: "501-1K", label: "Recruiters Community", icon: <Users size={24} /> },
  { number: "12K+", label: "LinkedIn Followers", icon: <TrendingUp size={24} /> }
];

const whyUs = [
  {
    icon: <Brain size={32} />,
    title: "AI-First Technology",
    description: "We pioneered AI-powered recruitment, combining machine learning with human expertise to identify and connect exceptional talent faster than traditional methods."
  },
  {
    icon: <Sparkles size={32} />,
    title: "Fully Automated Platform",
    description: "Our proprietary technology automates the entire recruitment pipeline while maintaining the human touch where it matters most - in relationships and decision-making."
  },
  {
    icon: <Target size={32} />,
    title: "Top 1% Focus",
    description: "We don't chase volume. Our DNA is built around identifying and connecting with only the most exceptional talent - the top 1% who set industry standards."
  },
  {
    icon: <Globe size={32} />,
    title: "Global Network",
    description: "Operating worldwide with headquarters in Los Angeles, CA, we've built an extensive network of 1K+ professional recruiters across multiple continents."
  }
];

const values = [
  {
    icon: <Target size={32} />,
    title: "Excellence",
    description: "We strive for excellence in every placement, ensuring the perfect match between exceptional talent and outstanding opportunities."
  },
  {
    icon: <Heart size={32} />,
    title: "Integrity",
    description: "Built on trust and transparency, we maintain the highest ethical standards in all our relationships with candidates and clients."
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Innovation",
    description: "Since 2013, we've been at the forefront of recruitment technology, continuously pushing the boundaries of what's possible."
  },
  {
    icon: <Users size={32} />,
    title: "Partnership",
    description: "We view every relationship as a long-term partnership focused on mutual success and sustainable growth."
  }
];

const About = () => {
  return (
    <PageTemplate 
      title="About Synapse International"
      description="Founded in 2013, we're an AI-first recruitment company revolutionizing how exceptional talent connects with outstanding opportunities globally."
    >
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              About Synapse International
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              AI-first fully automated recruitment company founded in 2013, headquartered in Los Angeles, CA, operating globally. We're transforming how exceptional talent connects with outstanding opportunities.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center border-none shadow-soft">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-3 mx-auto">
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
      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Our Story</h2>
              <div className="space-y-4 text-synapse-gray">
                <p>
                  Founded in 2013 in Los Angeles, California, Synapse International emerged from a revolutionary vision: to create the world's first truly AI-powered recruitment platform that prioritizes quality over quantity.
                </p>
                <p>
                  Over 11 years ago, we recognized that traditional recruitment was fundamentally broken. Companies were drowning in resumes while exceptional talent remained hidden. We set out to build something different - a platform that could identify the top 1% of professionals who weren't actively job hunting but were open to extraordinary opportunities.
                </p>
                <p>
                  Today, we're proud to operate a global network of 501-1,000 recruiters serving more than 700 companies worldwide. Our AI-first approach has revolutionized how businesses discover and connect with exceptional talent, making us leaders in the recruitment technology space with over 12,000 followers on LinkedIn.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-synapse-primary/10 to-synapse-lighter/50 rounded-lg p-8">
              <blockquote className="text-xl italic text-synapse-dark mb-4">
                "Our mission is to connect the world's most exceptional talent with companies that truly value excellence, using AI to make impossible matches possible."
              </blockquote>
              <cite className="text-synapse-gray">- Synapse International Leadership Team</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Why Choose Synapse?</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              What sets us apart in the recruitment industry
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {whyUs.map((item, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-colors duration-300 group">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark">{item.title}</h3>
                  <p className="text-synapse-gray">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
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
                  <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
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
      <section className="py-16 bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-none shadow-soft h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Our Mission</h3>
                <p className="text-synapse-gray">
                  To revolutionize global talent acquisition by connecting the world's top 1% of professionals with companies that truly value excellence, using AI-powered technology to make extraordinary matches possible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft h-full">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Our Vision</h3>
                <p className="text-synapse-gray">
                  To become the global standard for AI-first recruitment, creating a future where exceptional talent and outstanding opportunities find each other seamlessly, regardless of geography or industry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            <span className="text-white/90 text-sm font-medium">Ready to Get Started?</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Synapse Difference?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies who trust us to connect them with the world's most exceptional talent
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Contact Us Today
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default About;
