import style from "./asideContact.module.css";
import MediaQuery from "react-responsive";
import SmButton from "./sm-button/sm-button.tsx";
import { NavLink } from "react-router-dom";

function AsideContact() {
  const linkFacebook = "https://www.facebook.com/";
  const linkInstagram = "https://www.instagram.com/";
  const linkLinkdIn = "https://www.linkedin.com";
  const linkPhone = "tel:+48537503633";

  return (
    <div className={style.asideContact}>
      <SmButton color="grey" name="facebook" href={linkFacebook} />
      <SmButton color="grey" name="instagram" href={linkInstagram} />
      <SmButton color="grey" name="linkdIn" href={linkLinkdIn} />

      <MediaQuery maxWidth={768}>
        <SmButton color="primary" name="phone" href={linkPhone} />
      </MediaQuery>

      <MediaQuery minWidth={769}>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? `${style.email} ${style.sm} ${style.primary}`
              : `${style.email} ${style.sm} ${style.primary}`
          }
        />
      </MediaQuery>
    </div>
  );
}

export default AsideContact;
