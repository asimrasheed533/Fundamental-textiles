import React from "react";
import { HomeJumbotron } from "./HomeJumbotron";
import { HomeProducts } from "./HomeProducts";
import { HomeServices } from "./HomeServices";

export default function Home() {
  return (
    <>
      <HomeJumbotron />
      <HomeProducts />
      <HomeServices />
    </>
  );
}
