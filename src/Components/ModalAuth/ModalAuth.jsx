import React, { useState } from "react";
import CSSModules from "react-css-modules";
import style from "./modalAuth.module.scss";
import RegForm from "../ModalReg/ModalReg";
import GetServices from "../../Services/GetServices";
import Admin from "../Admin/Admin";

function ModalAuth({ setAuthorized }) {
  const [value, setValue] = useState("");
  const [registered, setRegistered] = useState(true);
  const [error, setError] = useState(false);
  const [pass, setPass] = useState(false);
  const [valuePass, setValuePass] = useState("");
  const [admin, setAdmin] = useState(false);

  function changeValue(event) {
    setValue(event.target.value);
  }

  async function checkUser() {
    if (value === "admin") {
      setPass(true);
      let adminProfile = await GetServices.getAdmin();

      if (adminProfile[0].password === valuePass) {
        return setAdmin(true);
      }

      const authUsers = await GetServices.getUsers();
      const filterUserArr = authUsers.filter((item) => item.userName === value);

      if (filterUserArr.length > 0) {
        setAuthorized(true);
        return;
      }
      setTimeout(() => {
        setError(false);
      }, 1500);
      setError(true);
      setValue("");
    }
  }

  function registration() {
    setRegistered(false);
  }

  if (!registered) {
    return <RegForm setRegistered={setRegistered} />;
  }

  if (admin) {
    return <Admin />;
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
        {pass && (
          <input
            onChange={(e) => {
              setValuePass(e.target.value);
            }}
            type="password"
            placeholder="password"
          ></input>
        )}
        <div styleName="send__reg__btns">
          <button onClick={checkUser}>Log in</button>
          <button onClick={registration}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default CSSModules(ModalAuth, style);
