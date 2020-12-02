import React from "react";
import { Link } from "gatsby";

function OurServices() {
  return (
    <div className="feature-images-wrapper bg-gray section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrap text-center">
              <h6 className="section-sub-title mb-20">Our services</h6>
              <h3 className="heading">
                For your very specific industry, we have{" "}
                <span className="text-color-primary">
                  {" "}
                  highly-tailored IT solutions.
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="feature-images__one">
              <div className="row">
                <div className="col-lg-4 col-md-6 wow move-up">
                  <div className="ht-box-images style-01">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        {/* <img className="img-fulid" src="assets/images/icons/mitech-box-image-style-01-image-01-100x108.png" alt=""> */}
                      </div>
                      <div className="content">
                        <h5 className="heading">IT Design </h5>
                        <div className="text">
                          We provide the most responsive and functional IT
                          design for companies and businesses worldwide.
                        </div>
                        <div className="circle-arrow">
                          <div className="middle-dot" />
                          <div className="middle-dot dot-2" />
                          <Link to="index-infotechno.html#">
                            <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 wow move-up">
                  <div className="ht-box-images style-01">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        {/* <img className="img-fulid" src="assets/images/icons/mitech-box-image-style-01-image-02-100x108.png" alt=""> */}
                      </div>
                      <div className="content">
                        <h5 className="heading">IT Management</h5>
                        <div className="text">
                          It’s possible to simultaneously manage and transform
                          information from one server to another.
                        </div>
                        <div className="circle-arrow">
                          <div className="middle-dot" />
                          <div className="middle-dot dot-2" />
                          <Link to="index-infotechno.html#">
                            <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 wow move-up">
                  <div className="ht-box-images style-01">
                    <div className="image-box-wrap">
                      <div className="box-image">
                        {/* <img className="img-fulid" src="assets/images/icons/mitech-box-image-style-01-image-03-100x108.png" alt=""> */}
                      </div>
                      <div className="content">
                        <h5 className="heading">Data Security</h5>
                        <div className="text">
                          Back up your database, store in a safe and secure
                          place while still maintaining its accessibility.
                        </div>
                        <div className="circle-arrow">
                          <div className="middle-dot" />
                          <div className="middle-dot dot-2" />
                          <Link to="index-infotechno.html#">
                            <i className="far fa-long-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="section-under-heading text-center section-space--mt_60 section-space--pt_30">
              Challenges are just opportunities in disguise.{" "}
              <Link to="index-infotechno.html#">Take the challenge!</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
