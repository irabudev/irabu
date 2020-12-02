import React from "react";
import flashnet from "./clients/flashnet.png";
import cpj from "./clients/cpj.png";
import io from "./clients/io.svg";
import inc from "./clients/78inc.png";
import gepc from "./clients/gepc.png";
import exl from "./clients/exl.png";
import nukta from "./clients/nukta.png";
import jiranileo from "./clients/jiranileo.png";
import self from "./clients/self.png";
import mowara from "./clients/mowara.png";
import demichtoph from "./clients/demichtoph.png";
import tcsaa from "./clients/tcsaa.png";

function Clients() {
  return (
    <div className="tabs-wrapper bg-gray section-space--ptb_100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-wrapper text-center section-space--mb_60 wow move-up">
              <h6 className="section-sub-title mb-20">Our clients</h6>
              {/* <h3 className="section-title">
                Clients we have worked with
                <span className="text-color-primary"> 38 years</span>{" "}
              </h3> */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 ht-tab-wrap">
            <div className="tab-content ht-tab__content">
              <div
                className="tab-pane  fade show active"
                id="tab_list_08"
                role="tabpanel"
              >
                <div className="tab-history-wrap section-space--mt_60 brand-logo-slider__one">
                  <div className="modern-grid--6">
                    <div className="brand-logo brand-logo--slider">
                      <a href="https://flashnet.co.tz/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={flashnet}
                            className="img-fluid width-160"
                            alt="Flashnet"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="https://aashiqshariff.com/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={cpj}
                            className="img-fluid width-160"
                            alt="The Corporate Junkie"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="http://bit.africa/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={io}
                            className="img-fluid width-160"
                            alt="Binary Institue of Technology"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="#">
                        <div className="brand-logo__image">
                          <img
                            src={inc}
                            className="img-fluid width-160"
                            alt="The House of 78inc"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="https://jiranileo.com/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={jiranileo}
                            className="img-fluid width-160"
                            alt="Jiranleo"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="https://exlprivatebank.com/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={exl}
                            className="img-fluid width-160"
                            alt="EXL Private Bank"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="http://www.nuktaafrica.co.tz/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={nukta}
                            className="img-fluid width-160"
                            alt="Nukta Africa"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="https://gepc.or.tz/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={gepc}
                            className="img-fluid width-160"
                            alt="GEPC"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="http://mowara.com/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={mowara}
                            className="img-fluid width-160"
                            alt="Mowara Limited"
                          />
                        </div>
                      </a>
                    </div>

                    <div className="brand-logo brand-logo--slider">
                      <a href="https://tcsaa.or.tz/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={tcsaa}
                            className="img-fluid width-160"
                            alt="TCSAA"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="brand-logo brand-logo--slider">
                      <a href="https://demichtoph.co.tz/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={demichtoph}
                            className="img-fluid width-160"
                            alt="Demichtoph"
                          />
                        </div>
                      </a>
                    </div>
                    <div className="brand-logo brand-logo--slider">
                      <a href="https://reliance.or.tz/" target="_blank">
                        <div className="brand-logo__image">
                          <img
                            src={self}
                            className="img-fluid width-160"
                            alt="Reliance"
                          />
                        </div>
                      </a>
                    </div>
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

export default Clients;
