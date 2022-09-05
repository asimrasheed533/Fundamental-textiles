import React from "react";
import { ProductJumbotron } from "../components/ProductJumbotron";
import { ProductsKnittedGarments } from "../components/ProductsKnittedGarments";
import { ProductsWovenGarments } from "../components/ProductsWovenGarments";
import { ProductsUniforms } from "../components/ProductsUniforms";

export default function Products() {
  return (
    <>
      <ProductJumbotron />
      <ProductsKnittedGarments />
      <ProductsWovenGarments />
      <ProductsUniforms />
    </>
  );
}
