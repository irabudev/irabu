import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/Index";
import Vision from "../components/About/Vision";
import HireUs from "../components/HireUs";
import config from "../../data/SiteConfig";

function AboutPage() {
  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.siteTitle}`} />
        <About />
        <Vision />
        <HireUs />
      </div>
    </Layout>
  );
}

export default AboutPage;
