import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Home from "./screens/Home";
import Products from "./screens/Products";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Products />} />
        <Route path="/" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}
