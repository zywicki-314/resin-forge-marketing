import styles from "./offers-cards-wr.module.css";
import { useSelector } from "react-redux";

function OffersCardsWr() {
  const lang = useSelector((state) => state.lang);

  return (
    <div className={styles.offersItems}>
      <div className={styles.item}>
        <div className={styles.sideR}>
          <img
            src="\img\megafon.png"
            alt="arrow"
            className={styles.digitalMarketing}
          />
        </div>
        <div className={styles.sideL}>
          <h3 className={styles.h3}>Digital marketing</h3>
          <p className={styles.text}>
            {lang === "pl"
              ? "Marzysz o sukcesie online?"
              : "Do you dream of online success?"}
            <br />{" "}
            {lang === "pl"
              ? "Aktywujmy Facebooka, Instagrama i Google Ads!"
              : "Let's activate Facebook, Instagram and Google Ads!"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OffersCardsWr;
