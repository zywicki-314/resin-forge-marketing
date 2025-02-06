import BlogPopPosts from "./blog-pop-posts";
import style from "./blog-intro-col.module.css";

const BlogIntroCol = () => {
  return (
    <div className={style.intro}>
      <div className={style.titleWr}>
        <h1 className={style.title}>
          <span className={`${style.swTop} ${style.sw}`}>blog</span>
          <span className={`${style.swBottom} ${style.sw}`}>faq</span>
        </h1>
      </div>

      <BlogPopPosts />
    </div>
  );
};

export default BlogIntroCol;
