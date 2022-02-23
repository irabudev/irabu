import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import uza from "../../static/images/portfolio/1.png";
import comingSoon from "../../static/images/ComingSoonAppStore.png";
import playstore from "../../static/images/playstore.png";

function CaseStudy() {
  const intl = useIntl();

  return (
    <div
      className="service-projects-wrapper section-space--pt_100 mb-20"
      id="case-studies"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_60">
              <h6 className="section-sub-title mb-20">We made this 👇🏽</h6>
              <h3 className="heading">
                Proud projects that
                <span className="text-color-primary"> make us proud</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="service-slider__project">
          {/* <div className="row">
            <div className="slide-content col-lg-6 col-xl-5">
              <div className="service-project-slide-info">
                <h4 className="heading font-weight--reguler mb-10">Gorocket</h4>
                <p className="sub-text text-color-primary">
                  WEB, iOS , ANDROID
                </p>
                <div className="text mb-10">
                  {intl.formatMessage({
                    id: "index-gorocket",
                  })}
                </div>
                <a
                  href="https://app.gorocket.co/"
                  className="text-color-primary"
                >
                  <span>
                    <i className="fas fa-chevron-right"></i>
                    app.gorocket.co
                  </span>
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-xl-7">
              <div className="slide-image">
                <div className="image-wrap">
                  <div className="image">
                    <img
                      className="img-fluid"
                      src={gorocket}
                      alt="Rocket Inc"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="row my-4 pb-5">
            <div className="col-lg-6 col-xl-7">
              <div className="slide-image">
                <div className="image-wrap">
                  <div className="image">
                    <img
                      className="img-fluid"
                      src={uza}
                      alt="uza"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-content col-lg-6 col-xl-5">
              <div className="service-project-slide-info">
                <h4 className="heading font-weight--reguler mb-10">
                  UZA
                </h4>
                
                <div className="text mb-10">
                  {intl.formatMessage({
                    id: "index-uza",
                  })}
                </div>
                <a
                  href="https://uza.co.tz/"
                  className="text-color-primary"
                >
                  <span>
                    <i className="fas fa-chevron-right"></i>
                    uza.co.tz
                  </span>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
