import React from "react";
import style from "./intro.module.css";
import hero from "../../assets/img-hero.png";
import introBG from "../../assets/intro-BG.png";

const Intro = () => {
  return (
    <div id="home" className={style.intro}>
      <div className={style.intro_bg}>
        <img className={style.img_top} src={introBG} alt="bob" />
        <img className={style.img_bottom} src={introBG} alt="bob" />
      </div>
      <div className={style.text_container}>
        <h2>
          Enjoy your <span className={style.span}>coffee</span> before your
          activity
        </h2>
        <div className={style.text_info}>
          Boost your productivity and build your mood with a glass of coffee in
          the morning
        </div>
      </div>
      <div className={style.intro_img_container}>
        <img className={style.intro_img} src={hero} alt="main" />
      </div>
    </div>
  );
};

export default Intro;
