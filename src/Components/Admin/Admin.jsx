import React, { useEffect, useState } from "react";
import ModuleCSS from "react-css-modules";
import style from "./admin.module.scss";
import GetServices from "../../Services/GetServices";
import DelServices from "../../Services/DelServices";
import ModalEdit from "../ModalEdit/ModalEdit";

function Admin() {
  const [users, setUsers] = useState([]);
  const [edit, setCloseEdit] = useState("");
  const [user, setUser] = useState({});
  const [cloneArr, setCloneArr] = useState([]);

  useEffect(() => {
    loadUsers();
  }, [user]);

  async function loadUsers() {
    const arrUsers = await GetServices.getUsers();
    setCloneArr(arrUsers);
    setUsers(arrUsers);
    return arrUsers;
  }

  async function delUser(id) {
    const status = await DelServices.delUsers(id);
    if (status === 200) {
      loadUsers();
    }
  }

  function handleEdit(item) {
    setCloseEdit(true);
    setUser(item);
  }

  function handleStatusFilter(event) {
    const statusPage = event.target.value;
    if (statusPage == "all") {
      setUsers(cloneArr);
      return;
    }
    const copyUsers = cloneArr.filter((item) => item.status == statusPage);
    setUsers(copyUsers);
  }

  if (!users) {
    return <h1>Loading</h1>;
  }

  return (
    <>
      {edit && (
        <ModalEdit user={user} setCloseEdit={setCloseEdit} setUser={setUser} />
      )}

      <div styleName="admin__wrapper">
        <div styleName="admin">
          <h1>List of users:</h1>
          <select onChange={handleStatusFilter}>
            <option hidden>Status</option>
            <option value="all">All</option>
            <option value="200">200</option>
            <option value="400">400</option>
            <option value="404">404</option>
          </select>
          <ul>
            {console.log("after return")}

            {users.map((item, index) => (
              <li key={index}>
                <span>{item.userName}</span>
                <span>{item.email}</span>
                <span>{item.status}</span>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => delUser(item.id)}>Del</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ModuleCSS(Admin, style);
