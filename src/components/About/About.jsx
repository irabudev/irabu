import React from "react";

function About() {
  return (
    <div className="processing-hero processing-hero-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 col-md-7">
            <div className="processing-hero-text wow move-up">
              <h6>IT Software and design </h6>
              <h1 className="font-weight--reguler mb-15">
                Virtual technology in a{" "}
                <span className="text-color-secondary">Refined IT System</span>
              </h1>
              <p>
                Set the trends for desktop &amp; server virtualization
                technology
              </p>
              <div className="hero-button mt-30">
                <a href="index-processing.html#" className="btn btn--secondary">
                  Free Sample
                </a>
                <div className="hero-popup-video video-popup">
                  <a
                    href="https://www.youtube.com/watch?v=vqZuSUtczbU"
                    className="video-link"
                  >
                    <div className="video-content">
                      <div className="video-play">
                        <span className="video-play-icon">
                          <i className="fa fa-play" />
                        </span>
                      </div>
                      <div className="video-text"> How we work</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-5">
            <div className="processing-hero-images-wrap wow move-up">
              <div className="processing-hero-images">
                {/* <img class="img-fluid" src="assets/images/hero/slider-processing-slide-01-image-01.png" alt=""> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
