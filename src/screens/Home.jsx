import React from "react";
import { HomeJumbotron } from "../components/HomeJumbotron";
import { HomeProducts } from "../components/HomeProducts";
import { HomeServices } from "../components/HomeServices";
import { HomeQuotation } from "../components/HomeQuotation";

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
