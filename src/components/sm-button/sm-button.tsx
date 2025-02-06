import { JSX } from "react";
import { SmButtonProps } from "./sm-button.props";
import style from "./sm-button.module.css";
import React from "react";
// import { Link,  } from "react-router-dom";

const SmButton = ({
  color = "grey",
  name,
  href,

  ...props
}: SmButtonProps): JSX.Element => {
  return (
    <a
      className={`${style.sm} ${style[color]} ${style[name]}`}
      id="mail"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      Social Media Link
    </a>
  );
};

export default SmButton;
