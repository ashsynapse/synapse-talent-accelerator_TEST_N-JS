
import React, { ReactElement } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

interface PageTemplateProps {
  children: React.ReactNode;
  title: string;
  description: string;
  customHeader?: ReactElement;
  disableMainHeader?: boolean;
}

const PageTemplate = ({
  children,
  title,
  description,
  customHeader,
  disableMainHeader = false,
}: PageTemplateProps) => {
  // Set the document title and meta description
  React.useEffect(() => {
    document.title = `${title} | Synapse`;
    
    // Find or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
    
    return () => {
      // Clean up is optional for title, as it will be overwritten by the next page
    };
  }, [title, description]);
  
  return (
    <>
      {customHeader || (disableMainHeader ? <Header /> : <MainHeader />)}
      
      <main>{children}</main>
      
      <Footer />
    </>
  );
};

export default PageTemplate;
