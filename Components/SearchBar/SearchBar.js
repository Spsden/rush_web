import styles from "./SearchBar.module.css";
import { Search } from "react-feather";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

function SearchBar() {
  const [searchQuery, setQuery] = useState(" ");
  const url = "https://rushy-spsden.vercel.app/rush/app/";

  const searchResult = (event) => {
    event.preventDefault();

    if (searchQuery != " ") {
      axios
        .get(url + searchQuery, {})
        .then((response) => {
          console.log(response.data[0]);

          return response.data;
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
        });
    } else {
      console.log("no query");
    }
  };
  console.log(searchQuery);

  const router = useRouter();
  return (
    <div className={styles.card}>
      <form onSubmit={searchResult} className={styles.form}>
        <input
          type="search"
          className={styles.input}
          //value={searchQuery}
          placeholder="Search app"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={() => {
            //router.push("/searchresults");
          }}
        ></input>
      </form>

      <button className={styles.button}>
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
