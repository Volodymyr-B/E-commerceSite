import React from "react";
import { useSelector } from "react-redux";
import style from "./order.module.css";
import OrderData from "./order_data/OrderData";
import OrderForm from "./order_form/OrderForm";

const Order = () => {
  const order = useSelector((state) => state.cart.itemsInCart);

  return (
    <div className={style.order_container}>
      {order.length >= 1 ? (
        <>
          <OrderForm />
          <OrderData />
        </>
      ) : (
        <div className={style.order_empty}>
          Please, add something to cart first
        </div>
      )}
    </div>
  );
};

export default Order;
