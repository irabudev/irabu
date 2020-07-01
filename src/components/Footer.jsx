import React, { Component } from "react";
import { Link } from "gatsby";
import config from "../../data/SiteConfig";

class Footer extends Component {
  render() {

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
                  <li><Link to="mailto:developers@irabu.co.tz" className="hover-style-link">developers@irabu.co.tz</Link></li>
                  <li><Link to="tel:123344556" className="hover-style-link text-black font-weight--bold">(+255)764 556463</Link></li>
                  <li><Link to="https://irabu.dev/" className="hover-style-link text-color-primary">irabu.dev</Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">IT Services</h6>
                <ul className="footer-widget__list">
                  <li>
                    <Link to="#" className="hover-style-link">Managed IT</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">Legal</h6>
                <ul className="footer-widget__list">
                  <li><Link to="#" className="hover-style-link">Terms of Payment</Link></li>
                  <li><Link to="#" className="hover-style-link">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6 footer-widget">
                <h6 className="footer-widget__title mb-20">Support</h6>
                <ul className="footer-widget__list">
                  <li><Link to="#" className="hover-style-link">Contact Us</Link></li>
                  <li><Link to="#" className="hover-style-link">Cookies Policy</Link></li>
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
                  Copyright &copy; 
                  {' '}
                  {new Date().getFullYear()}
                  {' '}
                  {copyright}
                  <Link to="https://irabu.dev/" />
                </span>
              </div>
              <div className="col-md-6 text-center text-md-right">
                <ul className="list ht-social-networks solid-rounded-icon">
                  <li className="item">
                    <Link to="https://twitter.com/irabudev" target="_blank" aria-label="Twitter" className="social-link hint--bounce hint--top hint--primary">
                      <i className="fab fa-twitter link-icon" />
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="https://facebook.com" target="_blank" aria-label="Facebook" className="social-link hint--bounce hint--top hint--primary">
                      <i className="fab fa-facebook-f link-icon" />
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="https://instagram.com/irabudev" target="_blank" aria-label="Instagram" className="social-link hint--bounce hint--top hint--primary">
                      <i className="fab fa-instagram link-icon" />
                    </Link>
                  </li>
                  <li className="item">
                    <Link to="https://linkedin.com" target="_blank" aria-label="Linkedin" className="social-link hint--bounce hint--top hint--primary">
                      <i className="fab fa-linkedin link-icon" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
