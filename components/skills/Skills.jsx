import React from "react";
import styles from "../../styles/components/timeLine.module.css";

const Skills = ({ skills, icon, delay, size }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div
            className={`${styles["single-timeline-content"]} d-flex fade-in-fwd${delay}`}
          >
            <div className={`${styles["timeline-text"]} px-5 py-3`}>
              <h6>
                {icon !== "" && (
                  <img
                    className="pe-1"
                    style={size ? { width: "35px" } : { width: "20px" }}
                    src={icon}
                    alt=""
                  />
                )}
                {skills}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
