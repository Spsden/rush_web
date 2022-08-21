import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

import styles from "./Sidebar.module.css";
import { SidebarData } from "./SidebarData";

function Sidebar() {
  const [current, setCurrent] = useState("/home");

  const router = useRouter();

  if (router.asPath === current) {
  }

  return (
    <div className={styles.sidebar}>
      <div className={styles.rushname}>Rush</div>

      <nav>

      {SidebarData.map((val, key) => {
            return (

              <div key={key} className = {styles.siderow}>
                <Link key={key} href={val.link} >
                  <a
                    className={
                      router.asPath === val.link
                        ? styles.active
                        : styles.rowblock
                    }
                  >

                    
                    <div id={styles.icon}>{val.icon}</div>
                    <div id={styles.title}>{val.title}</div>
                  </a>
                </Link>

              </div>
              
                
              
            );
          })}
{/* 
        
        <ul className={styles.sidebarlist}>
          {SidebarData.map((val, key) => {
            return (
              <li key={key}>
                <Link  href={val.link}>
                  <a
                    className={
                      router.asPath === val.link
                        ? styles.active
                        : styles.rowblock
                    }
                  >

                    
                    <div id={styles.icon}>{val.icon}</div>
                    <div id={styles.title}>{val.title}</div>
                  </a>
                </Link>
              </li>
            );
          })}
        </ul> */}
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
