import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import config from "../../data/SiteConfig";
import Stack from "../components/Stack/Stack";
import Hire from "../components/Stack/Hire";
import Tech from "../components/Stack/Tech";

const StackPage = () => {
  return (
    <Layout>
      <div>
        <Helmet title={`Our Technology Stack | ${config.siteTitle}`} />
        <div className="about-banner-wrap banner-space our-stack-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-wrap text-center section-space--mb_60">
                  <h1 className="heading  text-white">
                    Code is for humans not machine
                  </h1>
                  <h5 className="font-weight--normal text-white">
                    Let it be tooling, frontend, backend, devops. We try to
                    follow almost all best practice
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tech />
      <Stack />
      <Hire />
    </Layout>
  );
};

export default StackPage;
