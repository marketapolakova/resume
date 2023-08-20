import React from "react";
import FadeInSection from "../../components/fadeInSection/FadeInSection";
import PortfolioImageComponent from "../../components/imageComponent/PortfolioImageComponent";
import Navbar from "../../components/navbar/Navbar";
import NavbarTop from "../../components/navbar/NavbarTop";

const DanceClasses = ({ en }) => {
  return (
    <div>
      <NavbarTop />
      <div className="container mx-5 my-5">
        <h1 className="slide-in-left">
          Website for finding and viewing dance classes
        </h1>
        <div className="heading-line pb-4"></div>
        <span className="d-flex align-items-center justify-content-center shadow  bg-white rounded mb-3 slide-in-right">
          <img
            style={{ width: "50%" }}
            className="m-1 "
            src="/images/dance-classes/main-pic.png"
            alt="scetch"
          />
        </span>

        <FadeInSection>
          <div id="about">
            <h4>About project</h4>
            <p>
              <strong>My role: </strong> Ux designer designing a responsive
              website for finding and viewing dance classes from start to end
            </p>
            <p>
              <strong>The goal:</strong> Create a responsive website that not
              only delivered high-quality dance tutorials but also incorporated
              interactive features like augmented reality and real-time
              feedback, ensuring users could actively measure their progress.
            </p>
            <p>
              <strong>Tagert audience:</strong> Everyone who wants to learn
              dancing or just love dance (from amateur to professional)
            </p>
            <p>
              <strong>Responsibilities: </strong>
              Create personas, user stories, users journey map, problem and goal
              statement, competitive audit and report, paper and digital
              wireframing, low and high fidelity prototyping, research study
              plan, usability study, pattern and insight identification,
              iterating on designs
            </p>
          </div>
        </FadeInSection>

        <div id="research">
          <FadeInSection>
            <h4>Research study details</h4>
            <h5>Pain points</h5>
            <div className="row">
              <div className="col shadow p-3 m-3 bg-white rounded">
                <h6>Accessibility Issues</h6>
                <p>
                  Users might struggle to find tutorials tailored to their
                  specific skill level or the style they're interested in
                </p>
              </div>
              <div className="col shadow p-3 m-3 bg-white rounded">
                <h6>Lack of Personalized Feedback</h6>
                <p>
                  Without real-time correction, users might continue practicing
                  moves incorrectly, leading to frustration or potential injury
                </p>
              </div>
              <div className="col shadow p-3 m-3 bg-white rounded">
                <h6>Overwhelming Choices</h6>
                <p>
                  With an extensive catalog of dance styles and tutorials, some
                  users might feel overwhelmed, unsure of where to start or how
                  to progress
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-3">
              <h5>Personas</h5>
              <div className="d-md-flex align-items-center justify-content-center">
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "100%" }}
                    className=" border border-secondary"
                    src="/images/dance-classes/persona1.png"
                    alt="Persona 1"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "100%" }}
                    className="m-1 border border-secondary"
                    src="/images/dance-classes/persona2.png"
                    alt="Persona 2"
                  />
                </span>
              </div>

              <div className="mb-3"></div>
              <h5>User journey map</h5>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "90%" }}
                  className="m-1 border border-secondary"
                  src="/images/dance-classes/user-journey.png"
                  alt="competitive audit"
                />
              </span>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-3">
              <h5>User stories</h5>
              <div className="row">
                <div className="col shadow p-3 m-3 bg-white rounded">
                  <h6>Maria Gomez</h6>
                  <p>
                    As a physical therapist who enjoys dancing for stress
                    relief, I want to find beginner-level dance tutorials easily
                    so that I can start learning without feeling overwhelmed.
                  </p>
                </div>
                <div className="col shadow p-3 m-3 bg-white rounded">
                  <h6>Alex Kim</h6>
                  <p>
                    As an college student preparing for a cultural fest, I want
                    tutorials that are categorized according to skill level so
                    that I can find content that matches my current abilities
                    and helps me progress at my own pace.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-3">
              <h5>Research summary</h5>
              <p>
                I conduct user research through personas, create user empathy
                maps, and describe the problem statement. I also conduct a
                competitive audit. The research indicates that the application
                is suitable for everyone. From individuals who simply want to
                use dancing as a form of exercise and stress relief to those who
                aspire to learn dancing professionally.
              </p>
            </div>
          </FadeInSection>
        </div>

        <div id="concepts">
          <FadeInSection>
            <h4>Initial design concepts</h4>
            <div className="mb-3">
              <h5>Sitemap</h5>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "90%" }}
                  className="m-1 border border-secondary"
                  src="/images/dance-classes/sitemap.png"
                  alt="user flow"
                />
              </span>
            </div>
          </FadeInSection>

          <div className="mb-3">
            <FadeInSection>
              <div className="mb-3">
                <h5>Paper wireframes</h5>

                <span className="d-flex align-items-center justify-content-center">
                  <img
                    className="border border-secondary"
                    style={{ width: "90%" }}
                    src="/images/dance-classes/scetch.png"
                    alt="scetch"
                  />
                </span>
              </div>
            </FadeInSection>
            <FadeInSection>
              <h6>Paper wireframes for responsiveness</h6>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  className="border border-secondary"
                  style={{ width: "50%" }}
                  src="/images/dance-classes/scetch-responsive.png"
                  alt="scetch"
                />
              </span>
            </FadeInSection>
          </div>

          <FadeInSection>
            <div className="mb-3">
              <h5>Digital wireframes - desktop</h5>
              <div className="row">
                <div className="d-md-flex align-items-center justify-content-center">
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      className="m-1 border border-secondary"
                      style={{ width: "250px" }}
                      src="/images/dance-classes/wireframes/homepage.png"
                      alt="wireframe homepage"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1  border border-secondary"
                      src="/images/dance-classes/wireframes/classes-group.png"
                      alt="wireframe classes group"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1  border border-secondary"
                      src="/images/dance-classes/wireframes/list-classes.png"
                      alt="wireframe list classes"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1  border border-secondary"
                      src="/images/dance-classes/wireframes/class-enroll-detail.png"
                      alt="wireframe class enroll detail"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1 border border-secondary"
                      src="/images/dance-classes/wireframes/class-detail.png"
                      alt="wireframe class detail"
                    />
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-3">
              <h5>Digital wireframes - mobile</h5>
              <div className="row">
                <div className="d-md-flex align-items-center justify-content-center">
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      className="m-1 border border-secondary"
                      style={{ width: "150px" }}
                      src="/images/dance-classes/wireframes/mobile/homepage.png"
                      alt="wireframe homepage"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1  border border-secondary"
                      src="/images/dance-classes/wireframes/mobile/class-group.png"
                      alt="wireframe classes group"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1  border border-secondary"
                      src="/images/dance-classes/wireframes/mobile/All-classes.png"
                      alt="wireframe list classes"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "150px" }}
                      className="m-1  border border-secondary"
                      src="/images/dance-classes/wireframes/mobile/class-enrol-detail.png"
                      alt="wireframe class enroll detail"
                    />
                  </span>
                  <span className="d-flex align-items-center justify-content-center">
                    <img
                      style={{ width: "250px" }}
                      className="m-1 border border-secondary"
                      src="/images/dance-classes/wireframes/mobile/class-detail.png"
                      alt="wireframe class detail"
                    />
                  </span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <div id="usability">
          <FadeInSection>
            <h4>Usability study</h4>
            <div className="mb-3 row">
              <p>
                I conducted usability study. Tests were conducted on wireframes.
              </p>
              <h5>Usability study findings and solution</h5>
              <div className="col shadow p-3 m-3 bg-white rounded ">
                <h6>Class detail</h6>
                <p>
                  <strong>Problem:</strong> When the user is on the class detail
                  page, there is no option to go back
                </p>
                <p>
                  {" "}
                  <strong>Solution: </strong> Added a back button for easier
                  navigation to the previous page
                </p>
              </div>
              <div className="col shadow p-3 m-3 bg-white rounded ">
                <h6>Home page link under logo</h6>
                <p>
                  {" "}
                  <strong>Problem:</strong> Some users were confused about how
                  to return to the homepage
                </p>
                <p>
                  <strong>Solution:</strong> Added a home icon for clearer
                  navigation to the homepage
                </p>
              </div>
              <div className="col shadow p-3 m-3 bg-white rounded ">
                <h6>A separate page with common group of classes</h6>
                <p>
                  <strong>Problem:</strong> After clicking on 'classes' in the
                  navigation, users were taken to a separate page, which some
                  found distracting
                </p>
                <p>
                  <strong>Solution:</strong> Added the option to select from the
                  navigation, making it quicker for users to find what they
                  need. However, the possibility to choose from the separate
                  page still exists
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>

        <div id="final">
          <FadeInSection>
            <h4>Final design</h4>
            <div className="row mb-3">
              <h5>Mockups - desktop version</h5>
              <div className="d-md-flex align-items-center justify-content-center">
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    className="m-1 border border-secondary"
                    style={{ width: "350px" }}
                    src="/images/dance-classes/mocks/homepage.png"
                    alt="mockup homepage"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "450px" }}
                    className="m-1 border border-secondary"
                    src="/images/dance-classes/mocks/classes-group.png"
                    alt="mockup class group"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "450px" }}
                    className="m-1  border border-secondary"
                    src="/images/dance-classes/mocks/list-classes.png"
                    alt="mockup list classes"
                  />
                </span>
              </div>
              <div className="d-md-flex align-items-center justify-content-center">
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "350px" }}
                    className="m-1  border border-secondary"
                    src="/images/dance-classes/mocks/class-enroll-detail.png"
                    alt="mockup class enroll detail"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "450px" }}
                    className="m-1  border border-secondary"
                    src="/images/dance-classes/mocks/class-detail.png"
                    alt="mockup class detail"
                  />
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-3">
              <h5>High-fidelity prototype - desktop version</h5>
              <div className="d-flex align-items-center justify-content-center">
                <div style={{ width: "90%" }}>
                  <a
                    href="https://www.figma.com/proto/DCNtK376akBZCydRnDSLH3/dance-classes?type=design&node-id=59-2347&t=RVHuWIM3bgHsrhaG-1&scaling=scale-down&page-id=59%3A2346&starting-point-node-id=59%3A2347&mode=design"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <PortfolioImageComponent
                      btnName={en ? "Open prototype" : "Otevřít prototyp"}
                      en={en && en}
                      src="/images/dance-classes/prototype.png"
                      alt="prototype"
                    />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="row mb-3">
              <h5>Mockups - mobile version</h5>
              <div className="d-md-flex align-items-center justify-content-center">
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    className="m-1 border border-secondary"
                    style={{ width: "150px" }}
                    src="/images/dance-classes/mocks/mobile/homepage.png"
                    alt="mockup homepage"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "150px" }}
                    className="m-1 border border-secondary"
                    src="/images/dance-classes/mocks/mobile/class-group.png"
                    alt="mockup class group"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "150px" }}
                    className="m-1  border border-secondary"
                    src="/images/dance-classes/mocks/mobile/All-classes.png"
                    alt="mockup list classes"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "150px" }}
                    className="m-1  border border-secondary"
                    src="/images/dance-classes/mocks/mobile/class-enrol-detail.png"
                    alt="mockup class enroll detail"
                  />
                </span>
                <span className="d-flex align-items-center justify-content-center">
                  <img
                    style={{ width: "150px" }}
                    className="m-1  border border-secondary"
                    src="/images/dance-classes/mocks/mobile/class-detail.png"
                    alt="mockup class detail"
                  />
                </span>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection>
            <div className="mb-3">
              <h5>High-fidelity prototype - mobile version</h5>
              <div className="d-flex align-items-center justify-content-center">
                <div style={{ width: "90%" }}>
                  <a
                    href="https://www.figma.com/proto/DCNtK376akBZCydRnDSLH3/dance-classes?type=design&node-id=189-450&t=qvuwkzOlMwKycc4j-1&scaling=scale-down&page-id=189%3A449&starting-point-node-id=189%3A514&mode=design"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <PortfolioImageComponent
                      btnName={en ? "Open prototype" : "Otevřít prototyp"}
                      en={en && en}
                      src="/images/dance-classes/prototype-mobile.png"
                      alt="prototype"
                    />
                  </a>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

        <div id="conclusion">
          <FadeInSection>
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
          </FadeInSection>
        </div>
      </div>
      <div className="p-2"></div>
      <Navbar
        link={"/case-study/dance-classes"}
        en={en && true}
        bgCol={"#e5e2db"}
      />
    </div>
  );
};

export default DanceClasses;
