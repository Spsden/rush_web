import styles from "./SearchBar.module.css";
import { Layout, Search } from "react-feather";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";
import useDebounce from "../Hooks/useDebounce";

function SearchBar() {
  const router = useRouter();
  const [query, setQuery] = useState();

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

  // const handlebutton =(some)=> {

  //   if(some != ""){

  //     console.log("");
  //    // const q = e.currentTarget.value;
  //     router.push(
  //       {
  //         pathname: `/searchresults`,
  //         query: some ? { some } : {},
  //       },
  //       undefined,
  //       {
  //         shallow: false,
  //       }
  //     );


  //   } else{
  //     console.log("emptuy")
  //   }

   
  // }

  return (
    <div className={styles.card}>
      {/* <form onSubmit={handleEnterKey} className={styles.form}> */}
      <input
        type="search"
        className={styles.input}
        //value={searchQuery}
        placeholder="Search app"
        onKeyUp={handleEnterKey}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
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

      <button
        className={styles.button}
        onClick={(e)=>{
          console.log(e.target.value)
        }}
        
      >
        <Search />
      </button>
    </div>
  );
}

export default SearchBar;
