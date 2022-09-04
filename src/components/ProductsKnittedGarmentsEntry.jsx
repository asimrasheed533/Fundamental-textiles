import React, { useEffect } from "react";
import { Fade } from "react-reveal";
import { ProductsKnittedGarmentsEntryButton } from "./ProductsKnittedGarmentsEntryButton";

export function ProductsKnittedGarmentsEntry({ label, item, right }) {
  const [selected, setSelected] = React.useState("");
  useEffect(() => {
    item
      .filter((item, index) => index === 0)
      .map((item) => {
        setSelected(item.label);
      });
  }, []);
  console.log(selected);
  return (
    <div
      className={
        right
          ? "products__kintted__garments__right__entry products__kintted__garments__right__entry__reverse"
          : "products__kintted__garments__right__entry"
      }
    >
      <Fade bottom>
        <div className="products__kintted__garments__right__entry__left">
          <Fade bottom>
            <div className="products__kintted__garments__right__entry__left__heading">
              {label}
            </div>
          </Fade>
          {item.map((item, i) => (
            <ProductsKnittedGarmentsEntryButton
              key={i}
              title={label}
              label={item.label}
              defaultChecked={item.defaultChecked}
              selected={selected}
              setSelected={setSelected}
            />
          ))}
        </div>
      </Fade>
      <div className="products__kintted__garments__right__entry__right">
        {item
          .filter((item) => selected === item.label)
          .map((item, i) => (
            <Fade bottom key={i}>
              <img
                src={item.image}
                alt={item.label}
                className="products__kintted__garments__right__entry__right__img"
              />
            </Fade>
          ))}
      </div>
    </div>
  );
}
