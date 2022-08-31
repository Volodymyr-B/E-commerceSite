import React from "react";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../../../redux/reducer";
import style from "./searchResults.module.css";

const Search_results = ({ results }) => {
  const dispatch = useDispatch();
  const handleProduct = () => {
    dispatch(addProductToCart(results));
  };

  return (
    <div className={style.results}>
      <div className={style.results_img}>
        <img src={results.img} alt="pic" />
      </div>
      <div>{results.name}</div>
      <div>{results.price}$</div>
      <div className={style.results_btn} onClick={handleProduct}>
        <img src={results.btn} alt="cart" />
      </div>
    </div>
  );
};

export default Search_results;
