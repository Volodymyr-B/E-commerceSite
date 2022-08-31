import React from "react";
import { Link } from "react-router-dom";
import style from "./finish.module.css";

const Finish = () => {
  return (
    <div className={style.finish}>
      <div className={style.text}>
        Thank you , we deliver your order in 30 minutes. Enjoy!
      </div>
      <div>
        <Link className="Btn" to="/">
          Home
        </Link>
      </div>
    </div>
  );
};

export default Finish;
