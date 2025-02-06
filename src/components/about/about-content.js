import {
  AboutTextPartEn2,
  AboutTextPartEn1,
  AboutTextPartPl1,
  AboutTextPartPl2,
} from "../../data/aboutText";
import style from "./about-content.module.css";
import { useSelector } from "react-redux";

const AboutContent = () => {
  const lang = useSelector((state) => state.lang);
  return (
    <div className={style.aboutContent}>
      <div className={style.intro}>
        <div className={style.titleWr}>
          <h1 className={style.title}>
            <span className={`${style.swTop} ${style.sw}`}>why</span>
            <span className={`${style.swBottom} ${style.sw}`}>us</span>
          </h1>
        </div>
        <div className={style.textIntro}>
          {lang === "pl" ? (
            <AboutTextPartPl1 text={style.text} />
          ) : (
            <AboutTextPartEn1 text={style.text} />
          )}
        </div>
      </div>
      <div className={style.content}>
        {lang === "pl" ? (
          <AboutTextPartPl2 text={style.text} />
        ) : (
          <AboutTextPartEn2 text={style.text} />
        )}
      </div>
    </div>
  );
};

export default AboutContent;
