import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import Landing from "../components/Landing";
import config from "../../data/SiteConfig";

class HomePage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`Home | ${config.siteTitle}`} />
          <Landing />
        </div>
      </Layout>
    );
  }
}

export default HomePage;
