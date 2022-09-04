import React from "react";
import { Fade } from "react-reveal";
import { fabrication, wovenGarments } from "../assets";
import { ProductsKnittedGarmentsEntry } from "./ProductsKnittedGarmentsEntry";

export function ProductsWovenGarments({}) {
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
                label: "Shirts",
                image: wovenGarments,
                defaultChecked: true,
              },
              {
                label: "Blouse",
                image: wovenGarments,
              },
              {
                label: "Jeans",
                image: wovenGarments,
              },
              {
                label: "Trousers",
                image: wovenGarments,
              },
              {
                label: "Skirts",
                image: wovenGarments,
              },
              {
                label: "Shorts",
                image: wovenGarments,
              },
              {
                label: "and alot more.",
                image: wovenGarments,
              },
            ]}
          />
          <ProductsKnittedGarmentsEntry
            right
            label="Fabrication"
            item={[
              {
                label: "Poplin",
                image: fabrication,
                defaultChecked: true,
              },
              {
                label: "Twill",
                image: fabrication,
              },
              {
                label: "Drill",
                image: fabrication,
              },
              {
                label: "Satin",
                image: fabrication,
              },
              {
                label: "Denim",
                image: fabrication,
              },
              {
                label: "Gabardine",
                image: fabrication,
              },
              {
                label: "Stretch fabric",
                image: fabrication,
              },
              {
                label: "Yarn-dyed",
                image: fabrication,
              },
              {
                label: "Chambray",
                image: fabrication,
              },
              {
                label: "Canvas",
                image: fabrication,
              },
            ]}
          />
          {entries.map((item, i) => (
            <div
              className="products__kintted__garments__right__content"
              key={i}
            >
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
    </div>
  );
}
