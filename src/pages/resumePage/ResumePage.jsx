import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Timeline from "../../components/timeline/Timeline";
import { education, work, certification } from "../../data/resumeData";

const ResumePage = () => {
  return (
    <div>
      <div className="mx-5 my-5">
        <h1>Resume</h1>
        <div className="heading-line pb-4"></div>
        <div className="row">
          <div className="col">
            <h4>Pracovní zkušenosti</h4>
            <hr />
            {work.map((w, index) => {
              return (
                <Timeline
                  key={index}
                  date={w.date}
                  organization={w.organization}
                  filed={w.field}
                />
              );
            })}
          </div>
          <div className="col">
            <h4>Vzdělání</h4>
            <hr />
            {education.map((s, index) => {
              return (
                <Timeline
                  key={index}
                  date={s.date}
                  organization={s.organization}
                  filed={`Obor: ${s.field}`}
                  adition={s.aditon}
                />
              );
            })}
          </div>
          <div className="col">
            <h4>Certifikace</h4>
            <hr />
            {certification.map((c, index) => {
              return (
                <Timeline
                  key={index}
                  date={c.date}
                  organization={c.organization}
                  filed={c.field}
                  adition={"Prověření"}
                  link={c.link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Navbar bgCol={"#e5e2db"} />
    </div>
  );
};

export default ResumePage;
