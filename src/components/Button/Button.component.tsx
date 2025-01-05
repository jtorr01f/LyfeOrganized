import React from "react";
import "./Button.styles.css";

const Button = ({ id, text, variant, onClick }) => {
    return (
      <button id={id} className={`btn btn-${variant}`} onClick={onClick}>
        {text}
      </button>
    );
}

export default Button;