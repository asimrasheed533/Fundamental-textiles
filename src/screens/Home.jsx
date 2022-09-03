import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { HomeProducts } from "./HomeProducts";
import { HomeServices } from "./HomeServices";
import { HomeQuotation } from "./HomeQuotation";

export default function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeProducts />
      <HomeServices />
      <HomeQuotation />
    </>
  );
}
