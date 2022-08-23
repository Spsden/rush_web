import React from "react";
import styles from "./AppCard.module.css";
import { Card, Grid, Text, Link } from "@nextui-org/react";

export default function AppCard(props) {
  const image =
    "https://www.apkmirror.com//wp-content/themes/APKMirror/ap_resize/ap_resize.php?src=https%3A%2F%2Fwww.apkmirror.com%2Fwp-content%2Fuploads%2F2022%2F08%2F46%2F62f801c3eb382.png&w=32&h=32&q=100";
  return (
    <div className={styles.card}>
      <div className={styles.upper}>
        <div className={styles.card_image}>
          <img
            alt="app"
            className={styles.img}
            src="https://www.apkmirror.com//wp-content/themes/APKMirror/ap_resize/ap_resize.php?src=https%3A%2F%2Fwww.apkmirror.com%2Fwp-content%2Fuploads%2F2021%2F04%2F26%2F6076776358a8c.png&w=32&h=32&q=100"
          />
        </div>
        <div className={styles.text}>
          <h2>Telegram</h2>
        </div>
        
       
      </div>
      <div>
        <button className={styles.button}>Add to cart</button>

        </div>
    </div>
  );
}
