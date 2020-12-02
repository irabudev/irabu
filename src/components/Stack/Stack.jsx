import React from "react";

function Stack() {
  return (
    <section id="stack" className="bg-gray section-space--pt_100">
      <div className="container">
        <div className="lists-wrapper section-space--pb_40">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 mb-20">
                <h3 className="title line-after mb-16">Our technology stack</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="list-group-wrap section-space--mb_60">
                  <div className="separator-list-wrap">
                    <div className="element-title section-space--mb_30">
                      <h5>Frontend</h5>
                    </div>
                    <ul className="stack-list">
                      <li className="list-item">Desktop Apps</li>
                      <li className="list-item">Mobile Apps</li>
                      <li className="list-item">Web Apps</li>
                      <li className="list-item">UI &amp; UX Design</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="list-group-wrap section-space--mb_60">
                  <div className="separator-list-wrap">
                    <div className="element-title section-space--mb_30">
                      <h5>Consultancy</h5>
                    </div>
                    <ul className="stack-list">
                      <li className="list-item">Cloud Infrastructure Design</li>
                      <li className="list-item">Ideation</li>
                      <li className="list-item">Planning &amp; Management </li>
                      <li className="list-item">Support &amp; Maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="list-group-wrap section-space--mb_60">
                  <div className="separator-list-wrap">
                    <div className="element-title section-space--mb_30">
                      <h5>Backend</h5>
                    </div>
                    <ul className="stack-list">
                      <li className="list-item">Server Apps</li>
                      <li className="list-item">
                        Data Mining &amp; Processing
                      </li>
                      <li className="list-item">Artificial Inteligence</li>
                      <li className="list-item">Cloud Computing</li>
                      <li className="list-item">
                        Integrations (Banks, MNOs, APIs etc)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="list-group-wrap section-space--mb_60">
                  <div className="separator-list-wrap">
                    <div className="element-title section-space--mb_30">
                      <h5>IoT and big data platform</h5>
                    </div>
                    <ul className="stack-list">
                      <li className="list-item">Microcontrollers</li>
                      <li className="list-item">IoT Gateway</li>
                      <li className="list-item">IoT apps</li>
                      <li className="list-item">Big data management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stack;
