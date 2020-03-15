import React, { Component } from "react";
import { Link } from "gatsby";
import brandLogo from "../../static/logos/irabu.svg";

class Header extends Component {
  render() {
    return (
      <div className="header-area header-area--default">

        <div className="header-top-wrap border-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center top-message">
                  <Link to="index-infotechno.html#">Now Hiring:</Link>
                  Are you a driven and motivated 1st Line IT Support Engineer?
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom-wrap header-sticky">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="header default-menu-style position-relative">
                  <div className="header__logo">
                    <Link to="#">
                      <img
                        alt="irabu logo"
                        className="img-fluid"
                        src={brandLogo}
                      />
                    </Link>
                  </div>
                  <div className="header-right-box">
                    <div className="header-right-inner" id="hidden-icon-wrapper">

                      <nav className="navigation-menu primary--menu">
                        <ul>
                          <li>
                            <Link to="#"><span>Latest News</span></Link>
                          </li>
                        </ul>
                      </nav>

                    </div>

                    <div className="mobile-navigation-icon d-block d-xl-none" id="mobile-menu-trigger">
                      <i />
                    </div>
                    <div className="hidden-icons-menu d-block d-md-none" id="hidden-icon-trigger">
                      <Link to="home">
                        <i className="far fa-ellipsis-h-alt" />
                      </Link>
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
}

export default Header;
