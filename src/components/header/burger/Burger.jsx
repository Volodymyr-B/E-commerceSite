import React, { useState } from "react";
import Nav from "../nav/Nav";
import style from "./burger.module.css";

const Burger = () => {
  const [menu, setMenu] = useState(true);
  const toggle = () => setMenu(!menu);

  return (
    <div className={style.burger} onClick={toggle}>
      <div
        className={
          menu ? style.burger_btn : `${style.burger_btn} ${style.active}`
        }
      >
        <span />
      </div>
      {!menu && (
        <div className={style.burger_nav}>
          <Nav />
        </div>
      )}
    </div>
  );
};

export default Burger;
