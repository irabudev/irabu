import React from "react";
import kuli from "../../static/images/kuli.png";
import code from "../../static/images/code.png";

function Landing() {
  return (
    <div className="infotechno-hero infotechno-bg">
      <div className="container-fluid py-4">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6">
            <div className="infotechno-hero-text wow move-up">
              <h6>Build to simplify</h6>
              <h1 className="font-weight--reguler mb-15">
                We craft SIMPLE &amp; VALUABLE solutions to everday challenges
              </h1>
              <p>
                Highly Tailored IT Design, Management &amp; Support Services.{" "}
              </p>
              <div className="hero-button  mt-30">
                <a
                  href="https://irabu.co.tz"
                  target="_blank"
                  rel="noreferrer"
                  className="ht-btn ht-btn-md"
                >
                  See what we do
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 bg-black">
            <div className="infotechno-hero-inner-images h-64">
              <div className="infotechno-inner-one">
                {/* <img className="img-fluid" src={code} alt="Kuli"/> */}
              </div>
              <div className="infotechno-inner-two wow move-up">
                {/* <img className="img-fluid" src={kuli} alt="coding"/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default Landing;
