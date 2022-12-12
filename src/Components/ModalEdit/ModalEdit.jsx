import React from "react";
import CSSModules from "react-css-modules";
import style from "./modalEdit.module.scss";

function ModalEdit({ userName, email }) {
  return (
    <div styleName="ModalEdit__wrapper">
      <div styleName="editUser">
        <span>{userName}</span>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default CSSModules(ModalEdit, style);
