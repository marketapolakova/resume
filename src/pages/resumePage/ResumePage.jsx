import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import NavbarMobile from "../../components/navbar/NavbarMobile";
import Timeline from "../../components/timeline/Timeline";
import { education, work, certification } from "../../data/resumeData";

const ResumePage = ({ en }) => {
  let delayw = 2;
  let delaye = 2;
  let delayc = 2;
  const [translate, setTranslate] = useState({
    work: work.cz,
    education: education.cz,
    certification: certification.cz,
  });

  useEffect(() => {
    if (en) {
      setTranslate({
        work: work.en,
        education: education.en,
        certification: certification.en,
      });
    }
  }, [en]);
  return (
    <div>
      <NavbarMobile en={en && true} link="/resume" />
      <div className="mx-5 my-5">
        <h1 className="slide-in-right">Resume</h1>
        <div className="heading-line pb-4"></div>
        <div className="row">
          <div className="col">
            <h4>{en ? "Work experiences" : "Pracovní zkušenosti"}</h4>
            <hr />
            {translate.work.map((w, index) => {
              return (
                <div>
                  <Timeline
                    delay={delayw++}
                    key={index}
                    date={w.date}
                    organization={w.organization}
                    filed={w.field}
                  />
                </div>
              );
            })}
          </div>
          <div className="col">
            <h4>{en ? "Education" : "Vzdělání"}</h4>
            <hr />
            {translate.education.map((s, index) => {
              return (
                <Timeline
                  delay={delaye++}
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
            <h4>{en ? "Certification" : "Certifikace"}</h4>
            <hr />
            {translate.certification.map((c, index) => {
              return (
                <Timeline
                  delay={delayc++}
                  key={index}
                  date={c.date}
                  organization={c.organization}
                  filed={c.field}
                  adition={en ? "Credentials" : "Prověření"}
                  link={c.link}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Navbar link="/resume" en={en && true} bgCol={"#e5e2db"} />
    </div>
  );
};

export default ResumePage;
