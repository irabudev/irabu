import React, { Component } from "react";
import { Link } from "gatsby";

class Landing extends Component {
  render() {
    return (
      <div className="infotechno-hero infotechno-bg">
        <div className="container-fluid">
          <div className="row align-items-center">
                    
            <div className="col-lg-6 col-md-6">
              <div className="infotechno-hero-text  wow move-up">
                <h6>IT Design &amp; Consulting </h6>
                <h1 className="font-weight--reguler mb-15">
                  Facilitate All Local IT-related Service Providers  
                </h1>
                <p>Highly Tailored IT Design, Management &amp; Support Services. </p>
                <div className="hero-button  mt-30">
                  <Link to="https://irabu.co.tz" target="_blank" className="ht-btn ht-btn-md">Get details</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="infotechno-hero-inner-images">
                <div className="infotechno-inner-one">
                  {/* <img className="img-fluid" src="assets/images/hero/home-infotechno-main-slider-slide-01-image-01.png" alt=""> */}
                </div>
                <div className="infotechno-inner-two  wow move-up">
                  {/* <img className="img-fluid" src="assets/images/hero/home-infotechno-main-slider-slide-01-image-02.png" alt=""> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
