import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../../assets/logo_coffe.png";
import cart from "../../assets/cart.png";
import style from "./header.module.css";
import MainCart from "./mainCart/MainCart";
import Search from "./search/Search";
import Nav from "./nav/Nav";
import Burger from "./burger/Burger";

const Header = () => {
  const order = useSelector((state) => state.cart.itemsInCart);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className={style.header}>
      <nav className={style.nav_small}>
        <Burger />
      </nav>
      <div className={style.header_logo}>
        <img src={logo} alt="logo" />
      </div>
      <nav className={style.header_nav}>
        <Nav />
      </nav>
      <div className={style.header_search}>
        <Search />
        <div className={style.header_btn} onClick={toggle}>
          <img src={cart} alt="cart" />
          {order.length > 0 && (
            <div className={style.header_cart_quantity}>{order.length}</div>
          )}
        </div>
      </div>
      {modal && (
        <div className={style.modal_wrapper} onClick={() => setModal(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <MainCart toggle={toggle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
