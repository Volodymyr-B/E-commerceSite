import React from "react";
import { productCard } from "../../data";
import ProductCard from "../product_card/ProductCard";
import style from "./menu.module.css";

const Menu = () => {
  return (
    <div className={style.menu} id="products">
      <h3 className="titles">
        Special menu <span className="span_underline">for you</span>
      </h3>
      <div className={style.menu_list}>
        {productCard.map((el) => (
          <ProductCard key={el.id} product={el} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
