import React from "react";
import { useDispatch } from "react-redux";
import IncDecButton from "../../../IncDecButton/IncDecButton";
import { removeProductFromCart } from "../../../../redux/reducer";
import { BsTrash } from "react-icons/bs";
import style from "./cart.module.css";

const Cart = ({ order }) => {
  const dispatch = useDispatch();
  const removeProduct = () => dispatch(removeProductFromCart(order.id));

  console.log();
  return (
    <div className={style.cart}>
      <div className={style.cart_left}>
        <div>
          <img src={order.img} alt="img" />
        </div>
        <div className={style.name_price}>
          <div> {order.name}</div>
          <div>{order.price * order.quantity}$</div>
        </div>
      </div>
      <div className={style.cart_right}>
        <div>
          <div className={style.remove_btn} onClick={removeProduct}>
            <BsTrash />
          </div>
        </div>
        <IncDecButton order={order} />
      </div>
    </div>
  );
};

export default Cart;
