import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Sparkles, Heart, ArrowRight } from "lucide-react";

const Careers = () => {
  return (
    <PageTemplate 
      title="Careers at Synapse"
      description="Join the top 1% of exceptional talent. We don't post job boards - we reach out to truly exceptional candidates."
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              Are You in the Top 1%?
            </h1>
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              We don't have a traditional job board. Our DNA is to reach out to the top 1% of exceptional talent only - not job hoppers or those actively seeking positions. If you truly believe you're in that elite category of professionals, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Key Message Cards */}
      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="text-center border hover:border-synapse-primary transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <Target size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Exceptional Only</h3>
                <p className="text-synapse-gray">We seek the top 1% of talent - professionals who set the standard in their field</p>
              </CardContent>
            </Card>

            <Card className="text-center border hover:border-synapse-primary transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">AI-First Innovation</h3>
                <p className="text-synapse-gray">Join a company revolutionizing recruitment through cutting-edge AI technology</p>
              </CardContent>
            </Card>

            <Card className="text-center border hover:border-synapse-primary transition-colors duration-300 group">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-synapse-dark">Global Impact</h3>
                <p className="text-synapse-gray">Work with a team that's transforming how companies find exceptional talent worldwide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="standard-section bg-gradient-to-br from-synapse-lighter/20 to-white">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">Our Talent Philosophy</h2>
              <div className="space-y-4 text-synapse-gray">
                <p>
                  At Synapse International, we believe exceptional talent doesn't need to look for opportunities - opportunities should find them. That's why we don't operate traditional job boards or rely on active job seekers.
                </p>
                <p>
                  We work hard to identify and connect with professionals who are making real impact in their fields. If you're someone who consistently delivers exceptional results, drives innovation, and sets new standards in your industry, you're exactly who we're looking for.
                </p>
                <p>
                  Our AI-first approach combined with human expertise allows us to identify talent that others miss - the quiet achievers, the industry game-changers, the professionals who are too busy excelling to be actively job hunting.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-synapse-lighter/30 to-synapse-primary/10 rounded-lg p-8">
              <h3 className="text-xl font-bold text-synapse-dark mb-4">What We Look For</h3>
              <ul className="space-y-3 text-synapse-gray">
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Professionals who consistently exceed expectations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Leaders who drive innovation and change</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Experts who are recognized in their field</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Individuals with a track record of exceptional results</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-synapse-primary">•</span>
                  <span>Professionals who value quality over quantity</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Synapse */}
      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">Why Synapse International?</h2>
            <p className="text-xl text-synapse-gray max-w-2xl mx-auto">
              Join a company that's redefining the future of talent acquisition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Sparkles size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">AI-First Innovation</h3>
                <p className="text-synapse-gray">
                  We're pioneers in AI-powered recruitment, combining cutting-edge technology with human expertise to revolutionize how exceptional talent connects with outstanding opportunities.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Global Reach</h3>
                <p className="text-synapse-gray">
                  With 11+ years of experience serving 700+ companies worldwide, we operate at the forefront of global talent acquisition with a community of 1K+ professional recruiters.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Target size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">Quality Focus</h3>
                <p className="text-synapse-gray">
                  We're not interested in volume - we're obsessed with quality. Every placement we make is a testament to our commitment to connecting the right talent with the right opportunity.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-soft">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center text-white mb-4">
                  <Heart size={32} />
                </div>
                <h3 className="text-2xl font-bold text-synapse-dark mb-4">People-First Culture</h3>
                <p className="text-synapse-gray">
                  Our success is built on understanding that exceptional results come from exceptional people. We invest in relationships, not just transactions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="standard-section bg-gradient-to-br from-synapse-primary via-synapse-secondary to-synapse-tertiary relative overflow-hidden">
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
            <span className="text-white/90 text-sm font-medium">Think You're in the Top 1%?</span>
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join the Elite?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            If you truly believe you're among the most exceptional professionals in your field, we want to connect with you. We work hard to find candidates like you.
          </p>
          <Button 
            className="bg-white text-synapse-primary hover:bg-gray-100 font-medium py-3 px-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            onClick={() => window.location.href = "/contact"}
          >
            <span className="flex items-center gap-2">
              Contact Us - We'd Love to Hear From You
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Button>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Careers;
