import React from "react";
import CSSModules from "react-css-modules";
import style from "./main.module.scss";

function Main() {
  return (
    <div styleName="main">
      <div styleName="main__title">
        <h1>Исследуйте мир вместе с нами</h1>
        <p>Брось себе вызов. Отправься в путешествия в дикие уголки природы.</p>
      </div>
      <div styleName="main__form">
        <h3>Быстры вызов тура</h3>
        <form styleName="form">
          <div styleName="form__search">
            <input type="text" placeholder="Куда" />
            <img src="./assets/icons/search_main_form.png" alt="search" />
          </div>
          <div styleName="when__duration">
            <input type="text" placeholder="Когда" />
            <input type="text" placeholder="Продолжительность" />
          </div>
          <div>
            <input type="text" placeholder="Тип тура" />
            <img src="./assets/icons/down_arrow.png" alt="arrow" />
          </div>
          <div styleName="search__btn">Найти</div>
        </form>
      </div>
    </div>
  );
}

export default CSSModules(Main, style);
