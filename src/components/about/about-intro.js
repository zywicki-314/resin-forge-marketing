import style from "./about-intro.module.css";
import { useSelector } from "react-redux";

const AboutIntro = () => {
  const lang = useSelector((state) => state.lang);
  return (
    <div className={style.intro}>
      <div className={`${style.hit}  ${style.hitAge} ${style.line}`}>
        <div className={style.string}>
          <span className={style.dataMain}>7 </span>
          <span className={style.dataDeco}>+</span>
        </div>
        <span className={style.title}>
          {lang === "pl" ? "Lat doświadczenia" : `Years Experience`}
        </span>
      </div>
      <div className={`${style.hit}  ${style.line}`}>
        <div className={style.string}>
          <span className={style.dataMain}>85 k </span>
          <span className={style.dataDeco}>+</span>
        </div>
        <span className={style.title}>
          {lang === "pl" ? "Zrealizowanych Projektów" : "Complete Project"}
        </span>
      </div>
      <div className={style.hit}>
        <div className={style.string}>
          <span className={style.dataMain}>120 k </span>
          <span className={style.dataDeco}>+ </span>
        </div>
        <span className={style.title}>
          {lang === "pl" ? "Firm nam zaufało" : "Trusted Company"}
        </span>
      </div>
    </div>
  );
};

export default AboutIntro;
