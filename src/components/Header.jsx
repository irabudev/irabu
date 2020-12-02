import React from "react";
import { useIntl, Link } from "gatsby-plugin-intl";
import irabuLogo from "../../static/logos/irabu.svg";

const Header = () => {
  const intl = useIntl();
  return (
    <div className="header-bottom-wrap header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="header position-relative">
              <div className="header__logo">
                <Link to="/">
                  <img
                    src={irabuLogo}
                    className="img-fluid h-8"
                    alt="irabu logo"
                  />
                </Link>
              </div>

              <div className="header-right">
                <div className="header__navigation menu-style-three d-none d-xl-block">
                  <nav className="navigation-menu">
                    <ul>
                    <li>
                        <Link to="/process/">
                          <span>Our Process</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/stack/">
                          <span>Our Stack</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about/">
                          <span>{intl.formatMessage({ id: "nav-about" })}</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div
                  className="mobile-navigation-icon d-block d-xl-none"
                  id="mobile-menu-trigger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
