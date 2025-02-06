import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import MediaQuery from "react-responsive";
import style from "./menu-nav-and-mob.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
import queryString from "query-string";

const MenuNav = (props) => {
  const location = useLocation();
  const lang = useSelector((state) => state.lang);
  const query = queryString.parse(location.hash);
  const dispatchFunction = useDispatch();
  const navigate = useNavigate();
  const path = location.pathname;

  const langNavigateHandle = useCallback(() => {
    if (lang === "pl") {
      navigate({
        pathname: path,
        hash: "",
      });
    }
    if (lang === "en") {
      navigate({
        pathname: path,
        hash: "lang=en",
      });
    }
  }, [lang, path, navigate]);

  useEffect(() => {
    if (query.lang && query.lang === "en") {
      dispatchFunction({ type: "en" });
    }
  }, [dispatchFunction, query.lang]);

  useEffect(() => {
    langNavigateHandle();
  }, [langNavigateHandle, path]);

  const changeLangHandler = (event) => {
    switch (event.target.value) {
      case "pl":
        dispatchFunction({ type: "pl" });
        break;
      case "en":
        dispatchFunction({ type: "en" });
        break;
      default:
        dispatchFunction({ type: "pl" });
    }
  };

  let navMenu = {
    home: "Główna",
    about: "O nas",
    blog: "Blog",
    contact: "Kontakt",
  };

  if (lang === "pl") {
    navMenu = {
      home: "Główna",
      about: "O nas",
      blog: "Blog",
      contact: "Kontakt",
    };
  } else if (lang === "en") {
    navMenu = {
      home: "Home",
      about: "About",
      blog: "Blog",
      contact: "Contact",
    };
  } else {
    navMenu = {
      home: "Główna",
      about: "O nas",
      blog: "Blog",
      contact: "Kontakt",
    };
  }

  return (
    <div className={style.menuMobContainer} id="menuMob">
      <div className={style.asideMob}>
        <MediaQuery maxWidth={1240}>
          <button className={style.btnX} onClick={props.closeMobMenu}></button>
        </MediaQuery>
      </div>
      <div className={style.menuWr}>
        <NavLink to="." end className={style.logoTitleMobile}>
          <img
            src="/img/Logo.png"
            alt="logo Resin Forge"
            className={style.logoHeaderMob}
          />
          <span className={style.bizName}>Resin Forge</span>
        </NavLink>
        <div className={style.menu}>
          <NavLink to="/" className={`${style.menuHome} ${style.menuItem}`}>
            {navMenu.home}
          </NavLink>
          <NavLink
            to="/about"
            className={`${style.menuAbout} ${style.menuItem}`}
          >
            {navMenu.about}
          </NavLink>
          <NavLink to="/blog" className={`${style.menuBlog} ${style.menuItem}`}>
            {navMenu.blog}
          </NavLink>
          <NavLink
            to="/contact"
            className={`${style.menuContact} ${style.menuItem}`}
          >
            {navMenu.contact}
          </NavLink>
        </div>
        <div className={style.chLang}>
          <select
            name="selectLang"
            title="selectLang"
            id="select"
            className={style.selectCss}
            onChange={changeLangHandler}
          >
            <option className={style.langOption} value="pl">
              pl
            </option>
            <option className={style.langOption} value="en">
              en
            </option>
          </select>
        </div>
        <div className={style.smWrMob}>
          <Link
            href="https://www.facebook.com/"
            target="_blank"
            className={`${style.sm} ${style.fb}`}
          >
            <div className={style.smIcon}></div>
            <span className={style.smTitle}>Facebook</span>
          </Link>
          <Link
            href="https://www.instagram.com/"
            target="_blank"
            className={`${style.sm} ${style.insta}`}
          >
            <div className={style.smIcon}></div>
            <span className={style.smTitle}>Instagram</span>
          </Link>
          <Link
            href="https://www.linkedin.com/"
            target="_blank"
            className={`${style.sm} ${style.link}`}
          >
            <div className={style.smIcon}></div>
            <span className={style.smTitle}>Linkedin</span>
          </Link>
          <div id="btnCallMenu" className={`${style.sm} ${style.call}`}>
            <div className={style.smIconCall}></div>
            <span className={style.smTitle}>Call</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuNav;
