import styles from "./AppCard.module.css";

function AppCard(value) {
  const { name, icon, dev, span } = value.value;

  return (
    <div className={styles.maincard}>
      <div className={styles.subcard}>
        <img className={styles.img} alt="icon" src={icon} />
        <p className={styles.text}>{name}</p>
      </div>
      <div className={styles.descCard}>
        <p className={styles.desc}>{dev}</p>
        <p className={styles.desc}>Date: {span}</p>
      </div>
      <div>
        <button className={styles.button}>Add to List</button>
      </div>
    </div>
  );
}

export default AppCard;
