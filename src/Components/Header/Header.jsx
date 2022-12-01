import React from "react";
import CSSModules from "react-css-modules";
import style from "./header.module.scss";

function Header() {
  return (
    <div styleName="header">
      <div styleName="header__logo">
        <img src="./assets/picture/Logo_header.png" alt="logo" />
      </div>
      <div styleName="header__language">
        <span styleName="language">Eng</span>
        <span>Рус</span>
      </div>
      <div styleName="header__nav">
        <a href="">О нас</a>
        <a href="">Туры</a>
        <a href="">Визы</a>
        <a href="">Агентам</a>
        <a href="">Контакты</a>
      </div>
      <div styleName="header__btn">
        <div>Помощь</div>
      </div>
    </div>
  );
}

export default CSSModules(Header, style);
