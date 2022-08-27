import styles from "./SearchBar.module.css";
import { Layout, Search } from "react-feather";
import { useRouter } from "next/router";
import { useState } from "react";
import { PopularApps } from "./SearchSuggestionsData";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const modalHandler = () => {
    setVisible(!visible);
  };

  const Suggestions = PopularApps.filter((item) => {
    const searchQuery = query.toLowerCase();
    const entireList = item.toLowerCase();

    return searchQuery && entireList.startsWith(searchQuery);
  });

  const searchApp = (e) => {
    e.preventDefault();

    const qry = query;

    router.push(
      {
        pathname: `/searchresults`,
        query: qry ? { qry } : {},
      },
      undefined,
      {
        shallow: false,
      }
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        <form onSubmit={searchApp} className={styles.form}>
          <input
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
            className={styles.input}
            placeholder="Search app"
            onFocus={() => {
              console.log("beep");
              setVisible(!visible);
            }}
          ></input>
        </form>

        <button className={styles.button} onClick={query ? searchApp : null}>
          <Search />
        </button>
      </div>
      {Suggestions.length == 0 ? (
        <></>
      ) : (
        <div className={styles.suggestionsbar}>
          {Suggestions.map((value, key) => {
            return (
              <div key={key} className={styles.suggestionitem}>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBar;
