import React from "react";
import { Fade } from "react-reveal";

export function HomeServicesCard({ icon, heading }) {
  return (
    <Fade bottom>
      <div className="home__services__right__card">
        <div className="home__services__right__card__icon">{icon}</div>
        <div className="home__services__right__card__heading">{heading}</div>
      </div>
    </Fade>
  );
}
