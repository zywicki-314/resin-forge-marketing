import style from "./cards-wr.module.css";
import OffersCardsWr from "./offers-cards-wr";
import InfoCardsWr from "./info-cards-wr";

function CardsWr(props) {
  return (
    <div className={style.cardsWr}>
      <OffersCardsWr />
      <InfoCardsWr />
    </div>
  );
}

export default CardsWr;
