import React, { useEffect, useState } from "react";
import ModuleCSS from "react-css-modules";
import style from "./admin.module.scss";
import GetServices from "../../Services/GetServices";
import DelServices from "../../Services/DelServices";
import ModalEdit from "../ModalEdit/ModalEdit";

function Admin() {
  const [users, setUsers] = useState([]);
  const [flag, setFlag] = useState("");

  useEffect(() => {
    loadUsers();
  }, []);

  async function loadUsers() {
    const arrUsers = await GetServices.getUsers();
    setUsers(arrUsers);
  }

  async function delUser(id) {
    const status = await DelServices.delUsers(id);
    if (status === 200) {
      loadUsers();
    }
  }
  if (!users) {
    return <h3>Loading</h3>;
  }

  function showEdit(id, userName, email) {
    // return <ModalEdit />;
    return <ModalEdit id={id} userName={userName} email={email} />;
    //console.log(id, userName, email);
  }

  return (
    <div styleName="admin__wrapper">
      <div styleName="admin">
        <h1>List of users:</h1>
        <ul>
          {console.log("after return")}

          {users.map((item, index) => (
            <li key={index}>
              <span>{item.userName}</span>
              <span>{item.email}</span>
              <button
                onClick={() => {
                  showEdit(item.id, item.userName, item.email);
                  setFlag(!flag);
                }}
              >
                Edit
              </button>
              <button onClick={() => delUser(item.id)}>Del</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModuleCSS(Admin, style);
