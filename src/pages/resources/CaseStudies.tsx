import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, Users, Award, ArrowRight, CheckCircle } from "lucide-react";

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
  },
  {
    title: "Polymath Network: Finding Professionals That Build Exceptional Products",
    client: "Polymath Network",
    industry: "Blockchain/Security Tokens",
    location: "Barbados based, $58M ICO",
    year: "Recent",
    image: "/lovable-uploads/c5a92efe-bd92-4c6c-8c65-9c205e21a1a9.png",
    challenge: "The challenge was to help them find a Product Designer who could improve the look, feel, and experience of their platform. Driving more users, engagement, and growth of the platform.",
    solution: "We found a Designer who came from ConsenSys and already had deep experience working in Blockchain projects professionally and personally. He was not only the right technical fit, he was a great cultural fit.",
    results: {
      hire: "Product Designer from ConsenSys",
      expertise: "Blockchain experience professionally and personally",
      impact: "Improved platform UX and user engagement",
      culturalFit: "Great alignment with company values"
    },
    description: "Polymath Network is an institutional-grade open-source blockchain built specifically for regulated assets and one of the first to focus on Security Tokens. Our successful placement helped enhance their platform's user experience and drive growth."
  },
  {
    title: "Exodus: The Right Cultural Fit for Crypto Wallets",
    client: "Exodus",
    industry: "Cryptocurrency/Digital Wallets",
    location: "Venture & Stock Offering, 110M Total",
    year: "Recent",
    image: "/lovable-uploads/3b991102-a9cf-49c8-9cf0-c1753507e459.png",
    challenge: "Exodus had already established itself as a major player in the market and had been getting prepared to make its first public offering of Class A stock. They wanted to make a push with marketing and continue developing their online communities.",
    solution: "We helped them successfully hire a talented Social Media Manager who previously worked at Litecoin to run their Twitter Page who helped improve growth in their following and engagement on the platform. We later brought in a Product Marketing Director from ShapeShift to focus on the direction of the product and expansion into other features and offerings.",
    results: {
      socialMediaManager: "Previously worked at Litecoin",
      productMarketingDirector: "From ShapeShift",
      impact: "Improved social media growth and engagement",
      expansion: "Product direction and feature development"
    },
    description: "Exodus is a multi-asset software wallet that removes the geek requirement and keeps design a priority to make cryptocurrency and digital assets easy for everyone. Our strategic hires helped position them for their successful public offering and continued market growth."
  },
  {
    title: "Conduit: Bulk Engineers for Fast Growing Start-ups",
    client: "Conduit",
    industry: "FinTech/Payments",
    location: "Boston based, Seed Round Funded, $17M",
    year: "Recent",
    image: "/lovable-uploads/8f9b6048-531f-4cf9-8283-4a044062f598.png",
    challenge: "Conduit had begun making significant growth in their platform and customer base and it was time to start scaling. They needed to hire several engineers to help build new features and work on scaling the platform to handle even more increased volume.",
    solution: "We helped them hire 3 talented engineers who came in and made significant contributions to the growth of the product and Conduit is now continuing to ramp up making a name for themselves in the DeFi space around the world.",
    results: {
      engineers: "3 talented engineers hired",
      impact: "Significant contributions to product growth",
      outcome: "Successful scaling and DeFi market presence",
      growth: "Platform ready for increased volume"
    },
    description: "Conduit is a company based in Boston that offers a financial API for payments, on ramps, wallets, DeFi. Our engineering talent helped them scale their platform effectively and establish themselves as a prominent player in the DeFi ecosystem."
  },
  {
    title: "Senior Management for the Hospitality Industry",
    client: "Hospitality Investment Firm",
    industry: "Hospitality/Investment",
    location: "United States, Miami, Barton G",
    year: "September 2023",
    image: "/lovable-uploads/7a3a9db9-10ef-4c53-b923-1103d086acc3.png",
    challenge: "It was a very senior position, VP of Sales, and they tried posting it on LinkedIn but they couldn't find anyone as senior. There was a disconnect between what the owner and what the hiring manager wanted.",
    solution: "In a single call we understood our client's pain. We did outreach, tapped onto our network, and looked for people with: experience in the hospitality industry, sales, and with senior management experience. We found them amazing candidates, among them one with a particular affinity for the brand and they began their role within 10 days.",
    results: {
      position: "VP of Sales",
      timeToHire: "10 days from start to placement",
      targetExperience: "Hospitality, sales, senior management",
      outcome: "Strong brand affinity and immediate impact"
    },
    description: "A thesis-driven, early growth investor for exceptional entrepreneurs building enterprise software companies in the hospitality sector. Our targeted approach and network leverage helped them find the perfect senior executive match quickly and efficiently."
  },
  {
    title: "Telescope Partners: Long Time Partnership with a Venture Capital Firm",
    client: "Telescope Partners",
    industry: "Venture Capital/Investment",
    location: "San Francisco, US",
    year: "September 2023",
    image: "/lovable-uploads/b0e2609b-d5dc-4592-a7dd-37f21dcc3ef6.png",
    challenge: "They had no experience hiring abroad and wanted to test the waters with candidates in the same time zone. They wanted a software developer at first.",
    solution: "They loved and hired the first candidate we sent them. Now, we are hiring 2 more candidates and referred us to two other companies in their portfolio, and we hired for them.",
    results: {
      firstHire: "Immediate success with first candidate",
      expansion: "2 additional hires in progress",
      referrals: "Referred to 2 portfolio companies",
      partnership: "Long-term ongoing relationship"
    },
    description: "Telescope Partners is a thesis-driven, early growth investor for exceptional entrepreneurs building enterprise software companies. Our successful partnership demonstrates the value of quality placements and has expanded to include multiple portfolio companies through referrals."
  },
  {
    title: "The Latest Scoop: Long Time Partnership with a Venture Capital Firm",
    client: "The Latest Scoop",
    industry: "Retail/Lifestyle",
    location: "Vancouver, Canada",
    year: "September 2023",
    image: "/lovable-uploads/f4a6fd4b-02af-4c94-b61c-7b5bcf903d24.png",
    challenge: "They wanted a senior creative director to be in charge of the vision of the brick and mortar stores. They had tried looking on their own.",
    solution: "We outreached to several professionals and made two proposals. They ended up hiring one as Sr. Creative Director, and loved the other one so much, they opened a position tailored to them. After that, we continue to hire other roles for them, such as Graphic Designer from Argentina.",
    results: {
      seniorCreativeDirector: "Successfully hired Sr. Creative Director",
      additionalHire: "Created tailored position for second candidate",
      continuedPartnership: "Ongoing hiring for multiple roles",
      internationalTalent: "Graphic Designer from Argentina"
    },
    description: "The Latest Scoop is a lifestyle concept store where buyers travel the world - Los Angeles, New York, Paris, Toronto - to curate a unique mix of products including fashion, furniture, home decor, accessories, footwear, stationary and gifts. Our buying is not based on brands, but instead on what we believe to be beautiful, affordable and desirable."
  },
  {
    title: "Katimavik: Making a Candidate Fall in Love with the Organization's Mission",
    client: "Katimavik",
    industry: "Non-Profit/Youth Development",
    location: "Montreal, Canada",
    year: "September 2023",
    image: "/lovable-uploads/57a49bd8-d0eb-485b-b8ea-98378d62e2bc.png",
    challenge: "They needed to hire an HR officer who was local to Montreal, bilingual, with extensive experience in local laws, but being a non-profit organization, they had limited budget.",
    solution: "We realized it was a tricky role, because we had several obstacles: low budget and geographic constraints. We approached several qualified candidates, with one sticking out. We talked to her about the mission of the organization and he happily took on the position because of it.",
    results: {
      localHire: "Successfully hired local Montreal HR officer",
      bilingualRequirement: "Met bilingual language requirements",
      budgetConstraints: "Worked within non-profit budget limitations",
      missionAlignment: "Candidate motivated by organization's mission"
    },
    description: "Katimavik is a registered charity that engages Canadian youth through volunteer work. Katimavik provides opportunities for young Canadians to participate in five to six-month periods of community service throughout the country via the National Experience program."
  }
];

const CaseStudies = () => {
  return (
    <PageTemplate 
      title="Case Studies | Synapse Success Stories"
      description="Discover how leading companies have transformed their hiring with Synapse's AI-powered recruitment solutions"
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              Success Stories
            </h1>
            
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              Real results from companies that transformed their hiring process with our AI-powered recruitment solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="standard-section bg-white">
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
              Join leading companies like Joy, Breadwallet, SERMO, Gojek, Uniswap, Polymath, Exodus, Conduit, Katimavik, The Latest Scoop, and many more who have transformed their teams with our strategic talent acquisition solutions
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
