import styles from "./intro-col.module.css";
import Title from "./title";
import IntroDescription from "./intro-descr";

function IntroCol() {
  return (
    <div className={styles.introCol}>
      <Title />
      <IntroDescription className="font-poppins" />
    </div>
  );
}

export default IntroCol;
