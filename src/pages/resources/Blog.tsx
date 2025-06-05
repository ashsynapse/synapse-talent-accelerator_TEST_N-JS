
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Recruitment: Trends for 2024",
    excerpt: "Discover how artificial intelligence is transforming the recruitment landscape and what it means for employers and job seekers.",
    author: "Sarah Johnson",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "AI & Technology",
    href: "/resources/blog/ai-recruitment-trends-2024"
  },
  {
    title: "Remote Hiring Best Practices: Building Global Teams",
    excerpt: "Learn the essential strategies for successfully hiring and onboarding remote talent across different time zones and cultures.",
    author: "Michael Chen",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Remote Work",
    href: "/resources/blog/remote-hiring-best-practices"
  },
  {
    title: "Candidate Experience: Why It Matters More Than Ever",
    excerpt: "Explore how providing an exceptional candidate experience can transform your employer brand and attract top talent.",
    author: "Emily Rodriguez",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Talent Acquisition",
    href: "/resources/blog/candidate-experience-matters"
  },
  {
    title: "Diversity & Inclusion in Tech Recruitment",
    excerpt: "Strategies for building more diverse and inclusive teams in the technology sector and overcoming common hiring biases.",
    author: "David Kim",
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Diversity & Inclusion",
    href: "/resources/blog/diversity-inclusion-tech-recruitment"
  },
  {
    title: "The Art of Technical Interviewing",
    excerpt: "Best practices for conducting effective technical interviews that accurately assess candidates while providing a positive experience.",
    author: "Lisa Thompson",
    date: "November 20, 2024",
    readTime: "5 min read",
    category: "Interview Process",
    href: "/resources/blog/art-of-technical-interviewing"
  },
  {
    title: "Building Your Employer Brand in a Competitive Market",
    excerpt: "How to differentiate your company and attract top talent in today's highly competitive recruitment landscape.",
    author: "James Wilson",
    date: "November 15, 2024",
    readTime: "6 min read",
    category: "Employer Branding",
    href: "/resources/blog/building-employer-brand"
  }
];

const categories = ["All", "AI & Technology", "Remote Work", "Talent Acquisition", "Diversity & Inclusion", "Interview Process", "Employer Branding"];

const Blog = () => {
  return (
    <PageTemplate 
      title="Recruitment Blog"
      description="Stay updated with the latest insights, trends, and best practices in recruitment and talent acquisition"
    >
      <section className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
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
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="text-synapse-primary hover:bg-synapse-light p-2"
                      onClick={() => window.location.href = post.href}
                    >
                      <ArrowRight size={16} />
                    </Button>
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
    </PageTemplate>
  );
};

export default Blog;
