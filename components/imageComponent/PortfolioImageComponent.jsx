import React from "react";
import styles from "../../styles/components/imageComponent.module.css";

const PortfolioImageComponent = ({ src, alt, en, btnName, delay }) => {
  return (
    <div className={`${styles.container} fade-in-fwd${delay}`}>
      <div className="overlay">
        <img
          className={styles.portfolio + " my-1 rounded"}
          src={src}
          alt={alt}
        />
      </div>

      <div className={styles.middle}>
        <div className={styles.text} style={{ borderRadius: "5px" }}>
          {btnName ? btnName : en ? "Watch" : "Prohlédnout"}
        </div>
      </div>
    </div>
  );
};

export default PortfolioImageComponent;
