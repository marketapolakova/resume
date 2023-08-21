import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { frontend, other, ui, office, cms } from "../../data/skillsData";
import Skills from "../../components/skills/Skills";
import NavbarMobile from "../../components/navbar/NavbarMobile";

const SkillsPage = ({ en }) => {
  let delayf = 1;
  let delayu = 1;
  let delayc = 1;
  let delaym = 1;
  let delayo = 1;

  const [translate, setTranslate] = useState({ other: other.cz });
  useEffect(() => {
    if (en) {
      setTranslate({ other: other.en });
    }
  }, [en]);
  return (
    <div>
      <NavbarMobile en={en && true} link="/skills" />
      <div className="mx-5 my-5">
        <h1 className="slide-in-right">{en ? "Skills" : "Dovednosti"}</h1>
        <div className="heading-line pb-4"></div>
        <div className="row">
          <div className="col">
            <h4>Frontend</h4>
            <hr />
            {frontend.map((skills, index) => {
              return (
                <Skills
                  key={index}
                  skills={skills.name}
                  icon={skills.icon}
                  delay={delayf++}
                />
              );
            })}
          </div>
          <div className="col">
            <h4>UI</h4>
            <hr />
            {ui.map((skills, index) => {
              return (
                <Skills
                  key={index}
                  skills={skills.name}
                  icon={skills.icon}
                  delay={delayu++}
                />
              );
            })}
          </div>
          <div className="col">
            <h4>CMS {en ? "systems" : "systémy"}</h4>
            <hr />
            {cms.map((skills, index) => {
              return (
                <Skills
                  key={index}
                  skills={skills.name}
                  icon={skills.icon}
                  delay={delayc++}
                />
              );
            })}
          </div>
          <div className="col">
            <h4>Microsoft office</h4>
            <hr />
            {office.map((skills, index) => {
              return (
                <Skills
                  key={index}
                  skills={skills.name}
                  icon={skills.icon}
                  delay={delaym++}
                />
              );
            })}
          </div>
          <div className="col">
            <h4>{en ? "Other" : "Ostatní"}</h4>
            <hr />
            {translate.other?.map((skills, index) => {
              return (
                <Skills
                  key={index}
                  skills={skills.name}
                  icon={skills.icon}
                  delay={delayo++}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Navbar link="/skills" en={en && true} bgCol={"#e5e2db"} />
    </div>
  );
};

export default SkillsPage;
