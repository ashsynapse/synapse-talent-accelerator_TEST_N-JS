import { Metadata } from 'next';
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Recruitment Blog',
  description: 'Stay updated with the latest insights, trends, and best practices in recruitment and talent acquisition',
};

const blogPosts = [
  {
    title: "The Rise of Side Hustles: Why Gen Z is Shaping the Gig Economy",
    excerpt: "In recent years, the gig economy has seen exponential growth, driven largely by Generation Z. This digitally savvy generation is redefining work culture by embracing flexibility, entrepreneurship, and multiple streams of income.",
    author: "SRN Knowledge Base",
    date: "February 21, 2025",
    readTime: "6 min read",
    category: "Industry Insights",
    href: "/blogs/side-hustles-gig-economy"
  },
  {
    title: "How Gen Z is Redefining the Job Market: Trends Recruiters Need to Know",
    excerpt: "The job market is undergoing a transformation, driven by the entry of Generation Z. As the first fully digital-native generation, Gen Z brings new expectations, values, and work habits that are reshaping hiring practices.",
    author: "SRN Knowledge Base",
    date: "February 18, 2025",
    readTime: "7 min read",
    category: "Industry Insights",
    href: "/blogs/gen-z-job-market"
  },
  {
    title: "Remote Recruitment: A Comprehensive Guide",
    excerpt: "Remote recruitment involves sourcing, interviewing, assessing, and hiring employees for remote positions using online tools. In today's digital age, an efficient remote hiring process is essential for organizations.",
    author: "SRN Knowledge Base",
    date: "February 10, 2025",
    readTime: "8 min read",
    category: "Remote Work",
    href: "/blogs/remote-recruitment-guide"
  },
  {
    title: "Remote Recruitment Made Simple",
    excerpt: "In today's fast-paced digital world, remote recruitment has become not just a trend but a necessity for many organizations. As companies expand their horizons beyond geographical boundaries, the ability to attract and hire top talent from anywhere in the world is crucial.",
    author: "SRN Knowledge Base",
    date: "January 31, 2025",
    readTime: "5 min read",
    category: "Remote Work",
    href: "/blogs/remote-recruitment-simple"
  },
  {
    title: "Speed Matters in Recruitment: Why Moving Fast is the Key to Success",
    excerpt: "In today's hyper-competitive business landscape, time is one of the most valuable resources. For organizations looking to grow, innovate, and stay ahead of the competition, the ability to hire top talent quickly is no longer a luxury — it's a necessity.",
    author: "SRN Knowledge Base",
    date: "January 28, 2025",
    readTime: "6 min read",
    category: "Recruitment Strategy",
    href: "/blogs/speed-matters-recruitment"
  },
  {
    title: "Building the Future of Recruiting at SRN!",
    excerpt: "As we embark on a transformative journey at SRN, we're excited to share our ambitious plans to integrate artificial intelligence (AI) into every facet of our recruitment process.",
    author: "SRN Knowledge Base",
    date: "January 24, 2025",
    readTime: "6 min read",
    category: "Company Updates",
    href: "/blogs/future-of-recruiting"
  },
  {
    title: "Expert Hiring Tips for HR Leaders",
    excerpt: "In today's competitive job market, effective hiring is crucial for organizations aiming to attract and retain top talent. HR leaders play a pivotal role in this process.",
    author: "SRN Knowledge Base",
    date: "January 21, 2025",
    readTime: "8 min read",
    category: "HR Leadership",
    href: "/blogs/expert-hiring-tips"
  },
  {
    title: "Global Hiring Trends & Insights for 2025",
    excerpt: "As we step into 2025, the hiring landscape is undergoing significant transformations, influenced by technological advancements, changing workforce demographics, and evolving candidate expectations.",
    author: "SRN Knowledge Base",
    date: "January 17, 2025",
    readTime: "7 min read",
    category: "Industry Insights",
    href: "/blogs/global-hiring-trends-2025"
  },
  {
    title: "Retention and Succession Planning — Strategies to Ensure Long-Term Employee Engagement and Retention",
    excerpt: "In today's competitive job market, organizations face the challenge of retaining top talent while ensuring a smooth transition of leadership.",
    author: "SRN Knowledge Base",
    date: "January 14, 2025",
    readTime: "8 min read",
    category: "HR Strategy",
    href: "/blogs/retention-succession-planning"
  },
  {
    title: "Enhancing Employer Branding: Strategies to Attract Top Talent",
    excerpt: "In today's competitive job market, a strong employer brand is essential for attracting and retaining top talent. Companies must focus on how they present themselves to potential candidates.",
    author: "SRN Knowledge Base",
    date: "January 10, 2025",
    readTime: "7 min read",
    category: "Employer Branding",
    href: "/blogs/employer-branding"
  },
  {
    title: "Talent Acquisition Strategies: Best Practices for Sourcing and Attracting Top Talent Using AI and LinkedIn",
    excerpt: "As we enter 2025, the competition for top talent is fiercer than ever. Organizations must employ innovative talent acquisition strategies to effectively source and attract the best candidates.",
    author: "SRN Knowledge Base",
    date: "January 7, 2025",
    readTime: "9 min read",
    category: "Talent Acquisition",
    href: "/blogs/talent-acquisition-strategies"
  },
  {
    title: "Top 5 Recruitment Trends Shaping 2025",
    excerpt: "As we step into 2025, the recruitment landscape is set to undergo significant transformations driven by technological advancements and changing workforce expectations.",
    author: "SRN Knowledge Base",
    date: "January 3, 2025",
    readTime: "6 min read",
    category: "Industry Insights",
    href: "/blogs/recruitment-trends-2025"
  },
  {
    title: "A Step-by-Step Guide to Hiring and Managing an Outsourced Development Team for Tech Startups",
    excerpt: "Outsourcing software development is an increasingly popular choice for tech startups. It offers access to specialized expertise, cost efficiency, and a quicker path to achieving your goals.",
    author: "SRN Knowledge Base",
    date: "December 27, 2024",
    readTime: "8 min read",
    category: "Tech Startups",
    href: "/blogs/outsourced-development-team"
  },
  {
    title: "AI's Role in Shaping Recruitment: What to Expect in 2025",
    excerpt: "As 2024 comes to a close, artificial intelligence is transforming recruitment, not just in efficiency but in fundamentally reimagining the hiring process.",
    author: "SRN Knowledge Base",
    date: "December 24, 2024",
    readTime: "7 min read",
    category: "AI & Technology",
    href: "/blogs/ai-recruitment-2025"
  },
  {
    title: "Why 75% of Top Employers Prefer Hiring Through Referral-Based Platforms Like Synapse",
    excerpt: "In today's competitive job market, recruitment strategies are evolving rapidly, with many companies turning to innovative platforms and methods to find the best talent.",
    author: "SRN Knowledge Base",
    date: "December 21, 2024",
    readTime: "8 min read",
    category: "Industry Insights",
    href: "/blogs/referral-platforms"
  },
  {
    title: "Upcoming Changes to SRN — Web App Beta",
    excerpt: "In August 2024, Synapse International launched a pilot project, Synapse Recruiter Network (SRN), and now we're ready for the next phase.",
    author: "Cody & Ali",
    date: "November 7, 2024",
    readTime: "6 min read",
    category: "Company Updates",
    href: "/blogs/srn-web-app"
  },
  {
    title: "Using ChatGPT + Google Xray Boolean to Find Candidates Not Active on LinkedIn",
    excerpt: "Learn how to combine ChatGPT and Google Xray/boolean search to find amazing candidates who don't spend much time on LinkedIn.",
    author: "Ali Taghikhani",
    date: "October 17, 2024",
    readTime: "7 min read",
    category: "Sourcing Strategies",
    href: "/blogs/google-xray-boolean"
  },
  {
    title: "Using ChatGPT: Telling us why a candidate is NOT a fit",
    excerpt: "Discover how leveraging ChatGPT could save valuable time when identifying candidates who aren't the right fit for specific roles.",
    author: "SRN Knowledge Base",
    date: "October 9, 2024",
    readTime: "4 min read",
    category: "AI & Technology",
    href: "/blogs/chatgpt-fit-analysis"
  },
  {
    title: "Using ChatGPT for Higher Quality Candidate Submissions",
    excerpt: "In today's fast-paced recruiting landscape, AI-powered tools like ChatGPT can streamline the process and enhance submission quality.",
    author: "SRN Knowledge Base",
    date: "October 9, 2024",
    readTime: "5 min read",
    category: "AI & Technology",
    href: "/blogs/chatgpt-quality"
  },
  {
    title: "How to Keep Candidates Engaged During the Recruitment Process",
    excerpt: "As a third-party recruiter working on behalf of undisclosed companies, keeping candidates engaged can be challenging. Here are proven strategies.",
    author: "SRN Knowledge Base",
    date: "September 30, 2024",
    readTime: "8 min read",
    category: "Talent Acquisition",
    href: "/blogs/candidate-engagement"
  },
  {
    title: "LinkedIn Optimization (Tips and Best Practices)",
    excerpt: "Comprehensive guidelines on optimizing your LinkedIn profile to attract top candidates and increase your placements.",
    author: "SRN Knowledge Base",
    date: "September 30, 2024",
    readTime: "12 min read",
    category: "Professional Development",
    href: "/blogs/linkedin-optimization"
  },
  {
    title: "How to Source Talent Strategically Rather Than Merely Conducting Basic Outreach",
    excerpt: "Learn how to move from simple sourcing to effective, strategic sourcing that actively engages and attracts high-quality candidates.",
    author: "SRN Knowledge Base",
    date: "September 26, 2024",
    readTime: "9 min read",
    category: "Sourcing Strategies",
    href: "/blogs/strategic-sourcing"
  }
];

const categories = ["All", "AI & Technology", "Sourcing Strategies", "Talent Acquisition", "Industry Insights", "Professional Development", "Company Updates", "Tech Startups", "HR Leadership", "Employer Branding", "HR Strategy", "Remote Work", "Recruitment Strategy"];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <MainHeader />
      <section className="pt-32 pb-16 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6">
              Recruitment Insights & Trends
            </h1>
            <p className="text-xl text-synapse-gray max-w-3xl mx-auto">
              Expert insights, industry trends, and actionable strategies to transform your recruitment process
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={category === "All" ? "btn-primary" : "border-synapse-primary text-synapse-primary hover:bg-synapse-light"}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border hover:border-synapse-primary transition-all duration-300 group h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4">
                    <span className="text-xs px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full font-medium">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-synapse-dark group-hover:text-synapse-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-synapse-gray mb-4 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-synapse-gray mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-synapse-gray">
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    <Link href={post.href}>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-synapse-primary hover:bg-synapse-light p-2"
                      >
                        <ArrowRight size={16} />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button className="btn-primary">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}