import styles from "./Card.module.css";

function Card({ children }) {
  // Универсальный обёрточный компонент.
  // Он просто добавляет единый визуальный стиль блоку.
  return <div className={styles.card}>{children}</div>;
}

export default Card;
