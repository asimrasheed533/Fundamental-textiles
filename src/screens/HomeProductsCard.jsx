import React from "react";
import { Fade } from "react-reveal";

export function HomeProductsCard({ image, heading, info }) {
  return (
    <Fade bottom>
      <div className="home__products__content__card">
        <img
          src={image}
          alt={heading}
          className="home__products__content__card__img"
        />
        <div className="home__products__content__card__heading">{heading}</div>
        <div className="home__products__content__card__info">{info}</div>
      </div>
    </Fade>
  );
}
