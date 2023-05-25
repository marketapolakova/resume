import React from "react";
import "./imageComponent.css";

const PortfolioImageComponent = ({ src, alt }) => {
  return (
    <div className="container">
      <div className="overlay">
        <img className="my-1 portfolio" src={src} alt={alt} />
      </div>

      <div className="middle">
        <div className="text">Prohlédnout</div>
      </div>
    </div>
  );
};

export default PortfolioImageComponent;
