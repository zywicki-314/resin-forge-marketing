import styles from "./body-wr.module.css";

function BodyWr({ children }) {
  return <div className={styles.bodyWr}>{children}</div>;
}

export default BodyWr;
