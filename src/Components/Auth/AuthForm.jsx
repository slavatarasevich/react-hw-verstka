import React, { useState } from "react";
import CSSModules from "react-css-modules";
import style from "./authForm.module.scss";
import RegForm from "../RegForm/RegForm";
import db from "../../db.json";

function AuthForm({ setAuthorized }) {
  const [value, setValue] = useState("");
  const [registered, setRegistered] = useState(true);
  const [error, setError] = useState(false);

  function changeValue(event) {
    setValue(event.target.value);
  }

  function checkUser() {
    console.log(`typed ${value}`);
    let filterUserArr = db.posts.filter((item) => item.userName === value);
    console.log(filterUserArr);
    if (filterUserArr.length > 0) {
      setAuthorized(true);
      return;
    }
    console.log("timeout");
    setTimeout(() => {
      setError(false);
    }, 500);
    setError(true);
    setValue("");
  }

  function registration() {
    setRegistered(false);
    console.log("clicked reg");
  }

  if (!registered) {
    return <RegForm />;
  }

  return (
    <div styleName="wrapper__form">
      <div styleName="auth-form">
        <h1>Welcome</h1>
        {error && <span>Unauthorized user</span>}

        <input
          onChange={changeValue}
          type="text"
          placeholder="enter your username"
          value={value}
        />
        <div styleName="send__reg__btns">
          <button onClick={checkUser}>Log in</button>
          <button onClick={registration}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default CSSModules(AuthForm, style);
