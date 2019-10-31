import React from "react";
import { Toys } from "../../svg/Toys";

import style from "./Header.module.scss";

const Header: React.FC = () => (
  <header className={style.AppHeader}>
    <h1 className={style.AppTitle}>Explore.</h1>
    <Toys className={style.Toys} />
  </header>
);

export default Header;
