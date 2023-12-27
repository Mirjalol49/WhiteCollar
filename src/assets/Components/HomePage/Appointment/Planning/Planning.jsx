/* eslint-disable react/prop-types */
import "./Planning.css";

const Planning = ({ title, context }) => {
  return (
    <div>
      <h3 className="planning-title">{title}</h3>
      <p className="planning-text">{context}</p>
    </div>
  );
};

export default Planning;
