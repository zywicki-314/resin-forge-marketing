import style from "./decor-window.module.css";

function DecorWindow({ colorDots, dotsNum, shadow, children, ...props }) {
  const dotstyle = `${style.dot} ${style[colorDots]}`;

  return (
    <div className={`${style.mainBlock} ${style[shadow]}`}>
      <div className={style.decorNavBar}>
        {Array.from({ length: dotsNum }).map((_, index) => {
          return <div className={dotstyle} key={index} index={index}></div>;
        })}
      </div>
      <div className={style.contentPart}>{children}</div>
    </div>
  );
}

export default DecorWindow;
