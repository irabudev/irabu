import React from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";

function Footer() {
  const { copyright } = config;
  if (!copyright) {
    return null;
  }
  return (
    <div className="footer-area-wrapper bg-gray">
      <div className="footer-area section-space--ptb_80">
        <div className="container">
          <div className="row footer-widget-wrapper">
            <div className="col-lg-6 col-md-6 col-sm-6 footer-widget">
              <div className="footer-widget__logo mb-30">
                {/* <img src="assets/images/logo/dark-logo-160x48.png" className="img-fluid" alt=""> */}
              </div>
              <ul className="footer-widget__list">
                <li>Kilongawima Street Dar es Salaam, Tanzania</li>
                <li>
                  <a
                    href="mailto:developers@irabu.co.tz"
                    className="hover-style-link"
                  >
                    developers@irabu.co.tz
                  </a>
                </li>
                <li>
                  <a
                    href="tel:255764556463"
                    className="hover-style-link text-black font-weight--bold"
                  >
                    (+255)764 556463
                  </a>
                </li>
                <li>
                  <a
                    href="https://irabu.dev/"
                    className="hover-style-link text-color-primary"
                  >
                    irabu.dev
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">What we do</h6>
              <ul className="footer-widget__list">
                <li>
                  <Link to="#" className="hover-style-link">
                    Consultation 
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    Apps Development
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    QA Testing
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Legal</h6>
              <ul className="footer-widget__list">
                <li>
                  <Link to="#" className="hover-style-link">
                    Terms and Condition
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
              <h6 className="footer-widget__title mb-20">Others</h6>
              <ul className="footer-widget__list">
                <li>
                  <Link to="#" className="hover-style-link">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    Internship
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover-style-link">
                    Open Source
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area section-space--pb_30">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-left">
              <span className="copyright-text">
                Copyright &copy; {new Date().getFullYear()} {copyright}
                <Link to="/" />
              </span>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <ul className="list ht-social-networks solid-rounded-icon">
                <li className="item">
                  <a
                    href="https://twitter.com/irabudev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-twitter link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-facebook-f link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://instagram.com/irabudev"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-instagram link-icon" />
                  </a>
                </li>
                <li className="item">
                  <a
                    href="https://linkedin.com/company/irabu"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin"
                    className="social-link hint--bounce hint--top hint--primary"
                  >
                    <i className="fab fa-linkedin link-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
