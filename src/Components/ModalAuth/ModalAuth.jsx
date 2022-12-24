import React, { useState } from "react";
import CSSModules from "react-css-modules";
import style from "./modalAuth.module.scss";
import RegForm from "../ModalReg/ModalReg";
import GetServices from "../../Services/GetServices";
import Admin from "../Admin/Admin";
import { Link } from "react-router-dom";

function ModalAuth({ setAuthorized }) {
  const [value, setValue] = useState("");
  const [registered, setRegistered] = useState(true);
  const [flag, setFlag] = useState(false);
  const [error, setError] = useState(false);
  const [pass, setPass] = useState(false);
  const [valuePass, setValuePass] = useState("");
  const [admin, setAdmin] = useState(false);

  async function checkUser() {
    const authUsers = await GetServices.getUsers();
    const filterUserArr = authUsers.filter((item) => item.userName === value);

    if (filterUserArr.length > 0) {
      setFlag(true);
      return;
    }
    setTimeout(() => {
      setError(false);
    }, 1500);
    setError(true);
    setValue("");
  }

  function registration() {
    return setRegistered(false);
  }
  function changeValue(event) {
    setValue(event.target.value);
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
            value={valuePass}
          ></input>
        )}
        <div styleName="send__reg__btns">
          <button>
            <Link to={flag ? "/tour" : "/"}>Log in</Link>
          </button>
          <button onClick={registration}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default CSSModules(ModalAuth, style);

// if (value === "admin") {
//       setPass(true);
//       const adminProfile = await GetServices.getAdmin();
//       if (adminProfile[0].password === valuePass) {
//         setAdmin(true);
//         return;
//       }
//       return;
//     }
