import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { frontend, other, ui, office, cms } from "../data/skillsData";
import Skills from "../components/skills/Skills";
import NavbarMobile from "../components/navbar/NavbarMobile";
import { useRouter } from "next/router";

const SkillsPage = () => {
  const { locale } = useRouter();
  const en = locale === "en";
  let delayf = 1;
  let delayu = 1;
  let delayc = 1;
  let delaym = 1;
  let delayo = 1;

  const [translate, setTranslate] = useState({ other: other.cz, ui: ui.cz });

  useEffect(() => {
    if (en) {
      setTranslate({ other: other.en, ui: ui.en });
    }
  }, [en]);
  return (
    <div>
      <NavbarMobile en={en && true} link="/skills" />
      <div className="mx-5 my-5">
        <header>
          {" "}
          <h1 className="slide-in-right">{en ? "Skills" : "Dovednosti"}</h1>
        </header>

        <div className="heading-line pb-4"></div>
        <main className="row">
          <section className="col">
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
          </section>
          <section className="col">
            <h4>UX/UI</h4>
            <hr />
            {translate.ui.map((skills, index) => {
              return (
                <Skills
                  size={skills?.size}
                  key={index}
                  skills={skills.name}
                  icon={skills.icon}
                  delay={delayu++}
                />
              );
            })}
          </section>
          <section className="col">
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
          </section>
          <section className="col">
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
          </section>
        </main>
      </div>
      <Navbar link="/skills" en={en && true} bgCol={"#e5e2db"} />
    </div>
  );
};

export default SkillsPage;
