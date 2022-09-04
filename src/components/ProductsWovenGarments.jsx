import React from "react";
import { Fade } from "react-reveal";
import { knittedImage } from "../assets";
import { ProductsKnittedGarmentsEntry } from "./ProductsKnittedGarmentsEntry";

export function ProductsWovenGarments({}) {
  return (
    <div
      style={{
        background: "linear-gradient(transparent, transparent, #f6f6ff)",
        width: "100%",
      }}
    >
      <div className="products__kintted__garments products__kintted__garments__reverse">
        <Fade bottom>
          <div className="products__kintted__garments__left">
            <div className="products__kintted__garments__left__heading">
              Woven Garments
            </div>
          </div>
        </Fade>
        <div className="products__kintted__garments__right">
          <ProductsKnittedGarmentsEntry
            label="Product Range"
            item={[
              {
                label: "T-shirt",
                image: knittedImage,
              },
              {
                label: "Polos",
                image: knittedImage,
              },
              {
                label: "Hoodies",
                image: knittedImage,
              },
              {
                label: "Sweatshirts",
                image: knittedImage,
              },
              {
                label: "Jog pants",
                image: knittedImage,
              },
              {
                label: "Undergarments",
                image: knittedImage,
              },
            ]}
          />
          <ProductsKnittedGarmentsEntry
            right
            label="Fabric"
            item={[
              {
                label: "T-shirt",
                image: knittedImage,
              },
              {
                label: "Polos",
                image: knittedImage,
              },
              {
                label: "Hoodies",
                image: knittedImage,
              },
              {
                label: "Sweatshirts",
                image: knittedImage,
              },
              {
                label: "Jog pants",
                image: knittedImage,
              },
              {
                label: "Undergarments",
                image: knittedImage,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
