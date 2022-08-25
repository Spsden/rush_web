import styles from "./SearchBar.module.css";
import { Layout, Search } from "react-feather";
import { useRouter } from "next/router";
import React, { useState } from "react";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);

  const modalHandler = () => {
    setVisible(!visible);
  };

  const Suggestions = PopularApps.filter(item => {
    const searchQuery = query.toLowerCase();
    const entireList = item.toLowerCase();
   

    return searchQuery && entireList.startsWith(searchQuery);
  })

  // useEffect(() => {

  //   const closeModal = e => {
  //     if(e.path[0] !== modalRef.current)
  //     setVisible(false);
  //   }
  //   document.body.addEventListener('click',closeModal);

  //   return () => document.removeEventListener('click',closeModal);
  // },[])

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
          shallow: false,
        }
      );
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.bar}>
        {/* <form onSubmit={handleEnterKey} className={styles.form}> */}
        <input
          // ref={modalRef}
          type="search"
          className={styles.input}
          //value={searchQuery}
          placeholder="Search app"
          onKeyUp={handleEnterKey}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onFocus={() => {
            console.log("beep");
            setVisible(!visible);

            // modalHandler()
          }}
        ></input>
        {/* </form> */}

        <button
          className={styles.button}
          onClick={(e) => {
            console.log(e.target.value);
          }}
        >
          <Search />
        </button>
      </div>
      {Suggestions.length == 0 ? <></> :<div className={styles.suggestionsbar}>
      {Suggestions.map((value, key) => {
        return (
          <div key={key} className={styles.suggestionitem} >
            <p>{value}</p>
          </div>
        );
      })}

      </div>}
      
      
    </div>
  );
}
import { PopularApps } from "./SearchSuggestionsData";

export default SearchBar;
