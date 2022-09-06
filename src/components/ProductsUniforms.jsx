import React from "react";
import { Fade } from "react-reveal";
import { uniform } from "../assets";
import { ProductsKnittedGarmentsEntry } from "../components/ProductsKnittedGarmentsEntry";

export function ProductsUniforms() {
  return (
    <div className="home__sustainability">
      <div className="home__sustainability__heading">
        <svg
          style={{
            width: "50%",
            left: "25%",
            top: "-70",
          }}
          viewBox="0 0 385 385"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M262.762 69.8916C195.232 30.9027 108.88 54.0405 69.8912 121.571C30.9022 189.102 54.04 275.454 121.571 314.443C189.102 353.432 275.453 330.294 314.442 262.763C353.431 195.232 330.293 108.881 262.762 69.8916ZM27.791 97.2647C80.2041 6.48254 196.287 -24.6217 287.069 27.7914C377.851 80.2045 408.956 196.287 356.542 287.069C304.129 377.852 188.047 408.956 97.2643 356.543C6.48211 304.13 -24.6222 188.047 27.791 97.2647Z"
            stroke="url(#paint0_linear_281_157)"
            stroke-width="4.22952"
          />
          <defs>
            <linearGradient
              id="paint0_linear_281_157"
              x1="248.975"
              y1="27.3137"
              x2="211.824"
              y2="342.583"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E4E4E4" />
              <stop offset="1" stop-color="#E4E4E4" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <Fade bottom>Uniforms</Fade>
      </div>
      <Fade bottom>
        <div className="home__sustainability__info">
          Uniforms are the most demanded garments around the world when it comes
          to providing protection to employees and promoting brand identity. We
          have partnered with industry-leading, technologically advanced uniform
          manufacturers to provide any and all kind of options to cater to
          various business sectors that demand uniforms. Our range of uniforms
          also include products made from technical textiles such as Fire
          Resistant Fabrics, Laminated Water Proof Fabrics, Chemical Resistant
          Fabrics, and a lot more, all of which comply with leading
          certification like EN, ISO, etc.
        </div>
      </Fade>
      <div
        className="home__sustainability__content"
        style={{
          maxWidth: 700,
        }}
      >
        <ProductsKnittedGarmentsEntry
          label="Product Range"
          name="Uniforms Product Range"
          item={[
            {
              label: "T-shirt",
              image: uniform,
              defaultChecked: true,
            },
            {
              label: "Polos",
              image: uniform,
            },
            {
              label: "Hoodies",
              image: uniform,
            },
            {
              label: "Sweatshirts",
              image: uniform,
            },
            {
              label: "Jog pants",
              image: uniform,
            },
            {
              label: "Undergarments",
              image: uniform,
            },
          ]}
        />
      </div>
      <svg
        className="home__sustainability__svg"
        viewBox="0 0 625 837"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M539.505 696.743C693.243 629.846 763.641 450.986 696.743 297.248C629.846 143.51 450.986 73.1126 297.248 140.01C143.511 206.908 73.1127 385.768 140.01 539.505C206.908 693.243 385.768 763.641 539.505 696.743ZM801.419 251.7C893.472 463.248 796.602 709.365 585.054 801.418C373.506 893.472 127.388 796.602 35.335 585.054C-56.7182 373.506 40.1516 127.388 251.7 35.3349C463.248 -56.7183 709.365 40.1515 801.419 251.7Z"
          stroke="url(#paint0_linear_249_726)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_249_726"
            x1="31.5"
            y1="196"
            x2="585.253"
            y2="801.877"
            gradientUnits="userSpaceOnUse"
          >
            <stop />
            <stop offset="1" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
