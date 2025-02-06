import style from "./contact.module.css";
import { useSelector } from "react-redux";
import useInput from "../../hooks/use-input";
import { useState } from "react";
import MessageSent from "./message-sent";
import BlurContainer from "./blur-container";

const Contact = () => {
  const [checked, setChecked] = useState(false);
  const [messageSendStatus, setMessageSendStatus] = useState(false);
  const lang = useSelector((state) => state.lang);
  const {
    value: enteredName,
    hasError: hasNameInputError,
    isValid: isEnteredNameValid,
    inputChangeHandler: nameInputChangeHandler,
    inputLostFocusHandler: nameInputLostFocusHandler,
    resetValues: resetNameInputValues,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredEmail,
    hasError: hasEmailInputError,
    isValid: isEnteredEmailValid,
    inputChangeHandler: emailInputChangeHandler,
    inputLostFocusHandler: emailInputLostFocusHandler,
    resetValues: resetEmailInputValues,
  } = useInput((value) => value.trim() !== "" && value.trim("@"));
  const {
    value: enteredPhone,
    hasError: hasPhoneInputError,
    isValid: isEnteredPhoneValid,
    inputChangeHandler: phoneInputChangeHandler,
    inputLostFocusHandler: phoneInputLostFocusHandler,
    resetValues: resetPhoneInputValues,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredMessage,
    hasError: hasMessageInputError,
    isValid: isEnteredMessageValid,
    inputChangeHandler: messageInputChangeHandler,
    inputLostFocusHandler: messageInputLostFocusHandler,
    resetValues: resetMessageInputValues,
  } = useInput((value) => value.trim() !== "");

  const checkboxChangeHandler = () => {
    setChecked(!checked);
  };

  let isFormValid = false;
  if (
    isEnteredNameValid &&
    isEnteredEmailValid &&
    isEnteredPhoneValid &&
    isEnteredMessageValid &&
    checked
  ) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!isEnteredNameValid) {
      return;
    }
    if (!isEnteredEmailValid) {
      return;
    }
    if (!isEnteredPhoneValid) {
      return;
    }
    if (!isEnteredMessageValid) {
      return;
    }
    if (!checked) {
      return;
    }

    const message = {
      name: enteredName,
      mail: enteredEmail,
      phone: enteredPhone,
      message: enteredMessage,
      formAgreement: checked,
    };

    console.log(message);
    setMessageSendStatus(true);
    setTimeout(() => setMessageSendStatus(false), 2500, setMessageSendStatus);

    resetNameInputValues();

    resetEmailInputValues();

    resetPhoneInputValues();

    resetMessageInputValues();
    setChecked(false);
  };

  return (
    <section className={style.container}>
      {messageSendStatus && <BlurContainer />}
      {messageSendStatus && <MessageSent />}
      <div className={style["title-wr"]}>
        <h1 className={style.title}>
          <span className={style.sw}>
            {lang === "pl" ? "Kontakt" : "Contact"}
          </span>
        </h1>
      </div>
      <div className={`${style.info} ${style.infoBorder}`}>
        <div className={style.leftSide}>
          <div className={style.map}></div>

          <div className={style.bizItems}>
            <div className={style.bizItem}>
              <span>Resin Forge</span>
            </div>
            <div className={style.bizItem}>
              <span>KRS: 0000000000</span>
              <span>NIP: 0000000000</span>
              <span>Regon: 000000000</span>
            </div>
          </div>
        </div>

        <div className={style.rightSide}>
          <div className={style.form}>
            <form
              action="#"
              method="post"
              id="form"
              className={style.formBody}
              onSubmit={formSubmitHandler}
            >
              <h1 className={style.formTitle}>
                {lang === "pl" ? "Napisz do nas" : "Contact Us"}
              </h1>
              <div className={`${style.formItem} ${style.formItemBbrdr}`}>
                <input
                  type="text"
                  id="formName"
                  name="name"
                  className={`${style.formInput} ${style._req}  ${
                    hasNameInputError ? style["_error"] : ""
                  }`}
                  placeholder="Name*:"
                  value={enteredName}
                  onChange={nameInputChangeHandler}
                  onBlur={nameInputLostFocusHandler}
                />
                {hasNameInputError && (
                  <p className={style.errorMessage}>wprowadź imię</p>
                )}
              </div>
              <div className={`${style.formItem} ${style.formItemBbrdr}`}>
                <input
                  type="email"
                  id="formEmail"
                  name="email"
                  placeholder="E-mail*:"
                  value={enteredEmail}
                  onChange={emailInputChangeHandler}
                  onBlur={emailInputLostFocusHandler}
                  className={`${style.formInput} ${style._req} ${
                    style._email
                  }   ${hasEmailInputError ? style["_error"] : ""}`}
                />
                {hasEmailInputError && (
                  <p className={style.errorMessage}>Wprowadź adres e-mail</p>
                )}
              </div>
              <div className={`${style.formItem} ${style.formItemBbrdr}`}>
                <input
                  type="text"
                  id="formPhone"
                  name="phone"
                  placeholder="tel*:"
                  value={enteredPhone}
                  onChange={phoneInputChangeHandler}
                  onBlur={phoneInputLostFocusHandler}
                  className={`${style.formInput} ${style._req} ${
                    hasPhoneInputError ? style["_error"] : ""
                  }`}
                />
                {hasPhoneInputError && (
                  <p className={style.errorMessage}>Wprowadź numer telefonu</p>
                )}
              </div>
              <div className={`${style.formItem} ${style.formItemBbrdr}`}>
                <textarea
                  name="message"
                  id="formMessage"
                  placeholder="Message*:"
                  value={enteredMessage}
                  onChange={messageInputChangeHandler}
                  onBlur={messageInputLostFocusHandler}
                  className={`${style.formInput} ${style._req}  ${
                    hasMessageInputError ? style["_error"] : ""
                  }`}
                ></textarea>
                {hasMessageInputError && (
                  <p className={style.errorMessage}>
                    Napisz w czym możemy pomóc
                  </p>
                )}
              </div>
              <div className={style.formItemCheckbox}>
                <div className="checkbox">
                  <input
                    type="checkbox"
                    id="formAgreement"
                    checked={checked}
                    name="agreement"
                    onChange={checkboxChangeHandler}
                    className={style.checkboxInput}
                  />
                  <label
                    htmlFor="formAgreement"
                    className={style.checkboxLabel}
                  >
                    <span>
                      {lang === "pl"
                        ? "Wyrażam zgodę na przetwarzanie danych osobowych zgodnie z regulaminem*"
                        : "I consent to the processing of personal data in accordance with the regulations*"}
                    </span>
                  </label>
                  {/* {hasCheckboxInputError && (
                    <p className={style.errorMessage}>
                      Bez twojej zgody mie moemy wys tej wiadomoci
                    </p>
                  )} */}
                </div>
              </div>
              <input type="hidden" id="token" name="token" />
              <button
                className={style.formButton}
                name="post"
                disabled={!isFormValid}
              >
                <span>{lang === "pl" ? "Wysłać" : "Send"}</span>
              </button>
            </form>
          </div>
          <div className={style.contactItems}>
            <div className={`${style.contactMail} ${style.contactItem}`}>
              <span>resin.forge@resin.forge.pl</span>
            </div>
            <div className={`${style.contactAdress} ${style.contactItem}`}>
              <span>ul.Bramowa 2, 20-400 Lublin</span>
            </div>

            <a
              href="tel:+48123456789"
              className={`${style.contactPhone} ${style.contactItem}`}
            >
              <span>+48 123 456 789</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
