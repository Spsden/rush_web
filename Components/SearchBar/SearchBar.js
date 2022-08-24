import styles from "./SearchBar.module.css";
import { Layout, Search } from "react-feather";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "../Hooks/useDebounce";

function SearchBar() {
  const router = useRouter();

  const handleEnterKey = (e) => {
    e.preventDefault();

    if (e.key === "Enter") {
      console.log("pressed");
      const q = e.currentTarget.value;

      router.push(
        {
          pathname: `/searchresults`,
          query: q ? { q } : {},
        },
        undefined,
        {
          shallow: true,
        }
      );
    }
  };

  return (
    <div className={styles.card}>
      {/* <form onSubmit={handleEnterKey} className={styles.form}> */}
      <input
        type="search"
        className={styles.input}
        //value={searchQuery}
        placeholder="Search app"
        onKeyUp={handleEnterKey}
        // onChange={(e) => {
        //   setQuery(e.target.value);
        // }}
        // onFocus={() => {
        //   router.push('/searchresults'

        //   //   {
        //   //   pathname: '/searchresults',
        //   //   query : {
        //   //     result : 'dripp'
        //   //   }
        //   // }

        //   );
        // }}
      ></input>
      {/* </form> */}

      <button className={styles.button}>
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
