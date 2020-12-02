import React from "react";
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Header from "../components/Header"
import Footer from "../components/Footer"

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <html lang="en" />
        </Helmet>
        <Header />
        <div className="site-wrapper-reveal">
          {children}
        </div>
        <Footer />
      </div>
    );
  }
}
