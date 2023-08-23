import React from "react";
import "./timeLine.css";

const Timeline = ({ date, organization, filed, adition, link, delay }) => {
  return (
    <div>
      <div className={`single-timeline-area fade-in-fwd${delay}`}>
        <div className="timeline-date wow fadeInLeft">
          <p>{date}</p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={`single-timeline-content d-flex`}>
              <div className="timeline-text px-5 py-3 my">
                <h6>{organization}</h6>
                <p>{filed}</p>
                {!link ? (
                  <p>{adition}</p>
                ) : (
                  <p>
                    <strong>
                      {" "}
                      <a href={link} target="_blank" rel="noreferrer">
                        {" "}
                        {adition}
                      </a>
                    </strong>
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
