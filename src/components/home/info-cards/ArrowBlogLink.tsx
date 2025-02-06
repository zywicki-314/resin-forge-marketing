import React from "react";
import { JSX } from "react";
import { Link } from "react-router-dom";
import style from "./ArrowBlogLink.module.css";
import { ArrowToBlogProps } from "./ArrowBlogLink.props";

const ArrowBlogLink = ({ path, ...props }: ArrowToBlogProps): JSX.Element => {
  return (
    <Link to={`/blog/${path}`} className={style.more}>
      more
    </Link>
  );
};

export default ArrowBlogLink;
