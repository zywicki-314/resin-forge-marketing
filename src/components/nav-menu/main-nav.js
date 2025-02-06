import { Link } from "react-router-dom";
import MenuNav from "./menu-nav-and-mob";
import MediaQuery from "react-responsive";
import style from "./main-nav.module.css";
import { useState } from "react";

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
      <Link to="." className={style.logoTitle}>
        <img
          src="/img/Logo.png"
          alt="logo ResinForge"
          className={style.logoHeader}
        />
        <span className={style.bizName}>Resin Forge</span>
      </Link>
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
