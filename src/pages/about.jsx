import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About";
import OurServices from "../components/OurServices";
import HireUs from "../components/HireUs";
import config from "../../data/SiteConfig";

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About />
          <OurServices />
          <HireUs />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
