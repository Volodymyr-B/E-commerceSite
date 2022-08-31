import React from "react";
import style from "./aboutUs.module.css";
import BGImg from "../../assets/BG-img.png";
import BGPic from "../../assets/BG-pic.png";

const AboutUs = () => {
  return (
    <div id="aboutUs" className={style.aboutUs}>
      <div className={style.aboutUs_left}>
        <img className={style.coffee_bg} src={BGImg} alt="BGImg" />
        <img className={style.coffee_big_img} src={BGPic} alt="Pic" />
      </div>
      <div className={style.aboutUs_right}>
        <div className={style.aboutUs_title}>
          <div className="titles">
            About <span className="span_underline">us</span>
          </div>

          <div className={style.aboutUs_text}>
            We provide quality coffee, and ready to deliver.
          </div>
          <div className={style.aboutUs_info}>
            We are a company that makes and distributes delicious drinks. Our
            main product is made with a secret recipe and available in stores
            worldwide.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
