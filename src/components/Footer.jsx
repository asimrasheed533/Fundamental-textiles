import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__col">
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__logo"
          >
            <img
              src={logo}
              alt="logo"
              className="footer__content__col__logo__img"
            />
          </Link>
          <div className="footer__content__col__info">
            Fundamental Textile ensures ready-to-wear clothing and uniforms for
            industrial clothing, healthcare, uniforms and casual fast-fashion
            products. You just have to book an order and rest will be taken care
            by our teams.
          </div>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Quick links</div>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Home
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            About
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Why
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Services
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Works
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Quotation
          </Link>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Services</div>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Product Research & Development
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            In-Line Quality Inspections
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Production Follow Up
          </Link>
          <Link
            to="/"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__link"
          >
            Your One-Stop Shop
          </Link>
        </div>
        <div className="footer__content__col">
          <div className="footer__content__col__heading">Social info</div>
          <div className="footer__content__col__info">+32 434 54554543</div>
          <div className="footer__content__col__info">
            fundamentaltextiles@gmail.com
          </div>
          <div className="footer__content__col__info">
            www.fundamentaltextiles.com
          </div>
          <Link
            to="/contact"
            onClick={() => {
              widnow.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="footer__content__col__button"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
