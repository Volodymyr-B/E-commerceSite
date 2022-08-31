import React from "react";
import style from "./slider.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";
import { slider } from "../../data";
import BGImg from "../../assets/BG-img.png";

const Slider = () => {
  return (
    <div className={style.slider}>
      <div className={style.slider_backGround}>
        <img src={BGImg} alt="_" />
      </div>
      <div className={style.slider_text}>
        <div className={style.text_container}>
          <div className="titles">What they say about us</div>
          <div className={style.slider_info}>
            We always provide the best service and always maintain the quality
            of coffee
          </div>
        </div>
      </div>
      <div>
        <Splide
          options={{
            type: "slide",
            perPage: 3,
            perMove: 1,
            arrows: false,
            width: 890,
            wheel: true,
            breakpoints: {
              1023: {
                width: 580,
                perPage: 2,
              },
              600: {
                width: 280,
                perPage: 1,
              },
            },
          }}
        >
          {slider.map((el) => (
            <SplideSlide key={el.id}>
              <img src={el.img} alt="sliders" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Slider;
