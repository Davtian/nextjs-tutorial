import styles from "./page.module.css";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.?
        </h1>
        <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.?
        </p>
      </div>
      <div className={styles.item}>
      </div>
    </div>
  );
}
