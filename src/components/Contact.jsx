import React, {Component} from "react";
import { Link } from "gatsby";

class Contact extends Component {
    render() {
        return (
          <div className="contact-us-section-wrappaer infotechno-contact-us-bg section-space--ptb_120">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-lg-6">
                  <div className="conact-us-wrap-one">
                    <h3 className="heading">
                      Obtaining further information by
                      {" "}
                      <span className="text-color-primary">make a contact</span>
                      {' '}
                      with
                      our experienced IT staffs.
                      {" "}
                    </h3>

                    <div className="sub-heading">
                      We’re available for 8 hours a day! Contact to require a detailed
                      analysis and assessment of your plan.
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-lg-6">
                  <div className="contact-info-one text-center">
                    <div className="icon">
                      <span className="fal fa-phone" />
                    </div>
                    <h6 className="heading font-weight--reguler">Reach out now!</h6>
                    <h2 className="call-us">
                      <Link to="tel:190068668">1900 68668</Link>
                    </h2>
                    <div className="contact-us-button mt-20">
                      <Link to="#" className="btn btn--secondary">
                        Contact us
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default Contact;