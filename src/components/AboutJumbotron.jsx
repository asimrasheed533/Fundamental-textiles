import React from "react";
import { Fade } from "react-reveal";
import { aboutUs } from "../assets";

export function AboutJumbotron() {
  return (
    <div
      style={{
        background: "linear-gradient(transparent, transparent, #f6f6ff)",
        width: "100%",
        maxWidth: "1920px",
        margin: "0em auto",
      }}
    >
      <div className="about__jumbotron">
        <Fade>
          <img src={aboutUs} alt="aboutUs" className="about__jumbotron__img" />
        </Fade>
        <div className="about__jumbotron__content">
          <Fade bottom>
            <div className="about__jumbotron__content__left">
              Fundamental Textiles Ltd was established in 2010 as an import and
              distribution company for knitted and woven garments. Since its
              inception FTL has emphasised on supply of quality products at
              competitive prices with innovative product ideas. This has led to
              the sustainable growth of the company. With our head office based
              in Manchester, we offer customers a complete one-stop solution for
              knitted and woven garments for retail and work wear.
            </div>
          </Fade>
          <Fade bottom>
            <div className="about__jumbotron__content__right">
              Our range of services covers vertical supply chain management
              solutions right from the designing of new products through to
              product development, production follow up, in line and pre
              shipment inspections and shipping follow ups. We cover all the
              important aspects including the price, ethical production
              practices, quality control, and timely delivery. We have joined
              hands with some leading manufacturing companies based in Pakistan.
              This strategic partnership has enabled us to work in close liaison
              with our partner factories and successfully delivering required
              supply chain solutions to our customers.
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
