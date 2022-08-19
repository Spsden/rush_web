import React from "react";

import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div>
{/* 
<div className= {styles.rushname}>
      Rush
    </div> */}
      <div className={styles.sidebar}>
        <ul className={styles.sidebarlist}>
          {SidebarData.map((val, key) => {
            return (
              <li key={key} className={styles.row}>
                <div id={styles.icon}>{val.icon}</div>
                <div id={styles.title}>{val.title}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
