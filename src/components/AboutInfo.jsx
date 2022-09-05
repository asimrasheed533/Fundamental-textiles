import React from "react";
import { Fade } from "react-reveal";
import { aboutImage, mission, vision } from "../assets";

export function AboutInfo() {
  return (
    <div className="about__info">
      <Fade left>
        <img src={aboutImage} alt="aboutImage" className="about__info__img" />
      </Fade>
      <div className="about__info__content">
        <Fade bottom>
          <div className="about__info__content__entry">
            <div className="about__info__content__entry__icon">
              <Fade>
                <img
                  src={mission}
                  alt="mission"
                  className="about__info__content__entry__icon__img"
                />
              </Fade>
            </div>
            <div className="about__info__content__entry__heading">Mission</div>
            <div className="about__info__content__entry__info">
              We strive to offer best quality products at competitive prices to
              our customers backed by professional after sales service.
            </div>
          </div>
        </Fade>
        <Fade bottom>
          <div className="about__info__content__entry">
            <div className="about__info__content__entry__icon">
              <Fade>
                <img
                  src={vision}
                  alt="vision"
                  className="about__info__content__entry__icon__img"
                />
              </Fade>
            </div>
            <div className="about__info__content__entry__heading">Vision</div>
            <div className="about__info__content__entry__info">
              To be a leading ethical sourcing company for sustainable clothing
              and play an active role in conservation of natural resources and
              reduce carbon foot print for a better future of our planet and
              next generations.
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
