import React from "react";
import { useSelector } from "react-redux";
import Cart from "../../../components/header/mainCart/cart/Cart";
import style from "./orderData.module.css";

const OrderData = () => {
  const order = useSelector((state) => state.cart.itemsInCart);
  const totalPrice = order.reduce(
    (acc, el) => acc + el.price * el.quantity,
    20
  );

  return (
    <div className={style.order_data}>
      <div className={style.order_data_title}>Order</div>
      <div className={style.order_list}>
        {order.map((el) => (
          <Cart key={el.id} order={el} />
        ))}
      </div>
      <div className={style.total}>
        <div>
          Delivery : <span>20$</span>
        </div>
        <div className={style.total_price}>
          Total price : <span>{totalPrice}$</span>
        </div>
      </div>
    </div>
  );
};

export default OrderData;
