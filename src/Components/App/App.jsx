import React from "react";
import CSSModules from "react-css-modules";
import style from "./app.module.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div styleName="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default CSSModules(App, style);
