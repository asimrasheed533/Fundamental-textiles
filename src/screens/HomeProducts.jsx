import React from "react";
import { kittedGraments, womanGarments, workGarments } from "../assets";
import { HomeProductsCard } from "./HomeProductsCard";

export function HomeProducts() {
  return (
    <div className="home__products">
      <div className="home__products__heading">
        Our <span>Products</span>
      </div>
      <div className="home__products__content">
        <HomeProductsCard
          image={kittedGraments}
          heading="Knitted Garments"
          info={
            <>
              We have always emphasised on the supply of quality products at
              competitive prices with innovative products ideas.
            </>
          }
        />
        <HomeProductsCard
          image={womanGarments}
          heading="Woven Garments"
          info={
            <>
              We have always emphasised on the supply of quality products at
              competitive prices with innovative products ideas.
            </>
          }
        />
        <HomeProductsCard
          image={workGarments}
          heading="Work Garments"
          info={
            <>
              We have always emphasised on the supply of quality products at
              competitive prices with innovative products ideas.
            </>
          }
        />
      </div>
    </div>
  );
}
