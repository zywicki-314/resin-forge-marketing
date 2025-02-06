import style from "./blog-main-container.module.css";

const BlogContainer = ({ children }) => {
  return <div className={style.blogWr}>{children}</div>;
};

export default BlogContainer;
