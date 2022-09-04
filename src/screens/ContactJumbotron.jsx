import React from "react";

export function ContactJumbotron({}) {
  return (
    <div className="contact__jumbotron">
      <svg
        width="1185"
        height="495"
        viewBox="0 0 1185 495"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M373.333 274.338C578.639 395.339 843.164 326.997 964.166 121.691C1085.17 -83.6157 1016.82 -348.141 811.518 -469.142C606.212 -590.144 341.687 -521.801 220.686 -316.495C99.684 -111.189 168.027 153.336 373.333 274.338ZM1100.28 201.915C934.976 482.397 573.591 575.764 293.109 410.456C12.6267 245.148 -80.7404 -116.237 84.5677 -396.719C249.876 -677.201 611.26 -770.568 891.742 -605.26C1172.22 -439.952 1265.59 -78.5676 1100.28 201.915Z"
          stroke="url(#paint0_linear_284_4)"
          stroke-width="5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_284_4"
            x1="412.64"
            y1="409.517"
            x2="535.955"
            y2="-561.906"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="white" />
            <stop offset="1" stop-color="#E4E4E4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="contact__jumbotron__heading">Contact Us</div>
    </div>
  );
}
