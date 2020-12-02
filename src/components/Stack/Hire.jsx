import React from "react";
import { useIntl } from "gatsby-plugin-intl";
import vertical from "../../../static/images/vertical.png";

function Hire() {
  const intl = useIntl();

  return (
    <section className="layouts-section-wrap bg-gray">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="layouts-images text-right">
              <img
                className="img-fluid"
                src={vertical}
                alt="Let's figure out how we could step in and help
                    you out"
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="layouts-section-text">
              <h3 className="heading">
                <span className="text-color-primary">
                  {intl.formatMessage({ id: "stack-cta" })}
                </span>
              </h3>
              <p className="text mt-30">
                {intl.formatMessage({ id: "stack-p1" })}
              </p>

              <p className="text mt-30">
                {intl.formatMessage({ id: "stack-p2" })}
              </p>

              <div className="sider-title-button-box mt-30">
                <a
                  href="{{ mailto(
'Hire a team',
'Tell us as much as you can about
- where you are stuck
- the current state and planning of the project
- your budget
- …

Anything that helps us to start straightforward!'
                        ) }}"
                  className="ht-btn ht-btn-md"
                >
                  {" "}
                  Hire our team
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hire;
