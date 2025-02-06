import { blogDataPl, blogDataEn } from "../../data/blogData";
import PostTitleLink from "./post-title-link";
import style from "./blog-pop-posts.module.css";
import { useSelector } from "react-redux";

const BlogPopPosts = () => {
  const lang = useSelector((state) => state.lang);
  const blogData = lang === "pl" ? blogDataPl : blogDataEn;
  return (
    <div className={style.popularPostsWr}>
      <div className={style.popularPostsTitle}>
        <span>Artykuły</span>
      </div>
      <ul className={style.li}>
        {blogData.map((post, i) => {
          if (i <= 3) {
            return (
              <li key={i}>
                <PostTitleLink path={post.path} title={post.title} />
              </li>
            );
          } else {
            return <></>;
          }
        })}
      </ul>
    </div>
  );
};

export default BlogPopPosts;
