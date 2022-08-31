import React from "react";
import { HashLink } from "react-router-hash-link";
import style from "./nav.module.css";

const Nav = () => {
  return (
    <>
      <HashLink className={style.nav} to="/#home" smooth>
        Home
      </HashLink>
      <HashLink className={style.nav} to="/#about" smooth>
        About
      </HashLink>
      <HashLink className={style.nav} to="/#products" smooth>
        Products
      </HashLink>
    </>
  );
};

export default Nav;
