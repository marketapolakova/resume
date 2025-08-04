import React from "react";
import "../../styles/components/timeLine.module.css";

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
