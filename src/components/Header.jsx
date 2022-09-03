import React, { useEffect } from "react";
import { Menu, X } from "react-feather";
import { NavLink } from "react-router-dom";
import { logo } from "../assets";
import ClickAwayListener from "react-click-away-listener";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function changeNavOpenClose() {
    if (window.innerWidth <= 1000) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  useEffect(() => {
    changeNavOpenClose();
    window.addEventListener("resize", changeNavOpenClose);
    window.addEventListener("scroll", () => {
      changeNavOpenClose();
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    });
  }, []);

  return (
    <ClickAwayListener
      onClickAway={() => {
        if (window.innerWidth <= 1000) {
          setIsOpen(false);
        }
      }}
    >
      <div
        className={
          isOpen && window.innerWidth <= 1000
            ? "header header__active"
            : isScrolling
            ? "header header__active"
            : "header"
        }
      >
        <div className="header__content">
          <NavLink to="/" className="header__content__logo">
            <img src={logo} alt="logo" className="header__content__logo__img" />
          </NavLink>
          {isOpen ? (
            <div className="header__content__nav">
              <NavLink
                to="/"
                onClick={() => {
                  if (window.innerWidth <= 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                onClick={() => {
                  if (window.innerWidth <= 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                About
              </NavLink>
              <NavLink
                to="/products"
                onClick={() => {
                  if (window.innerWidth <= 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Products
              </NavLink>
              <NavLink
                to="/contact"
                onClick={() => {
                  if (window.innerWidth <= 1000) {
                    setIsOpen(false);
                  }
                }}
                className="header__content__nav__link"
              >
                Contact Us
              </NavLink>
            </div>
          ) : (
            <></>
          )}

          <button
            className="header__content__menu"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            type="button"
            title="open close menu"
          >
            {isOpen ? (
              <X size={20} color="currentColor" />
            ) : (
              <Menu size={20} color="currentColor" />
            )}
          </button>
        </div>
      </div>
    </ClickAwayListener>
  );
}
