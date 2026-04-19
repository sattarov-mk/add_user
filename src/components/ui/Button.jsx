import styles from "./Button.module.css";

function Btn({ children, ...rest }) {
  return (
    // children — это текст или вложенные элементы внутри кнопки.
    // ...rest позволяет передавать любые стандартные props кнопки:
    // onClick, type, disabled и т.д.
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
}

export default Btn;
