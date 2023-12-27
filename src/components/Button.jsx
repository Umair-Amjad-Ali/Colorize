import React from "react";

const Button = ({ title, color, handleColorChange, bgColor }) => {
  return (
    <button
      className={`text-white px-4 py-2 rounded-lg ${color}`}
      onClick={() => handleColorChange(bgColor)}
    >
      {title}
    </button>
  );
};

export default Button;
