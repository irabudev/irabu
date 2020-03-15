import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Landing from "../components/Landing";
import Contact from "../components/Contact";
import CaseStudy from "../components/CaseStudy";
import OpenSource from "../components/OpenSource";
import config from "../../data/SiteConfig";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <Helmet title={`Home | ${config.siteTitle}`} />
        <Landing />
        <CaseStudy />
        <OpenSource />
        <Contact />
      </Layout>
    );
  }
}

export default HomePage;
