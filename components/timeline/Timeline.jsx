import React from "react";

import styles from "../../styles/components/timeLine.module.css";

const Timeline = ({ date, organization, filed, adition, link, delay }) => {
  return (
    <div className={styles["single-timeline-area"] + " fade-in-fwd" + delay}>
      <div className={styles["timeline-date"]}>
        <p>{date}</p>
      </div>
      <div className="row">
        <div className="col-12">
          <div className={styles["single-timeline-content"] + " d-flex"}>
            <div className={styles["timeline-text"] + " px-5 py-3 my"}>
              <h6>{organization}</h6>
              <p>{filed}</p>
              {link ? (
                <p>
                  <strong>
                    <a href={link} target="_blank" rel="noreferrer">
                      {adition}
                    </a>
                  </strong>
                </p>
              ) : (
                <p>{adition}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
