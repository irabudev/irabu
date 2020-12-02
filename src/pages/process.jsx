import React from "react";
import Helmet from "react-helmet";
import Layout from "../layout";
import { useIntl } from "gatsby-plugin-intl";
import config from "../../data/SiteConfig";

function Process() {
  const intl = useIntl();

  return (
    <Layout>
      <Helmet title={`Design & Development' | ${config.siteTitle}`} />
      <div className="about-banner-wrap banner-space our-process-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-wrap text-center section-space--mb_60">
                <h1 className="heading  text-white">
                  Simple and custom is achievable
                </h1>
                <h5 className="font-weight--normal text-white">
                  We craft SIMPLE &amp; VALUABLE solutions to everday challenges
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="gradation-process-area section-space--ptb_100">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="gradation-title-wrapper section-space--mb_60">
                <div className="gradation-title-wrap ">
                  <h6 className="section-sub-title text-black mb-20">
                    How we work
                  </h6>
                  <h4 className="heading">
                    How we help
                    <span className="text-color-primary break-first">
                      your business succeed
                    </span>
                  </h4>
                </div>

                <div className="gradation-sub-heading">
                  <h3 className="heading">
                    <mark>07</mark> Steps
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="ht-gradation style-01">
                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.1s"
                >
                  <div className="line"></div>
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1"></div>
                      <div className="wave-pulse wave-pulse-2"></div>
                      <div className="wave-pulse wave-pulse-3"></div>
                    </div>

                    <h6 className="circle">1</h6>
                  </div>

                  <div className="content-wrap">
                    <h6 className="heading">
                      01. DISCOVERY (Objectives, Ideas, Concepts) 🔎{" "}
                    </h6>

                    <div className="text">
                      {intl.formatMessage({ id: "process-discovery" })}
                    </div>
                  </div>
                </div>

                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.15s"
                >
                  <div className="line"></div>
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1"></div>
                      <div className="wave-pulse wave-pulse-2"></div>
                      <div className="wave-pulse wave-pulse-3"></div>
                    </div>

                    <h6 className="circle">2</h6>
                  </div>

                  <div className="content-wrap">
                    <h6 className="heading">
                      02. DEFINE (Sketches &amp; Stories) ✍️
                    </h6>

                    <div className="text">
                      {intl.formatMessage({ id: "process-define" })}
                    </div>
                  </div>
                </div>

                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.20s"
                >
                  <div className="line"></div>
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1"></div>
                      <div className="wave-pulse wave-pulse-2"></div>
                      <div className="wave-pulse wave-pulse-3"></div>
                    </div>

                    <h6 className="circle">3</h6>
                  </div>

                  <div className="content-wrap">
                    <h6 className="heading">
                      03. DESIGN (Design, build &amp; iterate) 📐
                    </h6>

                    <div className="text">
                      {intl.formatMessage({ id: "process-design" })}
                    </div>
                  </div>
                </div>

                <div
                  className="item item-1 animate wow fadeInRight"
                  data-wow-delay="0.25s"
                >
                  <div className="line"></div>
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1"></div>
                      <div className="wave-pulse wave-pulse-2"></div>
                      <div className="wave-pulse wave-pulse-3"></div>
                    </div>

                    <h6 className="circle">4</h6>
                  </div>

                  <div className="content-wrap">
                    <h6 className="heading">
                      04. DEVELOP (Iterate, iterate &amp; iterate) 🏗️
                    </h6>

                    <div className="text">
                      {intl.formatMessage({ id: "process-develop" })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="ht-gradation style-01">
                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.15s"
                >
                  <div className="line"></div>
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1"></div>
                      <div className="wave-pulse wave-pulse-2"></div>
                      <div className="wave-pulse wave-pulse-3"></div>
                    </div>

                    <h6 className="circle">5</h6>
                  </div>

                  <div className="content-wrap">
                    <h6 className="heading">05. Concepts &amp; Initiatives</h6>

                    <div className="text">
                      {intl.formatMessage({ id: "process-concept" })}
                    </div>

                    <a className="gradation-btn d-none" href="#">
                      <span className="button-text" data-text="Look more">
                        Look more
                      </span>
                      <span className="button-icon far fa-long-arrow-right"></span>
                    </a>
                  </div>
                </div>

                <div
                  className="item item-1 animate  wow fadeInRight"
                  data-wow-delay="0.20s"
                >
                  <div className="line"></div>
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1"></div>
                      <div className="wave-pulse wave-pulse-2"></div>
                      <div className="wave-pulse wave-pulse-3"></div>
                    </div>

                    <h6 className="circle">6</h6>
                  </div>

                  <div className="content-wrap">
                    <h6 className="heading">06. Testing &amp; Trying</h6>

                    <div className="text">
                      {intl.formatMessage({ id: "process-testing" })}
                    </div>

                    <a className="gradation-btn d-none" href="#">
                      <span className="button-text" data-text="Look more">
                        Look more{" "}
                      </span>
                      <span className="button-icon far fa-long-arrow-right"></span>
                    </a>
                  </div>
                </div>

                <div
                  className="item item-1 animate wow fadeInRight"
                  data-wow-delay="0.25s"
                >
                  <div className="line"></div>
                  <div className="circle-wrap">
                    <div className="mask">
                      <div className="wave-pulse wave-pulse-1"></div>
                      <div className="wave-pulse wave-pulse-2"></div>
                      <div className="wave-pulse wave-pulse-3"></div>
                    </div>

                    <h6 className="circle">7</h6>
                  </div>

                  <div className="content-wrap">
                    <h6 className="heading">07. Execute &amp; install</h6>

                    <div className="text">
                      {intl.formatMessage({ id: "process-execute" })}
                    </div>

                    <a className="gradation-btn d-none" href="#">
                      <span className="button-text" data-text="Look more">
                        Look more{" "}
                      </span>
                      <span className="button-icon far fa-long-arrow-right"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Process;
