import React from "react";
import "./Button.scss";

const Button = ({ buttonClass, buttonAction, buttonText }) => {
  return (
    <button className={buttonClass} onClick={buttonAction}>
      {buttonText}
    </button>
  );
};

export default Button;
