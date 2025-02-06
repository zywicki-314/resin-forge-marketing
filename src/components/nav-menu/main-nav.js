import { NavLink } from "react-router-dom";
import MenuNav from "./menu-nav-and-mob";
import MediaQuery from "react-responsive";
import style from "./main-nav.module.css";
import { useState } from "react";
// import { isAction } from "redux";

const MainNav = () => {
  const [mobMenu, setMobMenu] = useState(false);

  const openMobMenu = () => {
    setMobMenu(true);
  };
  const closeMobMenu = () => {
    setMobMenu(false);
  };

  return (
    <nav className={style.mainNav}>
      {/* <Link
        className={style.gitLink}
        href="https://github.com/zywicki-314/resin-forge-marketing"
      >
        <img
          src="/img/github-svgrepo-com.svg"
          alt="logo GitHub"
          className={style.logoGitHub}
        />
      </Link> */}
      <NavLink
        to="."
        className={({ isActive }) =>
          isActive ? `${style.logoTitle}` : `${style.logoTitle}`
        }
      >
        <img
          src="/img/Logo.png"
          alt="logo ResinForge"
          className={style.logoHeader}
        />
        <span className={style.bizName}>Resin Forge</span>
      </NavLink>
      <MediaQuery maxWidth={1239}>
        <button className={style.menuToggle} onClick={openMobMenu}></button>
      </MediaQuery>
      <MediaQuery minWidth={1240}>
        <MenuNav />
      </MediaQuery>
      <MediaQuery maxWidth={1239}>
        {mobMenu && <MenuNav closeMobMenu={closeMobMenu} />}
      </MediaQuery>
    </nav>
  );
};

export default MainNav;
