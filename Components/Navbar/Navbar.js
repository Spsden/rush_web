import { ShoppingBag } from "react-feather";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import { Input, Button } from "@nextui-org/react";
import { useRouter } from "next/router";

function Navbar() {

  const router = useRouter();
  return (
    <div className={styles.navy}>
      {/* <SearchBar /> */}
      <Input
        width="40vw"
        color="$blue800"
        labelLeft="Search"
        style={{ fontSize: 17, padding: 20 }}
        className={styles.textInput}
        placeholder="Enter app name"
        required
        onFocus={() => router.push('/searchresults')}
      />

      <Button
        auto
        className={styles.cartBtn}
        // color="#0070F3"
        icon={<ShoppingBag />}
      >
        App Cart
      </Button>
    </div>
  );
}

export default Navbar;
