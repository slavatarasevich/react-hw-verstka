import React, { useEffect, useState } from "react";
import CSSModules from "react-css-modules";
import style from "./modalEdit.module.scss";
import PutServices from "../../Services/PutServices";

function ModalEdit({ user, setCloseEdit, setUser }) {
  const [nameValueInput, setNameValueInput] = useState("");
  const [emailValueInput, setEmailValueInput] = useState("");

  useEffect(() => {
    setNameValueInput(user.userName);
    setEmailValueInput(user.email);
  }, [user]);

  async function handleEditUser() {
    await PutServices.editUsers(
      nameValueInput,
      emailValueInput,
      user.status,
      user.id
    );
    setCloseEdit(false);
    const copyObject = {
      userName: nameValueInput,
      email: emailValueInput,
      status: user.status,
      id: user.id,
    };
    setUser(copyObject);
  }

  return (
    <div styleName="ModalEdit__wrapper">
      <h1>Edit form</h1>
      <div styleName="editUser">
        <input
          type="text"
          defaultValue={user.userName}
          onChange={(e) => setNameValueInput(e.target.value)}
        ></input>
        <input
          type="text"
          defaultValue={user.email}
          onChange={(e) => setEmailValueInput(e.target.value)}
        ></input>
        <button
          onClick={() => {
            handleEditUser();
          }}
        >
          SAVE
        </button>
        <button onClick={() => setCloseEdit(false)}>CLOSE</button>
      </div>
    </div>
  );
}

export default CSSModules(ModalEdit, style);
