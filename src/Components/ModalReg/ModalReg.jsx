import React, { useState } from "react";
import CSSModules from "react-css-modules";
import PostServices from "../../Services/PostServices";
import style from "./modalReg.module.scss";

function ModalReg({ setRegistered }) {
  const [userName, SetUserName] = useState("");
  const [email, SetEmail] = useState("");
  const [error, setError] = useState(false);
  const [successfully, setSuccessfully] = useState(false);

  async function handleAddUser() {
    if (userName !== "" && email !== "") {
      const resultStatus = await PostServices.regUsers(userName, email);
      if (resultStatus === 201) {
        setSuccessfully(true);
        setTimeout(() => {
          setRegistered(true);
        }, 1000);
        return;
      }
    }
    setError(true);
  }

  return (
    <div styleName="reg__form__wrapper">
      {successfully ? (
        <h1>Пользователь успешно создан</h1>
      ) : (
        <div styleName="reg__form">
          <div styleName="back__to__auth">
            <span
              onClick={() => {
                setRegistered(true);
              }}
            >
              BACK
            </span>
          </div>

          <h1>Registration</h1>
          {error && <h2>Check entered data</h2>}
          <input
            onChange={(e) => {
              SetUserName(e.target.value);
            }}
            type="text"
            placeholder="your name"
            // value={value}
          />
          <input
            onChange={(e) => {
              SetEmail(e.target.value);
            }}
            type="text"
            placeholder="email"
            // value={value}
          />
          <button onClick={handleAddUser}>register</button>
        </div>
      )}
    </div>
  );
}

export default CSSModules(ModalReg, style);
