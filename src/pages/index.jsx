import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Hero from "../components/Hero";
import CaseStudy from "../components/CaseStudy";
import config from "../../data/SiteConfig";

const HomePage = () => {
  return (
    <Layout>
      <Helmet title={`Home | ${config.siteTitle}`} />
      <Hero />
      <CaseStudy />
    </Layout>
  );
};

export default HomePage;
