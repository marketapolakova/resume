import React from "react";
import "./imageComponent.css";

const ImageComponent = () => {
  return (
    <div>
      <img
        className="imageSquare"
        src="images/profilePic.jpeg"
        alt=""
        style={{ width: "25rem", height: "25rem" }}
      />
    </div>
  );
};

export default ImageComponent;
