import React, { useState, useRef } from "react";
import BlogItem from "./blog-item";
import { blogDataPl, blogDataEn } from "../../data/blogData";
import style from "./blog-items-tab.module.css";
import { useSelector } from "react-redux";

const BlogItemsTab = () => {
  const [visibleItems, setVisibleItems] = useState(4);
  const renderedCountRef = useRef(4);
  const lang = useSelector((state) => state.lang);
  const blogData = lang === "pl" ? blogDataPl : blogDataEn;

  const handleShowMore = () => {
    const remainingItems = blogData.length - renderedCountRef.current;
    const itemsToShow = remainingItems > 4 ? 4 : remainingItems;
    setVisibleItems(visibleItems + itemsToShow);
    renderedCountRef.current += itemsToShow;
  };

  // blogData.slice(0, visibleItems).map((item) => {
  //   console.log(item.path);
  // });

  return (
    <div className={style.blogItems}>
      {blogData.slice(0, visibleItems).map((item, index) => {
        return (
          <BlogItem
            title={item.title}
            path={item.path}
            image={item.imageXS}
            key={index + 1}
          />
        );
      })}
      <div className={style.more}>
        <div className={style.container}>
          <span className={style.progresBar}></span>
        </div>
        <div className={style.countWr}>
          <span className={style.countShown}>{visibleItems}</span>
          <span className={style.text}>artykułów z</span>
          <span className={style.countMain}>{blogData.length}</span>
        </div>
        {visibleItems < blogData.length && (
          <button
            type="button"
            className={style.moreArticles}
            onClick={handleShowMore}
          >
            więcej
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogItemsTab;
