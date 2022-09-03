import React from "react";
import { quotationImage } from "../assets";
import { Fade } from "react-reveal";

export function HomeQuotation() {
  return (
    <div className="home__quotation">
      <div className="home__quotation__content">
        <Fade bottom>
          <div className="home__quotation__content__heading">
            Quotation about
            <span>Textile Industry</span>
          </div>
        </Fade>
        <Fade bottom>
          <div className="home__quotation__content__info">
            <svg
              width="80"
              height="58"
              viewBox="0 0 80 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.4566 0.18559L39.9514 0.418116L40.3179 -0.361756L39.4562 -0.361125L39.4566 0.18559ZM20.4746 40.5782L19.9357 40.6703L20.229 42.3862L20.9694 40.8107L20.4746 40.5782ZM17.7711 24.7652L17.7707 24.2185L17.123 24.219L17.2322 24.8573L17.7711 24.7652ZM28.8784 29.1314L28.4921 29.5184L28.4998 29.5258L28.8784 29.1314ZM28.0545 52.6863L28.4278 53.0857L28.4282 53.0853L28.0545 52.6863ZM4.66884 53.2081L4.28246 53.5951L4.29019 53.6025L4.66884 53.2081ZM1.79562 35.3763L2.29972 35.5881L2.30338 35.579L1.79562 35.3763ZM6.16406 27.2974L6.62421 27.5927L6.62869 27.5855L6.16406 27.2974ZM22.9687 0.19767L22.9683 -0.349045L22.6643 -0.348822L22.504 -0.0904506L22.9687 0.19767ZM79.1624 0.156499L79.6572 0.389025L80.0237 -0.390847L79.162 -0.390216L79.1624 0.156499ZM60.1803 40.5491L59.6414 40.6413L59.9348 42.3571L60.6751 40.7817L60.1803 40.5491ZM57.4768 24.7361L57.4764 24.1894L56.8288 24.1899L56.9379 24.8282L57.4768 24.7361ZM68.5841 29.1023L68.1978 29.4893L68.2055 29.4967L68.5841 29.1023ZM67.7602 52.6572L68.1335 53.0566L68.134 53.0562L67.7602 52.6572ZM44.3746 53.1791L43.9882 53.566L43.9959 53.5734L44.3746 53.1791ZM41.5013 35.3472L42.0054 35.559L42.0091 35.5499L41.5013 35.3472ZM45.8698 27.2683L46.3299 27.5636L46.3344 27.5564L45.8698 27.2683ZM62.6744 0.168579L62.674 -0.378136L62.37 -0.377913L62.2098 -0.119541L62.6744 0.168579ZM38.9618 -0.0469367L19.9798 40.3457L20.9694 40.8107L39.9514 0.418116L38.9618 -0.0469367ZM21.0135 40.4861L18.31 24.6731L17.2322 24.8573L19.9357 40.6703L21.0135 40.4861ZM17.7715 25.3119C22.127 25.3087 25.6859 26.7162 28.4921 29.5183L29.2647 28.7445C26.2342 25.7185 22.3882 24.2151 17.7707 24.2185L17.7715 25.3119ZM28.4998 29.5258C31.3015 32.2158 32.7109 35.6572 32.714 39.8963L33.8074 39.8955C33.8041 35.3858 32.292 31.6509 29.2571 28.7371L28.4998 29.5258ZM32.714 39.8963C32.7177 45.0346 31.0325 49.1472 27.6807 52.2873L28.4282 53.0853C32.0258 49.7148 33.8114 45.3005 33.8074 39.8955L32.714 39.8963ZM27.6811 52.2869C24.4249 55.3305 20.4675 56.856 15.7757 56.8594L15.7765 57.9528C20.7307 57.9492 24.9588 56.3281 28.4278 53.0857L27.6811 52.2869ZM15.7757 56.8594C11.4137 56.8626 7.85237 55.5068 5.04748 52.8138L4.29019 53.6025C7.3219 56.5133 11.1654 57.9562 15.7765 57.9528L15.7757 56.8594ZM5.05514 52.8213C2.36543 50.1355 1.00462 46.6372 1.00143 42.2749L-0.0920022 42.2757C-0.0886241 46.8865 1.35999 50.6767 4.28254 53.595L5.05514 52.8213ZM1.00143 42.2749C0.999669 39.8753 1.43399 37.6483 2.29964 35.5881L1.29159 35.1645C0.365758 37.3679 -0.0938599 39.7402 -0.0920022 42.2757L1.00143 42.2749ZM2.30338 35.579C3.18117 33.3798 4.61735 30.7194 6.62416 27.5927L5.70396 27.0021C3.6775 30.1594 2.20139 32.885 1.28785 35.1736L2.30338 35.579ZM6.62869 27.5855L23.4333 0.48579L22.504 -0.0904506L5.69942 27.0093L6.62869 27.5855ZM22.9691 0.744384L39.457 0.732304L39.4562 -0.361125L22.9683 -0.349045L22.9691 0.744384ZM78.6676 -0.0760275L59.6855 40.3166L60.6751 40.7817L79.6572 0.389025L78.6676 -0.0760275ZM60.7192 40.457L58.0157 24.644L56.9379 24.8282L59.6414 40.6413L60.7192 40.457ZM57.4772 25.2828C61.8328 25.2796 65.3916 26.6871 68.1978 29.4892L68.9705 28.7155C65.9399 25.6894 62.0939 24.186 57.4764 24.1894L57.4772 25.2828ZM68.2055 29.4967C71.0072 32.1867 72.4166 35.6281 72.4197 39.8672L73.5131 39.8664C73.5098 35.3567 71.9977 31.6218 68.9628 28.708L68.2055 29.4967ZM72.4197 39.8672C72.4235 45.0055 70.7382 49.1181 67.3864 52.2582L68.134 53.0562C71.7315 49.6858 73.5171 45.2714 73.5131 39.8664L72.4197 39.8672ZM67.3869 52.2578C64.1306 55.3014 60.1732 56.8269 55.4814 56.8303L55.4822 57.9238C60.4364 57.9201 64.6645 56.2991 68.1335 53.0566L67.3869 52.2578ZM55.4814 56.8303C51.1194 56.8335 47.5581 55.4777 44.7532 52.7847L43.9959 53.5734C47.0276 56.4842 50.8711 57.9271 55.4822 57.9238L55.4814 56.8303ZM44.7609 52.7922C42.0711 50.1064 40.7103 46.6081 40.7071 42.2458L39.6137 42.2466C39.6171 46.8574 41.0657 50.6477 43.9883 53.5659L44.7609 52.7922ZM40.7071 42.2458C40.7054 39.8462 41.1397 37.6192 42.0054 35.559L40.9973 35.1354C40.0715 37.3388 39.6119 39.7111 39.6137 42.2466L40.7071 42.2458ZM42.0091 35.5499C42.8869 33.3508 44.3231 30.6903 46.3299 27.5636L45.4097 26.973C43.3832 30.1303 41.9071 32.8559 40.9936 35.1445L42.0091 35.5499ZM46.3344 27.5564L63.139 0.456699L62.2098 -0.119541L45.4051 26.9802L46.3344 27.5564ZM62.6748 0.715293L79.1628 0.703213L79.162 -0.390216L62.674 -0.378136L62.6748 0.715293Z"
                fill="black"
              />
            </svg>
            Work on good prose has three steps: a musical stage when it is
            composed, an architectonic one when it is built, and a textile one
            when it is woven.
          </div>
        </Fade>
      </div>
      <Fade bottom>
        <img
          src={quotationImage}
          alt="quotationImage"
          className="home__quotation__img"
        />
      </Fade>
    </div>
  );
}
