import React, { useState } from "react";
import FadeInSection from "../../components/caseStudiesSections/FadeInSection";
import Section from "../../components/caseStudiesSections/Section";
import PortfolioImageComponent from "../../components/imageComponent/PortfolioImageComponent";
import Navbar from "../../components/navbar/Navbar";
import NavbarTop from "../../components/navbar/NavbarTop";

const VirtualApp = ({ en }) => {
  const [activeSection, setActiveSection] = useState("about");

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <div>
      <div className="container mx-5 my-5 py-4 ">
        <NavbarTop
          activeSection={activeSection}
          link={"/case-study/virtual-app"}
          en={en && true}
        />
        <h1 className="slide-in-left"> Virtual tour app for art gallery</h1>
        <div className="heading-line pb-4"></div>
        <Section
          key={"about1"}
          sectionId={"about"}
          onSectionEnter={() => handleSectionChange("about")}
        />
        <span className="d-flex align-items-center justify-content-center shadow  bg-white roundedd my-3 slide-in-right">
          <img
            style={{ width: "50%" }}
            className="m-1 "
            src="/images/virtual-tour/main-pic.png"
            alt="scetch"
          />
        </span>
        <Section
          key={"about"}
          sectionId={"about"}
          onSectionEnter={() => handleSectionChange("about")}
        />
        <FadeInSection>
          <div id="about" className="py-4">
            <h4>About project</h4>
            <p>
              <strong>My role: </strong> Ux designer designing a virtual tour
              app from start to end
            </p>
            <p>
              <strong>The goal:</strong> Design a virtual tour app that allows
              users to visit art exhibition online
            </p>
            <p>
              <strong>Tagert audience:</strong> Anyone (from art experts to
              laypersons) who loves art but, for any reason, cannot attend in
              person.
            </p>
            <p>
              <strong>Responsibilities: </strong>
              Create personas, user stories, users journey map, problem and goal
              statement, competitive audit and report, paper and digital
              wireframing, low and high fidelity prototyping, research study
              plan, usability study, pattern and insight identification,
              iterating on designs
            </p>

            <p>
              <strong>Key challanges: </strong>
              Some potential key challenges or constraints in this project could
              involve ensuring accessibility for people with disabilities,
              designing an intuitive user experience that replicates the art
              gallery feel in a virtual environment, curating a captivating
              collection of artworks, addressing technical compatibility across
              devices, optimizing performance for seamless navigation, ensuring
              accurate representation and preservation of artworks and adhering
              to legal and copyright considerations.
            </p>
          </div>
        </FadeInSection>
        <Section
          key={"research"}
          sectionId={"research"}
          onSectionEnter={() => handleSectionChange("research")}
        />
        <div id="research" className="py-4">
          <FadeInSection>
            <h4>Research study details</h4>
            <h5>Pain points</h5>
            <div className="row">
              <div className="col shadow p-3 m-3 bg-white roundedd">
                <h6>Inability of personal visit</h6>
                <p>
                  Many art lovers cannot visit art exhibition for different
                  reasons
                </p>
              </div>
              <div className="col shadow p-3 m-3 bg-white roundedd">
                <h6>Accessibility</h6>
                <p>
                  Many pages with VR tour are not adapted for people with
                  disabilities
                </p>
              </div>
              <div className="col shadow p-3 m-3 bg-white roundedd">
                <h6>Translation</h6>
                <p>Similar pages often do not have a translate function</p>
              </div>
              <div className="col shadow p-3 m-3 bg-white roundedd">
                <h6>Information Architecture</h6>
                <p>Navigations in similar pages are often overwhelming</p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="my-3" id="persona">
              <h5>Personas</h5>
              <div className="d-md-flex align-items-center justify-content-center">
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "100%" }}
                    className=" border border-secondary rounded"
                    src="/images/virtual-tour/persona1.png"
                    alt="Persona 1"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "100%" }}
                    className="m-1 border border-secondary rounded"
                    src="/images/virtual-tour/persona2.png"
                    alt="Persona 2"
                  />
                </span>
              </div>

              <div className="my-3"></div>
              <h5>User journey map</h5>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "100%" }}
                  className="m-1 border border-secondary rounded"
                  src="/images/virtual-tour/user-journey.png"
                  alt="user journey"
                />
              </span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="my-3">
              <h5>Competitive audit</h5>
              <p>
                Competitive audit goal: The goal is to comprehend the
                competitive landscape for virtual art gallery tours, pinpoint
                the strengths and weaknesses of key competitors, and identify
                potential gaps and opportunities to enhance our virtual tour
                app.
              </p>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "100%" }}
                  className="m-1 border border-secondary rounded"
                  src="/images/virtual-tour/competitive-audit.png"
                  alt="competitive audit"
                />
              </span>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "100%" }}
                  className="m-1 border border-secondary rounded"
                  src="/images/virtual-tour/competitive-audit-2.png"
                  alt="competitive audit"
                />
              </span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="my-3">
              <h5>Research summary</h5>
              <p>
                I conduct user research through personas, create user empathy
                maps, and describe the problem statement. I also conduct a
                competitive audit. The research shows that the application could
                be used not just by people with disabilities but also by those
                with a limited amount of time, a tight budget, or who live far
                away
              </p>
            </div>
          </FadeInSection>
        </div>

        <Section
          key={"concepts"}
          sectionId={"concepts"}
          onSectionEnter={() => handleSectionChange("concepts")}
        />
        <div id="concepts" className="py-4">
          <FadeInSection>
            <h4>Initial design concepts</h4>
            <div className="my-3">
              <h5>User flow</h5>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "90%" }}
                  className="m-1 border border-secondary rounded"
                  src="/images/virtual-tour/userFlow.png"
                  alt="user flow"
                />
              </span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <h5>Storyboards</h5>
            <div className="my-3">
              <h6>Storyboard - big picture</h6>
              <span className="d-flex align-items-center justify-content-center my-3">
                <img
                  style={{ width: "90%" }}
                  className="m-1 border border-secondary rounded"
                  src="/images/virtual-tour/storyboard-closeup.png"
                  alt="storyboard-bigPicture"
                />
              </span>
              <h6>Storyboard - close up</h6>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "90%" }}
                  className="m-1 border border-secondary rounded"
                  src="/images/virtual-tour/storyboard-closeup.png"
                  alt="storyboard-close-up"
                />
              </span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="my-3">
              <h5>Paper wireframes</h5>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  className="border border-secondary rounded"
                  style={{ width: "90%" }}
                  src="/images/virtual-tour/virtua-tour-scetch.png"
                  alt="scetch"
                />
              </span>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="my-3">
              <h5>Digital wireframes</h5>
              <div className="row">
                <div className="d-md-flex align-items-center justify-content-center">
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      className="m-1 border border-secondary rounded"
                      style={{ width: "250px" }}
                      src="/images/virtual-tour/wireframes/Home.png"
                      alt="scetch"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1 border border-secondary rounded"
                      src="/images/virtual-tour/wireframes/Exhbition-detail.png"
                      alt="scetch"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1  border border-secondary rounded"
                      src="/images/virtual-tour/wireframes/Tour.png"
                      alt="scetch"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1  border border-secondary rounded"
                      src="/images/virtual-tour/wireframes/Art-detail.png"
                      alt="scetch"
                    />
                  </span>
                </div>
                <div className="d-sm-flex align-items-center justify-content-center">
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1 border border-secondary rounded"
                      src="/images/virtual-tour/wireframes/Competitions.png"
                      alt="scetch"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1 border border-secondary rounded"
                      src="/images/virtual-tour/wireframes/Competition-detail.png"
                      alt="scetch"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1 border border-secondary rounded"
                      src="/images/virtual-tour/wireframes/favorite.png"
                      alt="scetch"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1 border border-secondary rounded"
                      src="/images/virtual-tour/wireframes/profile-settings.png"
                      alt="scetch"
                    />
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <Section
          key={"usability"}
          sectionId={"usability"}
          onSectionEnter={() => handleSectionChange("usability")}
        />
        <div id="usability" className="py-4">
          <FadeInSection>
            <h4>Usability study</h4>
            <div className="my-3 row">
              <p>
                I conducted usability study. Tests were conducted on wireframes.
              </p>
              <h5>Usability study findings</h5>
              <div className="col shadow p-3 m-3 bg-white roundedd col">
                <h6>Access to main navigation in VR tour mode</h6>
                <p>
                  Users wants main navigation in the VR tour mode for quicker
                  navigation to another page
                </p>
              </div>
              <div className="col shadow p-3 m-3 bg-white roundedd col">
                <h6>Usage of bottom navigation</h6>
                <p>
                  Users find it confusing what the bottom navigation should be
                  used for
                </p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="my-3">
              <h5>Sorted first usability study findings</h5>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  src="/images/virtual-tour/sort.png"
                  alt="sort"
                  style={{ width: "90%" }}
                />
              </span>
            </div>
          </FadeInSection>
        </div>

        <Section
          key={"final"}
          sectionId={"final"}
          onSectionEnter={() => handleSectionChange("final")}
        />
        <div id="final" className="py-4">
          <FadeInSection>
            <h4>Final design</h4>
            <div className="row my-3">
              <h5>Mockups</h5>
              <div className="d-md-flex align-items-center justify-content-center">
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    className="m-1 border border-secondary rounded"
                    style={{ width: "250px" }}
                    src="/images/virtual-tour/mocks/Home.png"
                    alt="scetch"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "250px" }}
                    className="m-1 border border-secondary rounded"
                    src="/images/virtual-tour/mocks/Exhbition-detail.png"
                    alt="scetch"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "250px" }}
                    className="m-1  border border-secondary rounded"
                    src="/images/virtual-tour/mocks/Tour.png"
                    alt="scetch"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "250px" }}
                    className="m-1  border border-secondary rounded"
                    src="/images/virtual-tour/mocks/Art-detail.png"
                    alt="scetch"
                  />
                </span>
              </div>
              <div className="d-sm-flex align-items-center justify-content-center">
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "250px" }}
                    className="m-1 border border-secondary rounded"
                    src="/images/virtual-tour/mocks/Competitions.png"
                    alt="scetch"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "250px" }}
                    className="m-1 border border-secondary rounded"
                    src="/images/virtual-tour/mocks/Competition-detail.png"
                    alt="scetch"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "250px" }}
                    className="m-1 border border-secondary rounded"
                    src="/images/virtual-tour/mocks/favorite.png"
                    alt="scetch"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "250px" }}
                    className="m-1 border border-secondary rounded"
                    src="/images/virtual-tour/mocks/profile-settings.png"
                    alt="scetch"
                  />
                </span>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="my-3">
              <h5>High-fidelity prototype</h5>
              <div className="d-flex align-items-center justify-content-center">
                <div style={{ width: "90%" }}>
                  <a
                    href="https://www.figma.com/proto/kucH5b8sXqSyGN1HJbSc2h/VR-tour-for-art-gallery?type=design&node-id=132-1151&t=B3vX7LSah6xOXCNw-1&scaling=scale-down&page-id=132%3A1150&starting-point-node-id=132%3A1280&mode=design"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <PortfolioImageComponent
                      btnName={en ? "Open prototype" : "Otevřít prototyp"}
                      en={en && en}
                      src="/images/virtual-tour/prototype.png"
                      alt="prototype"
                    />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <Section
          key={"conclusion"}
          sectionId={"conclusion"}
          onSectionEnter={() => handleSectionChange("conclusion")}
        />
        <FadeInSection>
          <div id="conclusion">
            <h4>Conclusion</h4>
            <p>
              {" "}
              <strong> What I learned</strong> I learned about the UX/UI process
              from scratch to the end
            </p>
            <p>
              <strong>Possible next step:</strong> Conduct one more usability
              testing to valid that the included changes were the right choice
            </p>
          </div>
        </FadeInSection>
      </div>

      <Navbar
        link={"/case-study/virtual-app"}
        en={en && true}
        bgCol={"#e5e2db"}
      />
    </div>
  );
};

export default VirtualApp;
