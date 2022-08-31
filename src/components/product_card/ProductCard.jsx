import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/reducer";
import style from "./productCard.module.css";
import star from "../../assets/star.png";
import ProductCardModal from "./modal/ProductCardModal";

const Product_card = ({ product }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  const dispatch = useDispatch();
  const handleProduct = (e) => {
    e.stopPropagation();
    dispatch(addProductToCart(product));
  };

  return (
    <div className={style.product_card}>
      <div className={style.card_star}>
        <div className={style.card_rating}>
          {product.rating}
          <img src={star} alt="icon" />
        </div>
        <div className={style.img_container}>
          <img src={product.img} alt="img" onClick={toggle} />
        </div>
      </div>
      <div className={style.card_info}>
        <div className={style.card_text_container}>
          <div className={style.card_name}>{product.name}</div>
          <div className={style.card_text}>{product.info}</div>
        </div>
        <div className={style.card_price_container}>
          <div className={style.card_price}>{product.price}$</div>
          <div className={style.card_btn} onClick={handleProduct}>
            <img src={product.btn} alt="cart" />
          </div>
        </div>
      </div>
      {modal && (
        <div className={style.modal_wrapper} onClick={() => setModal(false)}>
          <div className={style.modal} onClick={(e) => e.stopPropagation()}>
            <ProductCardModal product={product} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Product_card;
