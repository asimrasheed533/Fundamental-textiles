import React from "react";
import { Fade } from "react-reveal";
import { pakistan, uk } from "../assets";

export function AboutTeam() {
  return (
    <div
      style={{
        background: "linear-gradient(transparent, transparent, #f6f6ff)",
        width: "100%",
        maxWidth: "1920px",
        margin: "0em auto",
        marginTop: "-5em",
      }}
    >
      <div className="home__sustainability">
        <div className="home__sustainability__heading">
          <svg
            width="385"
            height="385"
            style={{
              width: "50%",
              left: "25%",
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
          <Fade bottom>Our Team</Fade>
        </div>
        <div
          className="home__sustainability__content home__sustainability__content__reverse"
          style={{
            marginTop: "3em",
          }}
        >
          <div className="home__sustainability__content__reverse__card">
            <img
              src={uk}
              alt="uk"
              className="home__sustainability__content__reverse__card__img"
            />
            <div className="home__sustainability__content__reverse__card__heading">
              UK Office
            </div>
            <div className="home__sustainability__content__reverse__card__info">
              Manchester based team is responsible for marketing , sales,
              merchandising and after sales service to customers. We have a team
              with vast experience in their respective fields.
            </div>
          </div>
          <div className="home__sustainability__content__reverse__card">
            <img
              src={pakistan}
              alt="pakistan"
              className="home__sustainability__content__reverse__card__img"
            />
            <div className="home__sustainability__content__reverse__card__heading">
              Pakistan Office
            </div>
            <div className="home__sustainability__content__reverse__card__info">
              Our team of in Pakistan covers SMS ranges and bulk production
              follow ups, in line and pre shipment inspections , shipping follow
              ups and coordination with customers.
            </div>
          </div>
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
    </div>
  );
}
