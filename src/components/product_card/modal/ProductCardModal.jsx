import React from "react";
import ModalCardBtn from "./modal_button/ModalCardBtn";
import style from "./productCardModal.module.css";

const Product_card_modal = ({ product }) => {
  return (
    <div className={style.card_container}>
      <div className={style.card_top}>
        <div className={style.card_img}>
          <img src={product.img} alt="img" />
        </div>
        <div className={style.card_top_text}>
          <div>{product.name}</div>
          <div>price : {product.price}$</div>

          <div>
            <ModalCardBtn product={product} />
          </div>
        </div>
      </div>
      <div className={style.card_description}>{product.description}</div>
    </div>
  );
};

export default Product_card_modal;
