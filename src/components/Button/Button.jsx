import React from "react";
import "./Button.css";

const Button = ({ buttonText, onClick }) => {
  return (
      <button onClick={onClick} className="countButton">{buttonText}</button>
  )
};

export default Button;
