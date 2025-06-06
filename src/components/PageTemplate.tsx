
import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

interface PageTemplateProps {
  children: React.ReactNode;
  title: string;
  description: string;
  customHeader?: ReactElement;
  disableMainHeader?: boolean; // Added to control which header to show
}

const PageTemplate = ({
  children,
  title,
  description,
  customHeader,
  disableMainHeader = false,
}: PageTemplateProps) => {
  return (
    <>
      <Helmet>
        <title>{title} | Synapse</title>
        <meta name="description" content={description} />
      </Helmet>
      
      {customHeader || (disableMainHeader ? <Header /> : <MainHeader />)}
      
      <main>{children}</main>
      
      <Footer />
    </>
  );
};

export default PageTemplate;
