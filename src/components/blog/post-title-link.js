import { Link } from "react-router-dom";
import style from "./post-title-link.module.css";

const PostTitleLink = (props) => {
  const { path, title } = props;
  return (
    <Link to={`/blog/${path}`} className={style.postLink}>
      {title}
    </Link>
  );
};

export default PostTitleLink;
