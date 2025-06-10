import { Metadata } from 'next';
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Users, Target, Clock, Globe, UserCheck, Briefcase, GraduationCap } from "lucide-react";
import FinalCtaSection from "@/components/FinalCtaSection";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Recruitment Solutions',
  description: 'Comprehensive AI-powered recruitment solutions for modern hiring challenges',
};

const solutions = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Passive Recruitment",
    description: "AI-powered sourcing to identify and engage top talent who aren't actively job searching",
    href: "/recruitment-solutions/passive-recruitment"
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Candidate Sourcing",
    description: "Comprehensive candidate sourcing strategies to find the perfect match for your roles",
    href: "/recruitment-solutions/candidate-sourcing"
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Project Staffing",
    description: "Specialized staffing solutions for short-term and long-term project requirements",
    href: "/recruitment-solutions/project-staffing"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Executive Search",
    description: "Specialized recruitment for C-level and senior leadership positions",
    href: "/recruitment-solutions/executive-search"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Remote Staffing",
    description: "Global remote talent acquisition for distributed teams and remote-first companies",
    href: "/recruitment-solutions/remote-staffing"
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Permanent Staffing",
    description: "Full-time permanent placement services across all industries and skill levels",
    href: "/recruitment-solutions/permanent-staffing"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Contingent Staffing",
    description: "Flexible staffing solutions for temporary and contract positions",
    href: "/recruitment-solutions/contingent-staffing"
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Apprenticeship Recruitment",
    description: "Specialized recruitment for apprenticeship programs and early career professionals",
    href: "/recruitment-solutions/apprenticeship-recruitment"
  }
];

export default function RecruitmentSolutionsPage() {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Solutions
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              End-to-end recruitment solutions powered by AI and backed by global expertise. From passive recruitment to executive search, we deliver tailored strategies that transform your hiring process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="border border-gray-100 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 group h-full">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="w-16 h-16 bg-gradient-to-r from-synapse-primary to-synapse-secondary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {solution.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-synapse-dark">{solution.title}</h3>
                  <p className="text-synapse-gray mb-6 flex-grow leading-relaxed">{solution.description}</p>
                  <Link href={solution.href}>
                    <Button 
                      variant="outline" 
                      className="w-full border-synapse-primary text-synapse-primary hover:bg-synapse-light mt-auto"
                    >
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <FinalCtaSection />
      <Footer />
    </div>
  );
}