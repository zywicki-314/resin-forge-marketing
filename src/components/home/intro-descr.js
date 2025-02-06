import { Link } from "react-router-dom";
import { blogDataPl, blogDataEn } from "../../data/blogData";
import styles from "./intro-descr.module.css";
import { useSelector } from "react-redux";

function IntroDescription() {
  const lang = useSelector((state) => state.lang);
  const blogData = lang === "pl" ? blogDataPl : blogDataEn;

  const pl = {
    title: "Cele SMART: Mierzalne rezultaty dla Twojej firmy.",
    specific: "Konkretne",
    measurable: "Mierzalne",
    attainable: "Osiągalny",
    relevant: "Istotne",
    timely: "Określone w czasie",
    btn: "więcej",
  };
  const en = {
    title: "SMART goals: Measurable results for your business.",
    specific: "Specific",
    measurable: "Measurable",
    attainable: "Attainable",
    relevant: "Relevant",
    timely: "Timely",
    btn: "read more",
  };

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{lang === "pl" ? pl.title : en.title}</h2>
      <div className={styles.advWr}>
        <ul className={styles.advItems}>
          <li className={styles.advItem}>
            {lang === "pl" ? pl.specific : en.specific}
          </li>
          <li className={styles.advItem}>
            {" "}
            {lang === "pl" ? pl.measurable : en.measurable}
          </li>
          <li className={styles.advItem}>
            {" "}
            {lang === "pl" ? pl.attainable : en.attainable}
          </li>
          <li className={styles.advItem}>
            {" "}
            {lang === "pl" ? pl.relevant : en.relevant}
          </li>
          <li className={styles.advItem}>
            {" "}
            {lang === "pl" ? pl.timely : en.timely}
          </li>
        </ul>
        <Link to={`/blog/${blogData[0].path}`} className={styles.btn}>
          <span> {lang === "pl" ? pl.btn : en.btn} </span>
          <img src="/img/arrow-north_east.png" alt="arrow" />
        </Link>
      </div>
    </div>
  );
}

export default IntroDescription;
