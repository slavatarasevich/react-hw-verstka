import React from "react";
import style from "./card.module.scss";
import CSSModules from "react-css-modules";

function Card(props) {
  return (
    <div styleName="wrapper__card">
      <img src={props.img} alt="" />
      <span>{props.title}</span>
    </div>
  );
}

export default CSSModules(Card, style);
