import React from "react";
import { JSX } from "react";
import { InfoCardProps } from "./InfoCard.props";
import style from "./InfoCard.module.css";
// import ArrowBlogLink from "./ArrowBlogLink";

function InfoCard({
  title,
  text,
  textWeight = "400",
  bcColor,
  border,
  children,
  ...props
}: InfoCardProps): JSX.Element {
  const cardParams = `${style.iCard} ${style[bcColor]}`;

  const titleParams = border
    ? `${style.title} ${style["title-border"]}`
    : `${style.title}  ${style["title-border-def"]}`;

  let textParams: string;

  switch (textWeight) {
    case "300":
      textParams = `${style.small}`;
      break;
    case "400":
      textParams = `${style.midle}`;
      break;
    case "500":
      textParams = `${style["bold-s"]}`;
      break;
    case "600":
      textParams = `${style["bold-m"]}`;
      break;
    case "700":
      textParams = `${style["bold-xl"]}`;
      break;
  }

  return (
    <div className={cardParams}>
      <h3 className={titleParams}>{title}</h3>
      <p className={textParams}>{text}</p>
      {/* {ankerToBlogArticle ? <ArrowBlogLink path={ankerToBlogArticle} /> : <></>} */}
      {children}
    </div>
  );
}

export default InfoCard;
