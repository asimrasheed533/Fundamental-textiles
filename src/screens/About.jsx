import React from "react";
import { HomeServices } from "../components/HomeServices";
import { AboutQualityPolicy } from "../components/AboutQualityPolicy";
import { AboutSupplyPartnership } from "../components/AboutSupplyPartnership";
import { AboutJumbotron } from "../components/AboutJumbotron";
import { AboutInfo } from "../components/AboutInfo";
import { AboutVendorCertification } from "../components/AboutVendorCertification";

export default function About() {
  return (
    <>
      <AboutJumbotron />
      <AboutInfo />
      <AboutQualityPolicy />
      <HomeServices />
      <AboutSupplyPartnership />
      <AboutVendorCertification />
    </>
  );
}
