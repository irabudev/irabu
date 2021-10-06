import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import kuli from "../../static/images/kuli.png";
import code from "../../static/images/carbon.svg";

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
                <Link
                  to="/process/"
                  className="ht-btn ht-btn-md"
                >
                  See what our process
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="infotechno-hero-inner-images">
              <div className="infotechno-inner-one z-10">
                <img className="img-fluid h-auto md:w-2/3 2xl:w-1/2 -mb-9 2xl:ml-44 ml-24" src={kuli} alt="Kuli"/>
              </div>
              <div className="infotechno-inner-two wow move-up">
              <img className="img-fluid h-auto md:w-3/4 2xl:w-2/3 -mb-11 2xl:-ml-16 -ml-4" src={code} alt="Coding"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Landing;
