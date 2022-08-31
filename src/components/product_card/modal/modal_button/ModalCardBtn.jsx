import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../redux/reducer";
import style from "./modalCardBtn.module.css";

const Modal_card_btn = ({ product }) => {
  const [count, setCount] = useState(product.quantity);
  const handleInc = () => setCount((prev) => prev + 1);
  const handleDec = () => setCount((prev) => prev - 1);
  const dispatch = useDispatch();
  const handleProduct = (e) => {
    e.stopPropagation();
    dispatch(addProductToCart({ ...product, quantity: count }));
  };
  return (
    <div className={style.card_container}>
      <div className={style.card_count}>
        <button
          className={style.btn_left}
          disabled={count <= 1}
          onClick={handleDec}
        >
          -
        </button>
        <div className={style.product_quantity}>{count}</div>
        <button className={style.btn_right} onClick={handleInc}>
          +
        </button>
      </div>
      <button className="Btn" onClick={handleProduct}>
        Add to cart
      </button>
    </div>
  );
};

export default Modal_card_btn;
