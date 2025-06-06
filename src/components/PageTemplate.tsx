
import React from "react";
import MainHeader from "./MainHeader";
import Footer from "./Footer";

interface PageTemplateProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

const PageTemplate = ({ children, title, description }: PageTemplateProps) => {
  return (
    <div className="min-h-screen">
      {title && (
        <head>
          <title>{title} | Synapse</title>
          {description && <meta name="description" content={description} />}
        </head>
      )}
      <MainHeader />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
