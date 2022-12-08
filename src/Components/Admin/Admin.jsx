import React from "react";
import ModuleCSS from "react-css-modules";
import style from "./admin.module.scss";
import GetServices from "../../Services/GetServices";

async function Admin() {
  const usersData = await GetServices.getUsers();

  return (
    <div styleName="admin__wrapper">
      <div styleName="admin">
        <div>Here is the list of users:</div>
        <button
          onClick={() => {
            console.log(usersData);
          }}
        >
          Get data
        </button>
      </div>
    </div>
  );
}

export default ModuleCSS(Admin, style);
