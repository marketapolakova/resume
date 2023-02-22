import React from "react";
import "./timeLine.css";

const ResumeBox = ({ name, field, adition }) => {
  return (
    <div>
      {name}
      <p className="lineHeight">{field}</p>
      <p>{adition}</p>
    </div>
  );
};

export default ResumeBox;
