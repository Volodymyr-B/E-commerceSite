import React from "react";
import { useSelector } from "react-redux";
import { GrClose } from "react-icons/gr";
import Cart from "./cart/Cart";
import style from "./mainCart.module.css";
import CartFooter from "./CartFooter";

const MainCart = ({ toggle }) => {
  const order = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className={style.mainCart}>
      <div className={style.cart_container}>
        <div className={style.cart_header}>
          <div className={style.cart_name}>Cart</div>
          <div onClick={toggle} className={style.cart_outBtn}>
            <GrClose />
          </div>
        </div>
        {order.length < 1 ? (
          <div className={style.cart_empty}>here is nothing so far</div>
        ) : (
          <div className={style.cart_list}>
            {order.map((el) => (
              <Cart key={el.id} order={el} />
            ))}
          </div>
        )}
        <div className={style.cart_footer}>
          <CartFooter toggle={toggle} />
        </div>
      </div>
    </div>
  );
};

export default MainCart;
