import React from "react";
import styles from "./SearchBar.module.css";
import { Input } from "@nextui-org/react";
import { Search } from "react-feather";

function SearchBar() {
  return (
    <div>
      <Input
        clearable
        // underlined
        labelPlaceholder="Search"
        height="100px"
        width="70vh"
        contentRight={<Search />}
      />
    </div>
  );
}

export default SearchBar;
