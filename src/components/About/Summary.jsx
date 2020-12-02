import React from "react";
// import { Link } from "gatsby";
import { useIntl, Link } from "gatsby-plugin-intl";

function Summary() {
  const intl = useIntl();

  return (
    <div className="feature-large-images-wrapper section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_60">
              <h6 className="section-sub-title mb-20">Our company</h6>
              <h3 className="heading">
                We run all kinds of IT services that vow your{" "}
                <span className="text-color-primary"> success</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="cybersecurity-about-box section-space--pb_100">
          <div className="row">
            <div className="col-lg-4 offset-lg-1">
              <div className="modern-number-01">
                <h2 className="heading  mr-5">
                  <span className="mark-text">5+</span>
                  Years’ Experience in IT
                </h2>
                <h6 className="heading mt-30">
                  Learn more about our Success Stories
                </h6>
              </div>
            </div>

            <div className="col-lg-5 offset-lg-1">
              <div className="cybersecurity-about-text">
                <div className="text">
                {intl.formatMessage({ id: "about-sec_1" })}
                </div>
                <div className="button-text">
                  <Link to="index-cybersecurity.html#" className="btn-text">
                    Discover now
                    <span className="button-icon ml-1">
                      <i className="far fa-long-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-lg-4 col-md-6 wow move-up">
                <Link
                  to="index-cybersecurity.html#"
                  className="ht-large-box-images style-03"
                >
                  <div className="large-image-box">
                    <div className="box-image">
                      <div className="default-image">
                        {/* <img class="img-fluid" src="assets/images/box-image/blog-01-480x298.jpg" alt=""> */}
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="heading">Quality Assurance System</h5>
                      <div className="text">
                        At Mitech, we have a holistic and integrated approach
                        towards core modernization to experience technological
                        evolution.
                      </div>
                      <div className="box-images-arrow">
                        <span className="button-text">Discover now</span>
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 wow move-up">
                <Link
                  to="index-cybersecurity.html#"
                  className="ht-large-box-images style-03"
                >
                  <div className="large-image-box">
                    <div className="box-image">
                      <div className="default-image">
                        {/* <img class="img-fluid" src="assets/images/box-image/mitech-home-infotechno-box-large-image-03-480x298.jpg" alt=""> */}
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="heading">Highly Professional Staffs</h5>
                      <div className="text">
                        Having obtained the official &amp; formal training in IT
                        technology and technical fields, our staffs know best.
                      </div>
                      <div className="box-images-arrow">
                        <span className="button-text">Discover now</span>
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-4 col-md-6 wow move-up">
                <Link
                  to="index-cybersecurity.html#"
                  className="ht-large-box-images style-03"
                >
                  <div className="large-image-box">
                    <div className="box-image">
                      <div className="default-image">
                        {/* <img class="img-fluid" src="assets/images/box-image/mitech-home-infotechno-box-large-image-02-480x298.jpg" alt=""> */}
                      </div>
                    </div>
                    <div className="content">
                      <h5 className="heading">Info Security Management</h5>
                      <div className="text">
                        At Mitech, we have a holistic and integrated approach
                        towards core modernization to experience technological
                        evolution.
                      </div>
                      <div className="box-images-arrow">
                        <span className="button-text">Discover now</span>
                        <i className="far fa-long-arrow-right" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="section-under-heading text-center section-space--mt_20">
              Challenges are just opportunities in disguise{" "}
              <Link to="index-cybersecurity.html#">Take the challenge!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
