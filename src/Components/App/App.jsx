import React, { useState } from "react";
import CSSModules from "react-css-modules";
import style from "./app.module.scss";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalAuth from "../ModalAuth/ModalAuth";

function App() {
  const [authorized, setAuthorized] = useState(false);

  if (!authorized) {
    return <ModalAuth setAuthorized={setAuthorized} />;
  }

  return (
    <div styleName="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default CSSModules(App, style);
