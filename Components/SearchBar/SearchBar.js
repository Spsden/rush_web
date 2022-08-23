import React from "react";
import styles from "./SearchBar.module.css";
import { Search } from "react-feather";




function SearchBar() {
  return (
    <div className={styles.card}>
      <input className= {styles.input}>
      </input>
      <button className= {styles.button}>
        <Search/>

      </button>
    </div>
  );
}

export default SearchBar;
