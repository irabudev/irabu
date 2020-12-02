import React from "react";
import { useIntl } from "gatsby-plugin-intl";

function Vision() {
  const intl = useIntl();

  return (
    <div className="vision-overview section-space--pt_100 section-space--pb_100">
      <div className="container">
        <div className="row">
          <div className="col-12 section-title">
            <div className="section-title-wrap section-space--mb_30">
              <h3 className="heading">About irabu</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="vision-content">
              <p className="heading">
                We are a creative digital agency with a core quest of build to
                simplify — since 2013, formally incorporated in 2020
              </p>
              <p className="heading section-space--mt_30 d-none">
                {intl.formatMessage({ id: "about-sec_1" })}
              </p>
              <p className="heading section-space--mt_30">
                {intl.formatMessage({ id: "about-sec_2" })}
              </p>
              <p className="heading section-space--mt_30">
                {intl.formatMessage({ id: "about-sec_3" })}
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="portfolio-details-content">
              <div className="text">
                <div className="author">
                  <h6 className="font-weight--reguler mb-1">
                    irabu is Kiswahili for vowels, i.e. relating to the voice.
                  </h6>
                  <p>You pronounce it /'irabuː/.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
