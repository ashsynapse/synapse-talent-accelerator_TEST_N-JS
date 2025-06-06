
import React from "react";
import PageTemplate from "../../components/PageTemplate";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    title: "The Future of AI in Recruitment: 2025 and Beyond",
    excerpt: "Explore how artificial intelligence is revolutionizing talent acquisition and what recruiters need to know for the future.",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "8 min read",
    href: "/blog/ai-recruitment-2025",
    category: "AI Technology"
  },
  {
    title: "Global Hiring Trends That Will Shape 2025",
    excerpt: "Discover the key hiring trends and strategies that forward-thinking companies are adopting for competitive advantage.",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "12 min read",
    href: "/blog/global-hiring-trends-2025",
    category: "Trends"
  },
  {
    title: "Building an Effective Candidate Engagement Strategy",
    excerpt: "Learn proven strategies to keep top candidates engaged throughout your recruitment process and beyond.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "10 min read",
    href: "/blog/candidate-engagement",
    category: "Strategy"
  },
  {
    title: "Remote Recruitment: A Complete Guide for Modern Hiring",
    excerpt: "Master the art of remote hiring with our comprehensive guide to virtual recruitment best practices.",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "15 min read",
    href: "/blog/remote-recruitment-guide",
    category: "Remote Work"
  },
  {
    title: "Recruitment Trends 2025: What Talent Acquisition Leaders Need to Know",
    excerpt: "Stay ahead of the curve with insights into emerging recruitment trends and technologies shaping the industry.",
    author: "Lisa Thompson",
    date: "March 5, 2024",
    readTime: "11 min read",
    href: "/blog/recruitment-trends-2025",
    category: "Industry Insights"
  },
  {
    title: "Strategic Sourcing: Finding Hidden Talent in a Competitive Market",
    excerpt: "Discover advanced sourcing techniques to identify and attract top talent that your competitors are missing.",
    author: "James Wilson",
    date: "March 3, 2024",
    readTime: "9 min read",
    href: "/blog/strategic-sourcing",
    category: "Sourcing"
  }
];

const Blog = () => {
  return (
    <PageTemplate 
      title="Recruitment Blog | Industry Insights & Best Practices"
      description="Stay updated with the latest recruitment trends, AI hiring insights, and talent acquisition strategies from industry experts."
    >
      <section className="pt-32 pb-20 bg-gradient-to-br from-white via-synapse-lighter/30 to-synapse-light/50">
        <div className="container-wide">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-synapse-dark mb-6 leading-tight">
              Recruitment Blog
            </h1>
            
            <p className="text-xl text-synapse-gray mb-12 leading-relaxed">
              Expert insights, industry trends, and actionable strategies to help you master modern recruitment and talent acquisition.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="standard-section bg-white">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border hover:border-synapse-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full">
                      {post.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-synapse-dark mb-3 group-hover:text-synapse-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-synapse-gray mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-synapse-gray mb-4">
                    <div className="flex items-center gap-2">
                      <User size={16} />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-synapse-primary group-hover:text-white transition-colors"
                    onClick={() => window.location.href = post.href}
                  >
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
};

export default Blog;
