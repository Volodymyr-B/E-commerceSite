import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./cartFooter.module.css";

const Cart_footer = ({ toggle }) => {
  const order = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = order.reduce(
    (acc, el) => acc + el.price * el.quantity,
    20
  );
  return (
    <div className={style.cart_footer}>
      <div>
        Delivery : <span className={style.total}>20$</span>
      </div>
      <div>
        Order price : <span className={style.total}>{totalPrice}$</span>
      </div>
      <div className={style.submit_container}>
        <Link to="order">
          <button onClick={toggle} disabled={order.length <= 0} className="Btn">
            Order now!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cart_footer;
