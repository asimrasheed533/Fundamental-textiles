import React from "react";
import { Fade } from "react-reveal";

export function ProductsKnittedGarmentsEntryButton({
  title,
  label,
  selected,
  setSelected,
  ...props
}) {
  return (
    <Fade bottom>
      <div className="products__kintted__garments__right__entry__left__button">
        <input
          type="radio"
          name={title}
          className="products__kintted__garments__right__entry__left__button__input"
          defaultChecked={selected === label}
          onClick={() => setSelected(label)}
          readOnly
          {...props}
        />
        <div className="products__kintted__garments__right__entry__left__button__content">
          {label}
        </div>
      </div>
    </Fade>
  );
}
