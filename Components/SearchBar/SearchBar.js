
import styles from "./SearchBar.module.css";
import { Search } from "react-feather";
import {useRouter} from 'next/router'




function SearchBar() {

  const router = useRouter();
  return (
    <div className={styles.card}>
      <input className= {styles.input}
      onFocus = {()=> {
        router.push(
          '/searchresults'
        )

      }}>
      </input>
      <button className= {styles.button}>
        <Search/>

      </button>
    </div>
  );
}

export default SearchBar;
