import { ShoppingBag } from "react-feather";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./Navbar.module.css";
import { Input, Button } from "@nextui-org/react";

function Navbar() {
  return (
    <div className={styles.navy}>
     
      {/* <SearchBar /> */}
      <Input
        width="40vw"
        color="$blue800"
        
        labelLeft="Search"
        style={{  fontSize: 17, padding: 20 }}
        
        className={styles.textInput}
        placeholder="Enter app name"
        required
      />
      {/* <div className={styles.cartbox}>
        <div className={styles.icon}>
        </div>
        <h4 className={styles.title}>App cart</h4>
      </div> */}
      <Button
        auto
        className={styles.cartBtn}
        // color="#0070F3"
        icon={<ShoppingBag />}
      >
        App Cart
      </Button>
      {/*       
      <div className={styles.cartParent} >
        <ShoppingBag  />
        <h4 className={styles.cartText}>  App Cart</h4>
      </div> */}
    </div>
  );
}

export default Navbar;
