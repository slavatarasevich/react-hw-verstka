import React from "react";
import CSSModules from "react-css-modules";
import style from "./regForm.module.scss";

function RegForm() {
  return (
    <div styleName="reg__form__wrapper">
      <div styleName="reg__form">
        <h1>Registration form</h1>
        <input type="text" placeholder="your name" />
        <input type="text" placeholder="your last name" />
        <button>register</button>
      </div>
    </div>
  );
}

export default CSSModules(RegForm, style);
