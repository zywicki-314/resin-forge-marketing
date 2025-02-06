import { useSelector } from "react-redux";
import style from "./message-sent.module.css";

function MessageSent() {
  const lang = useSelector((state) => state.lang);
  return (
    <div className={style.mainBlur}>
      <div className={style.container}>
        <div className={style.rightSide}>
          <img
            src="\img\sending-email.png"
            alt="sending-email"
            // className={style.digitalMarketing}
          />
        </div>
        <div className={style.leftSide}>
          <h3 className={style.title}>
            {lang === "pl"
              ? "Dziękujemy za wysłanie wiadomości"
              : "Thank you for sending a message"}
          </h3>
          <span className={style.text}>
            {lang === "pl"
              ? "Wkrótce się z Tobą skontaktujemy."
              : "We will contact you shortly."}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MessageSent;
