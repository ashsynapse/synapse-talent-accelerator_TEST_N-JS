
import React from "react";
import PageTemplate from "./PageTemplate";
import { Button } from "@/components/ui/button";
import { Calendar, User, Clock, ArrowLeft, Share2, BookmarkPlus } from "lucide-react";

interface BlogPostTemplateProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  children: React.ReactNode;
  excerpt?: string;
}

const BlogPostTemplate = ({ 
  title, 
  author, 
  date, 
  readTime, 
  category, 
  children,
  excerpt 
}: BlogPostTemplateProps) => {
  return (
    <PageTemplate 
      title={title}
      description={excerpt || `${title} - ${author}`}
    >
      <article className="py-20 bg-gradient-to-br from-white to-synapse-lighter/30">
        <div className="container-wide max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-8">
            <Button 
              variant="ghost" 
              className="text-synapse-primary hover:bg-synapse-light"
              onClick={() => window.location.href = '/blogs'}
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="text-sm px-3 py-1 bg-synapse-lighter text-synapse-primary rounded-full font-medium">
                {category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-synapse-dark mb-6 leading-tight">
              {title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-synapse-gray">
              <div className="flex items-center gap-2">
                <User size={18} />
                <span className="font-medium">{author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{readTime}</span>
              </div>
            </div>

            {/* Share Actions */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-gray-200">
              <Button variant="outline" size="sm" className="text-synapse-primary border-synapse-primary hover:bg-synapse-light">
                <Share2 size={16} className="mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="text-synapse-primary border-synapse-primary hover:bg-synapse-light">
                <BookmarkPlus size={16} className="mr-2" />
                Save
              </Button>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            {children}
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-synapse-gray">
                <p className="text-sm">Published by {author} on {date}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="text-synapse-primary border-synapse-primary hover:bg-synapse-light">
                  <Share2 size={16} className="mr-2" />
                  Share Article
                </Button>
              </div>
            </div>
          </footer>
        </div>
      </article>
    </PageTemplate>
  );
};

export default BlogPostTemplate;
