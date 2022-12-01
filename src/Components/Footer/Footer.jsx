import React from "react";
import CSSModules from "react-css-modules";
import style from "./footer.module.scss";

function Footer() {
  return <div styleName="container">Footer</div>;
}

export default CSSModules(Footer, style);
