import React from "react";
import { HomeServices } from "../components/HomeServices";
import { AboutQualityPolicy } from "../components/AboutQualityPolicy";
import { AboutSupplyPartnership } from "../components/AboutSupplyPartnership";

export default function About() {
  return (
    <>
      <AboutQualityPolicy />
      <HomeServices />
      <AboutSupplyPartnership />
    </>
  );
}
