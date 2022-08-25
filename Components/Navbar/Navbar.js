import { ShoppingBag } from "react-feather";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";

function Navbar() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <SearchBar />

        <Button
          auto
          className={styles.cartBtn}
          // color="#0070F3"
          icon={<ShoppingBag />}
        >
          App Cart
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
