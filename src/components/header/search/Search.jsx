import React, { useState } from "react";
import { productCard } from "../../../data";
import style from "./search.module.css";
import SearchResults from "./search_results/SearchResults";

const Search = () => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleSearch = (e) => setSearch(e.target.value);
  const hideModal = () => setShow(false);
  const filtered = productCard.filter((el) =>
    el.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={style.input_container}>
      <input
        className={style.input}
        onChange={handleSearch}
        onClick={() => setShow(true)}
        placeholder="search"
      />
      {show && (
        <>
          <div className={style.search_result}>
            {search.length > 2 &&
              filtered.map((el) => <SearchResults key={el.id} results={el} />)}
          </div>
          <div className={style.search_modal} onClick={hideModal}></div>
        </>
      )}
    </div>
  );
};

export default Search;
