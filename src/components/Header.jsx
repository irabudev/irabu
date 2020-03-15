import React, { Component } from "react";
import { Link , graphql } from "gatsby";
import irabuLogo from "../../static/logos/irabu.svg"

class Header extends Component {
  render() {
    const data = graphql`
      query {
        fixedImages: file(relativePath: { regex: "/images/logo/logo-dark.png/" }) {
          childImageSharp {
            fixed(grayscale: true, width: 100) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
      `

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
                      className="img-fluid"
                      alt="irabu logo"
                    />
                  </Link>
                </div>

                <div className="header-right">
                  <div className="header__navigation menu-style-three d-none d-xl-block">
                    <nav className="navigation-menu">
                      <ul>
                        <li>
                          <Link to="/about/">
                            <span>Behind The Scene</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/news/">
                            <span>Articles</span>
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
  }
}

export default Header;