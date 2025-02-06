import style from "./title.module.css";

function Title() {
  return (
    <h1 className={style.mainTitle}>
      <span className={style.sw1}> bespoke </span>
      <span className={style.sw2}> marketing </span>
      <span className={style.sw3}> solutions</span>
    </h1>
  );
}

export default Title;
