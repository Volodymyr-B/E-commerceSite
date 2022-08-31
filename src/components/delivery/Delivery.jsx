import React from "react";
import style from "./delivery.module.css";
import { deliveryImg } from "../../data";

const Delivery = () => {
  return (
    <div id="about" className={style.delivery}>
      <div>
        <h3 className="titles">
          How to use delivery <span className="span_underline">service</span>
        </h3>
        <div className={style.delivery_service}>
          {deliveryImg.map((el) => (
            <div key={el.id} className={style.delivery_card}>
              <img src={el.img} alt="img" />
              <div className={style.card_text}>{el.text}</div>
              <div>{el.info}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
