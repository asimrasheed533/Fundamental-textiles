import React from "react";
import { Fade } from "react-reveal";

export function HomeSustainabilityCard({ icon, title }) {
  return (
    <div className="home__sustainability__content__left__card">
      <Fade bottom>
        <div className="home__sustainability__content__left__card__icon">
          {icon}
        </div>
        <div className="home__sustainability__content__left__card__heading">
          {title}
        </div>
      </Fade>
    </div>
  );
}
