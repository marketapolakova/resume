import React from "react";
import styles from "../../styles/components/imageComponent.module.css";

const CaseStudyImageComponent = ({ src, alt }) => {
  return (
    <div className={styles.container}>
      <img className={styles.portfolio + " my-1 "} src={src} alt={alt} />
    </div>
  );
};

export default CaseStudyImageComponent;
