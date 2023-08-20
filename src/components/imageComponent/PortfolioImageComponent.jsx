import React from "react";
import "./imageComponent.css";

const PortfolioImageComponent = ({ src, alt, en, btnName, delay }) => {
  return (
    <div className={`container fade-in-fwd${delay}`}>
      <div className="overlay">
        <img className="my-1 portfolio" src={src} alt={alt} />
      </div>

      <div className="middle">
        <div className="text" style={{ borderRadius: "5px" }}>
          {btnName ? btnName : en ? "Watch" : "Prohlédnout"}
        </div>
      </div>
    </div>
  );
};

export default PortfolioImageComponent;
