import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import style from "./footer.module.css";
import footerBG from "../../assets/footer-BG.png";

const Footer = () => {
  const ref = useRef();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    ref.current = data;
    reset();
  };
  return (
    <div className={style.footer}>
      <div className={style.footer_BG}>
        <img src={footerBG} alt="img" />
      </div>
      <div className={style.footer_text}>
        <div className={style.footer_subscribe}>
          Subscribe to receive the latest news
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className={style.footer_search}>
          <input
            className={style.footer_input}
            {...register("mail", {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
            placeholder="Email address"
          />
          <button type="submit" className={style.footer_btn}>
            Order now
          </button>
        </form>
        {errors.mail && <p>Please enter valid Email</p>}
      </div>
    </div>
  );
};

export default Footer;
