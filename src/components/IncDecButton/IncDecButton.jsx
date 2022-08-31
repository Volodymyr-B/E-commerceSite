import React from "react";
import { useDispatch } from "react-redux";
import { decrementProduct, incrementProduct } from "../../redux/reducer";
import style from "./incDecButton.module.css";

const IncDecButton = ({ order }) => {
  const dispatch = useDispatch();

  const handleProductDec = (e) => {
    e.stopPropagation();
    dispatch(decrementProduct(order));
  };
  const handleProductInc = (e) => {
    e.stopPropagation();
    dispatch(incrementProduct(order));
  };

  return (
    <div className={style.incDecButton}>
      <button
        disabled={order.quantity <= 1}
        className={style.btn_left}
        onClick={handleProductDec}
      >
        -
      </button>
      <div className={style.product_quantity}>{order.quantity}</div>
      <button className={style.btn_right} onClick={handleProductInc}>
        +
      </button>
    </div>
  );
};

export default IncDecButton;
