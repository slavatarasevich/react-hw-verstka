import React from "react";
import ModuleCSS from "react-css-modules";
import style from "./admin.module.scss";

function Admin() {
  return (
    <div styleName="admin__wrapper">
      <div styleName="admin">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi,
        reiciendis harum expedita saepe error vero ipsa, consequuntur cupiditate
        veritatis voluptate eum, neque ab totam porro dolorem? Velit quis et
        tenetur fugiat, nihil dolorum quisquam, repellendus eveniet possimus,
        consectetur corrupti nostrum? Dolor placeat eaque atque earum voluptatum
        consequatur fugiat soluta iusto libero? Dolorem deserunt, nostrum
        officiis reprehenderit omnis cupiditate eveniet illum amet quo animi
        autem optio veritatis ratione excepturi sed dolore voluptatum, dolorum
        fugit ad aliquam debitis adipisci, atque vitae corrupti. Laboriosam,
        maiores harum libero ullam culpa perspiciatis quod, eum sequi commodi
        beatae quam, animi nisi reprehenderit eos aspernatur aliquam
        repudiandae.
      </div>
    </div>
  );
}

export default ModuleCSS(Admin, style);
