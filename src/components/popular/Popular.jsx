import React from "react";
import { productCard } from "../../data";
import style from "./popular.module.css";
import ProductCard from "../product_card/ProductCard";

const Popular = () => {
  const filtered = productCard.filter((el) => el.rating > 4.8);

  return (
    <div className={style.popular}>
      <div className={style.popular_container}>
        <h3 className="titles">
          Popular <span className="span_underline">Now</span>
        </h3>
        <div className={style.product_card}>
          {filtered.map((el) => (
            <ProductCard key={el.id} product={el} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
