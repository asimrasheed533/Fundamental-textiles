import React from "react";
import { Link } from "react-router-dom";
import { homeBanner } from "../assets";
import { Fade } from "react-reveal";

export function HomeJumbotron() {
  return (
    <div className="home__jumbotron__section">
      <svg
        viewBox="0 0 835 993"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="home__jumbotron__section__svg"
      >
        <path
          d="M373.907 771.74C579.213 892.742 843.738 824.399 964.74 619.093C1085.74 413.787 1017.4 149.262 812.093 28.2602C606.786 -92.7414 342.261 -24.3989 221.26 180.907C100.258 386.214 168.601 650.739 373.907 771.74ZM1100.86 699.317C935.55 979.799 574.165 1073.17 293.683 907.858C13.2009 742.55 -80.1662 381.166 85.1419 100.683C250.45 -179.799 611.834 -273.166 892.317 -107.858C1172.8 57.4503 1266.17 418.835 1100.86 699.317Z"
          stroke="url(#paint0_linear_249_685)"
          stroke-width="5"
        />
        <defs>
          <linearGradient
            id="paint0_linear_249_685"
            x1="413.214"
            y1="906.92"
            x2="536.529"
            y2="-64.5034"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E4E4E4" />
            <stop offset="1" stop-color="#E4E4E4" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className="home__jumbotron__section__content">
        <div className="home__jumbotron__section__content__left">
          <Fade bottom>
            <div className="home__jumbotron__section__content__left__sub__heading">
              COMMITED TO
            </div>
          </Fade>
          <Fade bottom>
            <div className="home__jumbotron__section__content__left__heading">
              DELIVER WITH CARE
            </div>
          </Fade>
          <Fade bottom>
            <div className="home__jumbotron__section__content__left__info">
              Fundamental Textiles with world-class services coupled with
              innovative & quality products. Choose any product from our
              innovative and sustainable range or request a new product form us.
              You will get the accredited testing and all the certifications you
              need.
            </div>
          </Fade>
          <Fade bottom>
            <Link
              to="/"
              className="home__jumbotron__section__content__left__link"
            >
              Learn More
            </Link>
          </Fade>
        </div>
        <div className="home__jumbotron__section__content__right">
          <Fade bottom>
            <img
              src={homeBanner}
              alt="homeBanner"
              className="home__jumbotron__section__content__right__img"
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
