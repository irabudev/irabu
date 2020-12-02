import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import CaseStudy from "../components/CaseStudy";
import Clients from "../components/Clients/Index";
import OpenSource from "../components/OpenSource";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <Layout>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Hero />
      <CaseStudy />
      <Clients />
      <OpenSource />
      <Contact />
    </Layout>
  );
};

export default HomePage;
