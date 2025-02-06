// import { Link } from "react-router-dom";
// import style from "./blog-item.module.css";

// const BlogItem = (props) => {
//   const { path, image, title } = props;

//   return (
//     <Link to={path} className={style.item}>
//       <div className={style.wrapper}>
//         <img
//           src={image}
//           alt="obrazek publikacji bloga"
//           className={style.image}
//         />
//         <span className={style.text}>{title}</span>
//         <span className={style.linkMore}>Читати далі</span>
//       </div>
//     </Link>
//   );
// };

// export default BlogItem;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import style from "./blog-item.module.css";
// import { useSelector } from "react-redux";

const BlogItem = ({ path, image, title, onRender }) => {
  // const { path, image, title, onRender } = props;
  // const lang = useSelector((state) => state.lang);

  // console.log(title[lang]);
  // console.log(lang);

  useEffect(() => {
    if (onRender) {
      onRender();
    }
  }, [onRender]);

  return (
    <Link to={path} className={style.item}>
      <div className={style.wrapper}>
        <img
          src={image}
          alt="obrazek publikacji bloga"
          className={style.image}
        />
        <span className={style.text}>{title}</span>
        <span className={style.linkMore}>Więcej</span>
      </div>
    </Link>
  );
};

export default BlogItem;
