import React from "react";
import Helmet from "react-helmet";

import Layout from "../layout";
import config from "../../data/SiteConfig";
import notFound from "../../static/images/404.jpg";

function NotFoundPage() {
  return (
    <Layout>
      <Helmet title={`404: Not found | ${config.siteTitle}`} />
      <div>
        <img
          alt="Ghost getting abducted by aliens"
          className="block mx-auto w-1/2"
          src={notFound}
        />
        <h2 className="bg-yellow-400 text-2xl font-bold inline-block my-8 p-3">
          Looks like this page is a ghost that got abducted by aliens...
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
