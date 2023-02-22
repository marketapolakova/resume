import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { frontend, other, ui, office, cms } from "../../data/skillsData";
import Skills from "../../components/skills/Skills";

const SkillsPage = () => {
  return (
    <div>
      <div className="mx-5 my-5">
        <h1>Dovednosti</h1>
        <div className="heading-line pb-4"></div>
        <div className="row">
          <div className="col">
            <h4>Frontend</h4>
            <hr />
            {frontend.map((skills, index) => {
              return (
                <Skills key={index} skills={skills.name} icon={skills.icon} />
              );
            })}
          </div>
          <div className="col">
            <h4>UI</h4>
            <hr />
            {ui.map((skills, index) => {
              return (
                <Skills key={index} skills={skills.name} icon={skills.icon} />
              );
            })}
          </div>
          <div className="col">
            <h4>CMS systémy</h4>
            <hr />
            {cms.map((skills, index) => {
              return (
                <Skills key={index} skills={skills.name} icon={skills.icon} />
              );
            })}
          </div>
          <div className="col">
            <h4>Microsoft office</h4>
            <hr />
            {office.map((skills, index) => {
              return (
                <Skills key={index} skills={skills.name} icon={skills.icon} />
              );
            })}
          </div>
          <div className="col">
            <h4>Ostatní</h4>
            <hr />
            {other.map((skills, index) => {
              return (
                <Skills key={index} skills={skills.name} icon={skills.icon} />
              );
            })}
          </div>
        </div>
      </div>
      <Navbar bgCol={"#e5e2db"} />
    </div>
  );
};

export default SkillsPage;
