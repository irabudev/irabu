import React from "react";
import { Link } from "gatsby";

function HireUs() {
  return (
    <div className="feature-large-images-wrapper section-space--pt_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center section-space--mb_30">
              <h6 className="section-sub-title mb-20">Hire us, why not?</h6>
              <h3 className="heading">
                How we claim to{" "}
                <span className="text-color-primary"> excel?</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="row row--35">
              <div className="col-lg-4 col-md-6 mt-30">
                <Link to="#" className="box-large-image__wrap wow move-up">
                  <div className="box-large-image__box">
                    <div className="box-large-image__midea">
                      <div className="images-midea">
                        {/* <img src="assets/images/box-image/blog-01-330x330.jpg" className="img-fluid" alt=""> */}

                        <div className="button-wrapper">
                          <div className="btn tm-button">
                            <span className="button-text">Learn more</span>
                          </div>
                        </div>
                        <div className="heading-wrap">
                          <h5 className="heading">Mitech Management Systems</h5>
                        </div>
                      </div>
                    </div>

                    <div className="box-large-image__content mt-30 text-center">
                      <p>
                        Our technical experts have a flair for developing{" "}
                        <strong>clean-coded websites</strong> based on
                        customers’ needs, global guidelines and trends.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6  mt-30">
                <Link to="#" className="box-large-image__wrap wow move-up">
                  <div className="box-large-image__box">
                    <div className="box-large-image__midea">
                      <div className="images-midea">
                        {/* <img src="assets/images/box-image/mitech-home-infotechno-box-large-image-02-330x330.jpg" className="img-fluid" alt=""> */}

                        <div className="button-wrapper">
                          <div className="btn tm-button">
                            <span className="button-text">Learn more</span>
                          </div>
                        </div>
                        <div className="heading-wrap">
                          <h5 className="heading">
                            Efficient Database Security{" "}
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="box-large-image__content mt-30 text-center">
                      <p>
                        Our technical experts have a flair for developing{" "}
                        <strong>clean-coded websites</strong> based on
                        customers’ needs, global guidelines and trends.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-lg-4 col-md-6  mt-30">
                <Link to="/#" className="box-large-image__wrap wow move-up">
                  <div className="box-large-image__box">
                    <div className="box-large-image__midea">
                      <div className="images-midea">
                        {/* <img src="assets/images/box-image/mitech-home-infotechno-box-large-image-03-330x330.jpg" className="img-fluid" alt=""> */}

                        <div className="button-wrapper">
                          <div className="btn tm-button">
                            <span className="button-text">Learn more</span>
                          </div>
                        </div>
                        <div className="heading-wrap">
                          <h5 className="heading">
                            Reliable Multi-function Technology
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div className="box-large-image__content mt-40 text-center">
                      <p>
                        Our technical experts have a flair for developing{" "}
                        <strong>clean-coded websites</strong> based on
                        customers’ needs, global guidelines and trends.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="section-under-heading text-center section-space--mt_40">
              <Link to="/#">
                Learn more about how we work span{" "}
                <i className="ml-1 button-icon far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HireUs;
