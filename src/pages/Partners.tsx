
import React from "react";
import PageTemplate from "../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Handshake, Zap, Globe, Target, Award } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const partnershipTypes = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Technology Partners",
    description: "Integrate with our AI-powered recruitment platform to enhance your existing solutions and provide added value to your clients.",
    benefits: ["API Integration", "White-label Solutions", "Technical Support"]
  },
  {
    icon: <Handshake className="w-8 h-8" />,
    title: "Strategic Alliances",
    description: "Form strategic partnerships to expand market reach and create mutually beneficial business opportunities.",
    benefits: ["Market Expansion", "Resource Sharing", "Joint Ventures"]
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Channel Partners",
    description: "Become a reseller or distributor of our recruitment solutions and earn competitive commissions.",
    benefits: ["Revenue Sharing", "Sales Training", "Marketing Support"]
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Global Partners",
    description: "Expand our international presence while leveraging local market expertise and networks.",
    benefits: ["Local Market Access", "Cultural Expertise", "Regional Support"]
  }
];

const partnerBenefits = [
  "Access to cutting-edge AI recruitment technology",
  "Comprehensive training and certification programs",
  "Dedicated partner support and account management",
  "Co-marketing opportunities and lead sharing",
  "Competitive revenue sharing models",
  "Early access to new features and products"
];

const techPartners = [
  {
    name: "Apollo",
    logo: "/lovable-uploads/50bda3cf-d5f9-4108-80a3-1463404614f1.png",
    description: "Apollo.io is the leading B2B sales intelligence and engagement platform, trusted by over 160,000 companies and more than one million users globally."
  },
  {
    name: "Top Echelon",
    logo: "/lovable-uploads/a34c31f9-4ee0-4675-94d8-2d2e676b8536.png",
    description: "Top Echelon is an applicant tracking and recruiting software designed to help businesses streamline their hiring process."
  },
  {
    name: "ZoomInfo",
    logo: "/lovable-uploads/28965736-5cf7-4e1e-bc4e-62767ac5c500.png",
    description: "ZoomInfo is how business goes to market (GTM). Powered by real-time data and insights, our unified engagement platform helps sales and marketing teams find, acquire, and grow customers."
  },
  {
    name: "Multiplier",
    logo: "/lovable-uploads/ca7321d2-36a2-4c51-8900-af1afc5a6963.png",
    description: "The World's Leading Global Human Platform, Multiplier simplifies global employment. Powered by advanced technology and local expertise, our platform enables businesses to hire, onboard, and manage employees across the world seamlessly."
  }
];

const toolboxCategories = [
  "SRN Recruiter's Toolbox",
  "Human Resources",
  "Finance & Accounting",
  "Marketing Development",
  "E-commerce"
];

const Partners = () => {
  return (
    <PageTemplate 
      title="Partnership Opportunities"
      description="Join forces with Synapse to create innovative recruitment solutions and expand your business reach"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto mb-8">
              Join our growing network of partners and unlock new opportunities for mutual growth and success
            </p>
            <Button className="btn-primary">
              Become a Partner
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Partners Section */}
      <section className="py-16 bg-synapse-lighter/20">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Our Technology Partners
            </h2>
            <p className="text-synapse-gray max-w-2xl mx-auto mb-8">
              We collaborate with industry-leading technology platforms to deliver exceptional recruitment solutions
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {toolboxCategories.map((category, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white rounded-full shadow-soft border border-synapse-light/30 text-synapse-primary text-sm font-medium"
                >
                  {category}
                </span>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techPartners.map((partner, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center justify-between h-full">
                  <div className="w-full mb-6 flex justify-center items-center h-32 bg-white rounded-lg p-4">
                    <img 
                      src={partner.logo}
                      alt={partner.name}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-synapse-dark mb-3">{partner.name}</h3>
                    <p className="text-sm text-synapse-gray">{partner.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-wide">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-synapse-dark mb-4">
              Partnership Types
            </h2>
            <p className="text-synapse-gray max-w-2xl mx-auto">
              We offer various partnership models to suit different business needs and objectives
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {partnershipTypes.map((type, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-synapse-lighter rounded-lg flex items-center justify-center text-synapse-primary mb-4">
                    {type.icon}
                  </div>
                  <CardTitle className="text-xl text-synapse-dark">
                    {type.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-synapse-gray mb-4">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-synapse-primary rounded-full"></div>
                        <span className="text-synapse-gray">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-synapse-lighter/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-synapse-dark mb-6">
                Why Partner with Synapse?
              </h2>
              <p className="text-synapse-gray mb-8">
                Our partnership program is designed to create win-win relationships that drive growth, innovation, and success for all parties involved.
              </p>
              
              <ul className="space-y-4">
                {partnerBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-synapse-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-synapse-gray">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-medium">
              <div className="text-center mb-6">
                <Award className="w-16 h-16 text-synapse-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-synapse-dark mb-2">
                  Ready to Partner?
                </h3>
                <p className="text-synapse-gray">
                  Let's discuss how we can work together to achieve mutual success
                </p>
              </div>
              
              <div className="space-y-4">
                <Button className="btn-primary w-full" onClick={() => window.location.href = "/contact"}>
                  Start Partnership Discussion
                </Button>
                <Button variant="outline" className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light">
                  Download Partner Kit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Partners;
