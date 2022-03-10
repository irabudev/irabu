import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
// import kuli from "../../static/images/kuli.png";
// import code from "../../static/images/carbon.svg";
import Video from "./Video";

function Landing() {
  const intl = useIntl();

  return (
    <div className="infotechno-hero infotechno-bg">
      <div className="container-fluid py-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="infotechno-hero-text wow move-up">
              <h6>Build to simplify</h6>
              <h1 className="font-weight--reguler mb-15">
                We craft SIMPLE &amp; VALUABLE solutions to everyday challenges
              </h1>
              <p>
                Highly Tailored IT Design, Management &amp; Support Services.{" "}
              </p>
              <div className="hero-button  mt-30">
                <Link to="/process/" className="ht-btn ht-btn-md">
                  See what our process
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <Video
              videoSrcURL="https://www.youtube.com/embed/ehghICaLy7s"
              videoTitle="Passing knowledge to the young generation"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
