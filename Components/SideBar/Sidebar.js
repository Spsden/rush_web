import Link from "next/link";
import React from "react";

import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.rushname}>Rush</div>

      <nav>
        <ul className={styles.sidebarlist}>
          {SidebarData.map((val, key) => {
            return (
              <li key={key} >
                <Link href={val.link}>
                  <a className= {styles.rowblock}>
                    
                      <div id={styles.icon}>{val.icon}</div>
                      <div id={styles.title}>{val.title}</div>
                    
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* <ul className={styles.sidebarlist}>
          {SidebarData.map((val, key) => {
            return (
              <li key={key} className={styles.row}>
                <div id={styles.icon}>{val.icon}</div>
                <div id={styles.title}>{val.title}</div>
              </li>
            );
          })}
        </ul> */}
    </div>
  );
}

export default Sidebar;
