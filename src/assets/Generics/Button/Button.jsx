/* eslint-disable react/prop-types */

import React, { useState } from "react";

const Button = ({
  children,
  backgroundColor = "#6B78E5",
  color = "#fff",
  width,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className="btn"
      style={{
        padding: "17px 40px",
        border: isHovered
          ? `2px solid ${backgroundColor}`
          : "2px solid transparent",
        cursor: "pointer",
        backgroundColor: isHovered ? "#fff" : backgroundColor,
        color: isHovered ? backgroundColor : color,
        width,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};

export default Button;
