import React, { Component } from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";

class NewsPage extends Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <Helmet title={`News | ${config.siteTitle}`} />
          News
        </div>
      </Layout>
    );
  }
}

export default NewsPage;
