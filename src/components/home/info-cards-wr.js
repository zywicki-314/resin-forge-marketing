import React from "react";
import style from "./info-cards-wr.module.css";
import InfoCard from "./info-cards/InfoCard.tsx";
import { blogDataPl, blogDataEn } from "../../data/blogData";
import ArrowBlogLink from "./info-cards/ArrowBlogLink.tsx";
import InfoCardTexts from "../../data/homePageInfoCard.js";
import { useSelector } from "react-redux";

function InfoCardsWr() {
  const lang = useSelector((state) => state.lang);

  const blogData = lang === "pl" ? blogDataPl : blogDataEn;

  const changeLangHandler = (contant) => {
    const [card, type] = contant;
    switch (lang) {
      case "pl":
        contant = InfoCardTexts[card][type].pl;
        break;
      case "en":
        contant = InfoCardTexts[card][type].en;
        break;
      default:
        contant = "Ooops!";
    }
    return contant;
  };

  const card1_title = ["card1", "title"];
  const card1_text = ["card1", "text"];
  const card2_title = ["card2", "title"];
  const card2_text = ["card2", "text"];
  const card3_title = ["card3", "title"];
  const card3_text = ["card3", "text"];
  const card4_title = ["card4", "title"];
  const card4_text = ["card4", "text"];
  return (
    <div className={style.infoCardsWr}>
      <InfoCard
        title={changeLangHandler(card1_title)}
        border={true}
        text={changeLangHandler(card1_text)}
        textWeight
        bcColor="primary"
      >
        <ArrowBlogLink path={`${blogData[1].path}`} />
      </InfoCard>
      <InfoCard
        title={changeLangHandler(card2_title)}
        border={false}
        text={changeLangHandler(card2_text)}
        textWeight="300"
        bcColor="grey"
      />
      <InfoCard
        title={changeLangHandler(card3_title)}
        border={false}
        text={changeLangHandler(card3_text)}
        textWeight
        bcColor="cappuccino"
      />
      <InfoCard
        title={changeLangHandler(card4_title)}
        border={true}
        text={changeLangHandler(card4_text)}
        textWeight
        bcColor="beige"
      >
        <ArrowBlogLink path={`${blogData[2].path}`} />
      </InfoCard>
    </div>
  );
}

export default InfoCardsWr;
