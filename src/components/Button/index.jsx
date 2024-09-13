import React from "react";

const Button = ({ text, color, bgColor, handleButtonClick }) => {
  return (
    <button
      onClick={() => handleButtonClick(color)}
      className={`w-24 bg-${color}-500 text-white font-semibold py-3 px-5 rounded-md ${
        bgColor == color ? "ring ring-offset-2 ring-slate-200" : ""
      }`}
    >
      {text}
    </button>
  );
};

export default Button;
