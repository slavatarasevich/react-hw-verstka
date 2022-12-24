import React, { useState } from "react";
import CSSModules from "react-css-modules";
import style from "./app.module.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalAuth from "../ModalAuth/ModalAuth";
import { NavLink, Routes, Route } from "react-router-dom";
import PageTour from "../Pages/PageTour";

function App() {
  return (
    <div styleName="container">
      <NavLink end to="/">
        Exit
      </NavLink>

      <Routes>
        <Route path="/" element={<ModalAuth />} />
        <Route path="/tour" element={<PageTour />} />
      </Routes>
    </div>
  );
}

export default CSSModules(App, style);
