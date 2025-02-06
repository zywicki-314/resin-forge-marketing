import { NavLink } from "react-router-dom";
import style from "./error-window.module.css";
import { useSelector } from "react-redux";
import DecorWindow from "./decor-window";

function ErrorWindow() {
  const lang = useSelector((state) => state.lang);
  return (
    <div className={style.mainBlock}>
      <div className={style.decorNavBar}>
        <div className={style.blackDot}></div>
        <div className={style.blackDot}></div>
      </div>
      <div className={style.contentPart}>
        <div className={style.typeError}>
          <span className={style.symbolError}>4</span>
          <span className={style.symbolError}>0</span>
          <span className={style.symbolError}>4</span>
        </div>
        <span className={style.errorComent}>
          {lang === "pl" ? "Strona nie znaleziona" : "Page not found"}
        </span>
      </div>
      <NavLink to="." className={style.homeLink}>
        {lang === "pl" ? "Wrócić na główną" : "Back to Home"}
      </NavLink>
      <div className={style.decorWindow1}>
        <DecorWindow dotsNum={2} colorDots="dark" shadow="bottomRight">
          <span className={style.decorWText1}>ERROR</span>
        </DecorWindow>
      </div>
      <div className={style.decorWindow2}>
        <DecorWindow dotsNum={2} colorDots="light" shadow="topLeft">
          <div className={style.mainCircle}>
            <div className={style.circle}></div>
          </div>
        </DecorWindow>
      </div>
      <div className={style.decorWindow3}>
        <DecorWindow dotsNum={1} colorDots="dark" shadow="bottomLeft">
          <img
            src="\img\Path_arrow.png"
            alt="arrow"
            className={style.errorArrow}
          />
        </DecorWindow>
      </div>
    </div>
  );
}

export default ErrorWindow;
