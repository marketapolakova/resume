import React from "react";
import "./imageComponent.css";

const CaseStudyImageComponent = ({ src, alt }) => {
  return (
    <div className="container">
      <img className="my-1 portfolio" src={src} alt={alt} />
    </div>
  );
};

export default CaseStudyImageComponent;
