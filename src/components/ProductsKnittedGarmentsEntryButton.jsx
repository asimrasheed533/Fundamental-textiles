import React from "react";
import { Fade } from "react-reveal";

export function ProductsKnittedGarmentsEntryButton({
  title,
  label,
  defaultChecked,
  setSelected,
  name,
}) {
  return (
    <Fade bottom>
      <div className="products__kintted__garments__right__entry__left__button">
        <input
          type="radio"
          name={name}
          title={title}
          className="products__kintted__garments__right__entry__left__button__input"
          defaultChecked={defaultChecked}
          onChange={() => setSelected(label)}
        />
        <div className="products__kintted__garments__right__entry__left__button__content">
          {label}
        </div>
      </div>
    </Fade>
  );
}
