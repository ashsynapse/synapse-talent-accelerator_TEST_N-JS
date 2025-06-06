
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Building, ArrowRight, MapPin, Calendar } from "lucide-react";

const realCaseStudies = [
  {
    title: "Joy: Building a Diverse, Remote Team in 2022",
    client: "Joy (Modern Wedding Planning Platform)",
    industry: "Technology/Wedding Tech",
    location: "San Francisco, $60M raised, Series B",
    year: "2022",
    image: "/lovable-uploads/09078dca-7470-4eda-abe6-33d54c86d89b.png",
    challenge: "Joy needed to scale their engineering team rapidly while maintaining their commitment to diversity and inclusion. They required talented professionals who could work remotely and contribute to their global platform.",
    solution: "We partnered with Joy in February 2022, shortly before they raised $60M USD in November of that same year. Our focus was on identifying diverse talent that aligned with their inclusive hiring initiatives.",
    results: {
      timeframe: "12 months",
      hires: "11 IT professionals",
      diversity: "3 female software engineers",
      impact: "Crucial to D&I hiring initiatives success"
    },
    description: "Joy is a modern wedding planning platform based in San Francisco and globally distributed. Our partnership helped them build a diverse, high-performing engineering team during a critical growth phase."
  },
  {
    title: "Breadwallet (BRD): Building a Fast-Paced Global Team",
    client: "Breadwallet (BRD)",
    industry: "Cryptocurrency/FinTech",
    location: "Switzerland (Global)",
    year: "2018",
    image: "/lovable-uploads/3a60314f-66de-4d4f-ac0c-15e36e4e3614.png",
    challenge: "In early 2018, Breadwallet was preparing for its Series A and B funding rounds. To support this growth, they needed to onboard exceptional talent in key roles, including a Chief Marketing Officer (CMO) and a VP of Product.",
    solution: "We partnered with Breadwallet to fill these critical positions. Our successful recruitment of seven key members, including their CMO and VP of Product, contributed to their successful acquisition by Coinbase in 2021.",
    results: {
      timeframe: "Partnership since 2018",
      hires: "7 key executive members",
      outcome: "Successful acquisition by Coinbase in 2021",
      impact: "Critical leadership positions filled"
    },
    description: "Breadwallet is a globally distributed cryptocurrency wallet provider headquartered in Switzerland. Our strategic hiring support helped position them for successful growth and eventual acquisition."
  },
  {
    title: "SERMO: Smart Leadership and Team Growth",
    client: "SERMO",
    industry: "Healthcare Technology",
    location: "Global (150 countries)",
    year: "2015-Present",
    image: "/lovable-uploads/c27016e5-d7ae-43a4-8cb4-405378ee6792.png",
    challenge: "SERMO faced a tough time, needing a leadership shake-up and a cost-effective way to grow its engineering team. Their plan was simple - hire experienced leaders to support CEO Peter Kirk in New York City, and create a new R&D team in Toronto.",
    solution: "In one year, we hired new VPs for Engineering, Product, Marketing, and Sales, plus Directors for Design/UX, Engagement, and IT. We also added 11 varied Software Engineers in Toronto, cutting the cost-per-hire by 32%.",
    results: {
      timeframe: "1 year",
      executiveHires: "Multiple VP and Director roles",
      engineeringTeam: "11 software engineers in Toronto",
      costSavings: "32% reduction in cost-per-hire"
    },
    description: "SERMO is a private social media network for physicians, open to licensed physicians in 150 countries. This smart, budget-friendly approach led to SERMO's successful comeback, showing the importance of strategic hiring and wise location choices."
  },
  {
    title: "Gojek: International Executive Hires and Talent Acquisition",
    client: "Gojek",
    industry: "Technology/Ride-sharing",
    location: "Indonesia/Southeast Asia",
    year: "Recent",
    image: "/lovable-uploads/57579ccb-5396-4eba-bfe1-d322ce885c74.png",
    challenge: "Gojek, Indonesia's leading Decacorn and the driving force behind the Southeast Asian market, entrusted us with the crucial task of recruiting key international executives for their Jakarta headquarters.",
    solution: "Our team successfully recruited the Chief Data Officer and Chief Product Officer for Gojek, securing top talent for their leadership positions. Additionally, we bolstered their team with skilled Software Engineers and Product Managers.",
    results: {
      executiveHires: "Chief Data Officer & Chief Product Officer",
      additionalHires: "Software Engineers and Product Managers",
      impact: "Strategic talent acquisition for market leadership",
      scope: "International executive search"
    },
    description: "Gojek, the first Decacorn in Indonesia, serves as the operating system for Southeast Asia, powering emerging market economies through its superapp. This strategic talent acquisition contributed to Gojek's ongoing growth and solidified its position as a dominant force in the Southeast Asian market."
  },
  {
    title: "Uniswap: Smart Contract Engineer for Crypto Exchange",
    client: "Uniswap",
    industry: "Cryptocurrency/DeFi",
    location: "NYC based, Series B, 176M total funding",
    year: "Recent",
    image: "/lovable-uploads/ec3edb28-2f56-461e-b31f-cb1a9fc8e686.png",
    challenge: "To find a Smart Contract Engineer who could continue to elevate the reputation and credibility of their brand, and make significant improvements to its protocol.",
    solution: "We were able to find one of the top-rated smart contract engineers and auditors in the industry from OpenZeppelin who has since been contributing to improve the already high industry standard of smart contract development at Uniswap.",
    results: {
      hire: "Top-rated Smart Contract Engineer from OpenZeppelin",
      impact: "Elevated protocol development standards",
      outcome: "Continued industry leadership",
      expertise: "Smart contract development and auditing"
    },
    description: "Uniswap is the largest decentralized exchange and the fourth-largest cryptocurrency exchange overall by daily trading volume created by Hayden Adams. Our recruitment helped them secure world-class blockchain talent to maintain their market-leading position."
  }
];

const CaseStudies = () => {
  return (
    <PageTemplate 
      title="Case Studies"
      description="Real success stories showcasing how we've helped companies transform their recruitment and build exceptional teams"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Discover how we've helped leading companies across industries build exceptional teams and achieve their growth objectives through strategic talent acquisition
            </p>
          </div>

          {/* Real Case Studies */}
          <div className="space-y-12 mb-16">
            {realCaseStudies.map((study, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="relative h-64 md:h-full">
                      <img
                        src={study.image}
                        alt={study.client}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-synapse-primary/20 to-transparent"></div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-2">
                            <Building size={16} className="text-synapse-primary" />
                            <span className="text-sm text-synapse-gray font-medium">{study.industry}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-synapse-primary" />
                            <span className="text-sm text-synapse-gray">{study.year}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-synapse-dark mb-2 group-hover:text-synapse-primary transition-colors">
                          {study.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3">
                          <MapPin size={16} className="text-synapse-primary" />
                          <span className="text-synapse-gray font-medium">{study.location}</span>
                        </div>
                        <p className="text-synapse-gray text-sm mb-4">{study.description}</p>
                      </div>

                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-synapse-dark mb-2">Challenge</h4>
                          <p className="text-synapse-gray text-sm">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-synapse-dark mb-2">Solution</h4>
                          <p className="text-synapse-gray text-sm">{study.solution}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="bg-synapse-lighter/50 rounded-lg p-4">
                        <h4 className="font-semibold text-synapse-dark mb-3">Key Results</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {Object.entries(study.results).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2">
                              <TrendingUp size={14} className="text-synapse-primary flex-shrink-0" />
                              <span className="text-sm text-synapse-dark">
                                <strong className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</strong> {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join leading companies like Joy, Breadwallet, SERMO, Gojek, and Uniswap who have transformed their teams with our strategic talent acquisition solutions
            </p>
            <Button 
              className="bg-white text-synapse-primary hover:bg-synapse-lighter text-lg py-4 px-8 font-semibold"
              onClick={() => window.location.href = "/contact"}
            >
              Start Your Journey
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default CaseStudies;
