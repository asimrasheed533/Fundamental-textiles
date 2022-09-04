import React from "react";
import { Fade } from "react-reveal";
import { fabric, knittedImage } from "../assets";
import { ProductsKnittedGarmentsEntry } from "./ProductsKnittedGarmentsEntry";

export function ProductsKnittedGarments({}) {
  const entries = [
    {
      title: "Blends",
      info: (
        <>
          100% Cotton, Poly-Cotton 65/35, 50/50, CVC 60/40, 55/45, Tri-blends.
        </>
      ),
    },
    {
      title: "Dyes",
      info: <>Reactive & Disperse reactive.</>,
    },
    {
      title: "Special Finishes: ",
      info: (
        <>
          Peach finish, Water repellent, Stain resistant, Silicon
          wash,Anti-pilling, and Enzyme wash.
        </>
      ),
    },
    {
      title: "Embellishments:",
      info: <>Different techniques of prints, Embroidery & Badges.</>,
    },
    {
      title: "Fabrication",
      info: (
        <>
          Poplin, Twill, Drill, Satin, Gabardine, Stretch fabric, Yarn-dyed
          Chambray & Canvas
        </>
      ),
    },
  ];
  return (
    <div className="products__kintted__garments">
      <Fade bottom>
        <div className="products__kintted__garments__left">
          <div className="products__kintted__garments__left__heading">
            Kintted Garments
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
              defaultChecked: true,
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
              label: "Stretch Jersey",
              image: fabric,
              defaultChecked: true,
            },
            {
              label: "Rib",
              image: fabric,
            },
            {
              label: "Interlock",
              image: fabric,
            },
            {
              label: "Fleece",
              image: fabric,
            },
            {
              label: "French Terry",
              image: fabric,
            },
            {
              label: "Pique",
              image: fabric,
            },
            {
              label: "Thermal & Structured",
              image: fabric,
            },
          ]}
        />
        {entries.map((item, i) => (
          <div className="products__kintted__garments__right__content" key={i}>
            <Fade bottom>
              <div className="products__kintted__garments__right__content__heading">
                {item.title}
              </div>
            </Fade>
            <Fade bottom>
              <div className="products__kintted__garments__right__content__info">
                {item.info}
              </div>
            </Fade>
          </div>
        ))}
      </div>
    </div>
  );
}
