/* eslint-disable react/prop-types */
const Button = ({ children, backgroundColor = "#6B78E5", color = "#fff" }) => {
  return (
    <button
      className="btn"
      style={{
        padding: "17px 40px",
        border: "none",
        cursor: "pointer",
        backgroundColor,
        color,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
