import React from "react";
import "./timeLine.css";

const Timeline = ({ date, organization, filed, adition, link }) => {
  return (
    <div>
      <div className="single-timeline-area">
        <div className="timeline-date wow fadeInLeft">
          <p>{date}</p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="single-timeline-content d-flex wow fadeInLeft">
              <div className="timeline-text px-5 py-3">
                <h6>{organization}</h6>
                <p>{filed}</p>
                {!link ? (
                  <p>{adition}</p>
                ) : (
                  <p>
                    <a href={link} target="_blank">
                      {" "}
                      {adition}
                    </a>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
