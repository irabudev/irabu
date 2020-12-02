import React from "react";
import { Link } from "gatsby";
import { backgroundColor } from "../../data/SiteConfig";

function Contact() {
  return (
    <div className="contact-us-section-wrappaer infotechno-contact-us-bg section-space--ptb_120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-lg-6">
            <div className="conact-us-wrap-one">
              <h3 className="heading">
                Obtaining further information by{" "}
                <span className="text-color-primary">make a contact</span> with
                our experienced IT staffs.{" "}
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
                <Link to="tel:255764556463">(+255)764 556463</Link>
              </h2>
              <div className="contact-us-button mt-20">
                <a
                  href="https://wa.me/255762485764"
                  target="_blank"
                  className="btn mr-1"
                  style={{ backgroundColor: `#25D366` }}
                >
                  WhatsApp
                </a>
                <a
                  href="https://t.me/irabu_company"
                  target="_blank"
                  className="btn ml-1"
                >
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
