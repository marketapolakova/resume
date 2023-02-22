import React from "react";

const Skills = ({ skills, icon }) => {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="single-timeline-content d-flex wow fadeInLeft">
            <div className="timeline-text px-5 py-3">
              <h6>
                {" "}
                <img src={icon} alt="" style={{ width: "20px" }} /> {skills}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
