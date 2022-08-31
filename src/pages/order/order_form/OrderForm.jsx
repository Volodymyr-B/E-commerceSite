import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import style from "./orderForm.module.css";

const OrderForm = () => {
  let send = [];
  const order = useSelector((state) => state.cart.itemsInCart);
  order.forEach((el) => send.push([el.name, el.quantity]));
  const navigate = useNavigate();
  const goFinish = () => {
    navigate("/finish");
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    send.push(data);
    goFinish();
    reset();
  };

  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.titles}>Personal data</div>
        <div className={style.input_container}>
          <input
            {...register("name", { required: true })}
            placeholder="name*"
          />
          <div className={style.form_error}>
            {errors?.name && <p>please enter your name</p>}
          </div>
        </div>
        <div className={style.input_container}>
          <input
            {...register("phone", {
              required: true,
              minLength: 10,
            })}
            type="number"
            placeholder="phone +38___ __ __ ___*"
          />
          <div className={style.form_error}>
            {errors?.phone && <p>please enter valid phone number</p>}
          </div>
        </div>
        <div className={style.titles}>Delivery address</div>
        <select name="city" {...register("city")}>
          <option value="Kharkiv">Kharkiv</option>
          <option value="London">London</option>
          <option value="Paris">Paris</option>
        </select>
        <div className={style.input_container}>
          <input
            {...register("address", { required: true, minLength: 10 })}
            placeholder="address*"
          />
          <div className={style.form_error}>
            {errors?.address && <p>address should be little longer </p>}
          </div>
        </div>
        <textarea
          {...register("comments")}
          rows="5"
          placeholder="comment"
        ></textarea>
        <div className={style.order_btn}>
          <button type="submit" disabled={!isValid} className="Btn">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderForm;
