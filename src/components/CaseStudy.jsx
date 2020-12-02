import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import gorocket from "../../static/images/portfolio/gorocket.png";
import jiranileo from "../../static/images/portfolio/jiranileo.png";
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
              <h6 className="section-sub-title mb-20">Case studies</h6>
              <h3 className="heading">
                Proud projects that
                <span className="text-color-primary"> make us stand out</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="swiper-container service-slider__project-active">
          <div className="swiper-wrapper service-slider__project">
            <div className="swiper-slide">
              <div className="row">
                <div className="slide-content col-lg-6 col-xl-5 order-2 order-lg-1">
                  <div className="service-project-slide-info">
                    <h4 className="heading font-weight--reguler mb-10">
                      Gorocket
                    </h4>
                    <p className="sub-text text-color-primary">
                      WEB, iOS , ANDROID
                    </p>
                    <div className="text mb-10">
                      {intl.formatMessage({ id: "index-gorocket" })}
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

                <div className="col-lg-6 col-xl-7 order-1 order-lg-2">
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
              </div>
            </div>
            <div className="swiper-slide">
              <div className="row">
                <div className="slide-content col-lg-6 col-xl-5 order-2 order-lg-1">
                  <div className="service-project-slide-info">
                    <h4 className="heading font-weight--reguler mb-10">
                      Jiranileo RSVP
                    </h4>
                    <p className="sub-text text-color-primary">iOS , ANDROID</p>
                    <div className="text mb-10">
                      {intl.formatMessage({ id: "index-jiranileo" })}
                    </div>
                    <a
                      href="https://play.google.com/store/apps/details?id=tz.co.irabu.jiranileorsvp"
                      className="text-color-primary"
                    >
                      <span>
                        <img className="width-160 " src={comingSoon} />
                      </span>
                    </a>
                    <a href="#" className="text-color-primary">
                      <span>
                        <img
                          className="width-160 "
                          src={playstore}
                        />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-xl-7 order-1 order-lg-2">
                  <div className="slide-image">
                    <div className="image-wrap">
                      <div className="image">
                        <img
                          className="img-fluid"
                          src={jiranileo}
                          alt="Jiranileo"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
