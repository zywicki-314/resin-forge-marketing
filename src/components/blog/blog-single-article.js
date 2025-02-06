import { useParams } from "react-router-dom";
import BodyWr from "../body-wr";
import AsideContact from "../asideContact";
import BlogIntroCol from "./blog-intro-col";
import BlogContainer from "./blog-main-container";
import { blogDataPl, blogDataEn } from "../../data/blogData";
import style from "./blog-single-article.module.css";
import { useSelector } from "react-redux";

const SingleBlogArticle = () => {
  const lang = useSelector((state) => state.lang);
  const blogData = lang === "pl" ? blogDataPl : blogDataEn;
  const params = useParams();
  const article = blogData.find((article) => article.path === params.path);

  return (
    <>
      <BodyWr>
        <BlogContainer>
          <BlogIntroCol />
          <div className={style.blogArticle}>
            <img
              src={article.image}
              style={{ objectPosition: article.imgPosition }}
              alt="obrazek publikacji bloga"
              className={style.image}
            />
            <div className={style.articleContainer}>
              <h3 className={style.title}>{article.title}</h3>
              <div className={style.text}>{article.text}</div>
            </div>
          </div>
        </BlogContainer>

        <AsideContact />
      </BodyWr>
    </>
  );
};

export default SingleBlogArticle;
