import React from "react";
import CSSModules from "react-css-modules";
import style from "./footer.module.scss";
import data from "../../data/data.json";
import Card from "../Card/Card";

function Footer() {
  return (
    <div>
      <h2>Почему именно мы</h2>
      <div styleName="wrapper__card">
        {data.map((item, index) => (
          <Card img={item.img} title={item.title} key={index} />
        ))}
      </div>
    </div>
  );
}

export default CSSModules(Footer, style);
