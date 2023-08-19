import React from "react";
import PortfolioImageComponent from "../../components/imageComponent/PortfolioImageComponent";
import Navbar from "../../components/navbar/Navbar";

const SaveAndBudgetApp = ({ en }) => {
  return (
    <div>
      <div className="container mx-5 my-5">
        <h1>Cross-platform app to help adults in budgeting & saving money</h1>
        <div className="heading-line pb-4"></div>
        <span className="d-flex align-items-center justify-content-center shadow  bg-white rounded mb-3">
          <img
            style={{ width: "50%" }}
            className="m-1 "
            src="/images/save-and-budget/main-pic.png"
            alt="scetch"
          />
        </span>
        <p>
          <strong>My role: </strong> Ux designer designing a virtual tour app
          from start to end
        </p>
        <p>
          <strong>The goal:</strong> Design a cross-platform app to help adults
          in budgeting & saving money. It includes users incomes, spendings,
          savings, budget. It also offer personalized tips and educational
          materials
        </p>
        <p>
          <strong>Tagert audience:</strong> Adults seeking financial literacy
          and tools to learn saving and budgeting to achieve financial stability
        </p>
        <p>
          <strong>Responsibilities: </strong>
          Create personas, user stories, users journey map, problem and goal
          statement, competitive audit and report, paper and digital
          wireframing, low and high fidelity prototyping, research study plan,
          usability study, pattern and insight identification, iterating on
          designs
        </p>
        <p>
          {" "}
          <strong>The problem:</strong>
          The project aimed to address the prevalent issue of financial
          illiteracy and the overwhelming feeling many individuals face when
          trying to manage their finances. By identifying a societal need for
          accessible and user-friendly financial education seeks to demystify
          budgeting and promote financial well-being for its users.
        </p>
        <h4>Research study details</h4>
        <h5>Pain points</h5>
        <div className="row">
          <div class="col shadow p-3 m-3 bg-white rounded">
            <h6>Overwhelming Complexity</h6>

            <p>
              Many users feel overwhelmed by complex financial jargon and
              intricate features that are hard to navigate or understand
            </p>
          </div>
          <div class="col shadow p-3 m-3 bg-white rounded">
            <h6>Lack of Personalization</h6>
            <p>
              Generic financial advice or tools that don't cater to individual
              needs or goals can be frustrating
            </p>
          </div>
          <div class="col shadow p-3 m-3 bg-white rounded">
            <h6>Lack of Multi-device Support</h6>
            <p>
              Users might want to access their financial data across multiple
              devices, and lack of such support can be a deterrent
            </p>
          </div>
          <div class="col shadow p-3 m-3 bg-white rounded">
            <h6>Lack of Educational Resources</h6>
            <p>
              {" "}
              Users who are new to budgeting might feel lost without guidance,
              tutorials, or educational content
            </p>
          </div>
        </div>
        <div className="mb-3">
          <h5>Personas</h5>
          <div className="d-md-flex align-items-center justify-content-center">
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "100%" }}
                className=" border border-secondary"
                src="/images/save-and-budget/persona1.png"
                alt="Persona 1"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "100%" }}
                className="m-1 border border-secondary"
                src="/images/save-and-budget/persona2.png"
                alt="Persona 2"
              />
            </span>
          </div>

          <div className="mb-3"></div>
          <h5>User journey map</h5>
          <div className="d-md-flex align-items-center justify-content-center">
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "100%" }}
                className="m-1 border border-secondary"
                src="/images/save-and-budget/user-journey-sarah.png"
                alt="user journey"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "100%" }}
                className="m-1 border border-secondary"
                src="/images/save-and-budget/user-journey-alex.png"
                alt="user journey"
              />
            </span>
          </div>
        </div>
        <div className="mb-3">
          <h5>User stories</h5>
          <div className="row">
            <div class="col shadow p-3 m-3 bg-white rounded">
              <h6>Sarah</h6>
              <p>
                As a single mother managing household finances, I want to access
                a comprehensive budgeting tool on a larger screen, So that I can
                have a clear overview of my income, expenses, and savings.
              </p>
            </div>
            <div class="col shadow p-3 m-3 bg-white rounded">
              <h6>Alex</h6>
              <p>
                As a busy professional always on-the-go, I want to have a
                dedicated mobile app for budgeting, So that I can quickly check
                and manage my finances anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <h5>Research summary</h5>
          <p>
            I conduct user research through personas, user empathy maps, and
            problem statement and I conduct a competitive audit to assess the
            strengths and weaknesses of competitors in the budgeting platform
            market and identify opportunities for differentiation
          </p>
        </div>
        <h4>Initial design concepts</h4>
        <div className="mb-3">
          <h5>Sitemap</h5>
          <span className="d-flex align-items-center justify-content-center">
            <img
              style={{ width: "90%" }}
              className="m-1 border border-secondary"
              src="/images/save-and-budget/sitemap.png"
              alt="user flow"
            />
          </span>
        </div>

        {/* <div className="mb-3">
          <h5>Paper wireframes</h5>
          <span className="d-flex align-items-center justify-content-center">
            <img
              className="border border-secondary"
              style={{ width: "90%" }}
              src="/images/virtual-tour/virtua-tour-scetch.png"
              alt="scetch"
            />
          </span>
        </div> */}
        <div className="mb-3">
          <h5>Digital wireframes - mobile app</h5>
          <div className="row">
            <div className="d-md-flex align-items-center justify-content-center">
              <span className="d-flex align-items-center justify-content-center">
                <img
                  className="m-1 border border-secondary"
                  style={{ width: "250px" }}
                  src="/images/save-and-budget/wireframes/Dashboard.png"
                  alt="scetch"
                />
              </span>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "250px" }}
                  className="m-1 border border-secondary"
                  src="/images/save-and-budget/wireframes/Income.png"
                  alt="scetch"
                />
              </span>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "250px" }}
                  className="m-1  border border-secondary"
                  src="/images/save-and-budget/wireframes/Spendings.png"
                  alt="scetch"
                />
              </span>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "250px" }}
                  className="m-1  border border-secondary"
                  src="/images/save-and-budget/wireframes/savings.png"
                  alt="scetch"
                />
              </span>
              <span className="d-flex align-items-center justify-content-center">
                <img
                  style={{ width: "250px" }}
                  className="m-1 border border-secondary"
                  src="/images/save-and-budget/wireframes/Budget.png"
                  alt="scetch"
                />
              </span>
            </div>
          </div>
        </div>
        <h4>Usability study</h4>
        <div className="mb-3 row">
          <p>
            I conducted usability study. Tests were conducted on wireframes.
          </p>
          <h5>Usability study findings</h5>
          <div class="col shadow p-3 m-3 bg-white rounded col">
            <h6>Delete option in savings section</h6>
            <p>
              Users missed the "delete" button to remove a savings category they
              added but no longer wanted
            </p>
          </div>
          <div class="col shadow p-3 m-3 bg-white rounded col">
            <h6>Manage spending categories in the budget section</h6>
            <p>
              Users find it frustrating that they cannot manage spending
              categories in the budget section. They miss the ability to add a
              new budget for spending in a category and to edit or delete it.
            </p>
          </div>
        </div>
        <h4>Final design</h4>
        <div className="row mb-3">
          <h5>Mockups - mobile app</h5>
          <div className="d-md-flex align-items-center justify-content-center">
            <span className="d-flex align-items-center justify-content-center">
              <img
                className="m-1 border border-secondary"
                style={{ width: "250px" }}
                src="/images/save-and-budget/mocks/mobile/Dashboard.png"
                alt="dashboard"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "250px" }}
                className="m-1 border border-secondary"
                src="/images/save-and-budget/mocks/mobile/Income.png"
                alt="incomes page"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "250px" }}
                className="m-1  border border-secondary"
                src="/images/save-and-budget/mocks/mobile/Spendings.png"
                alt="spendings page"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "250px" }}
                className="m-1  border border-secondary"
                src="/images/save-and-budget/mocks/mobile/savings.png"
                alt="savings page"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "250px" }}
                className="m-1 border border-secondary"
                src="/images/save-and-budget/mocks/mobile/Budget.png"
                alt="budget page"
              />
            </span>
          </div>
        </div>
        <div className="mb-3">
          <h5>High-fidelity prototyp - mobile app</h5>
          <div className="d-flex align-items-center justify-content-center">
            <div style={{ width: "90%" }}>
              <a
                href="https://www.figma.com/proto/F9A3cnrMuKBXhubnnR4jnH/save-and-budget?type=design&node-id=7-96&t=3SCnteNeMKScEQTN-1&scaling=scale-down&page-id=7%3A95&starting-point-node-id=7%3A163&mode=design"
                rel="noreferrer"
                target="_blank"
              >
                <PortfolioImageComponent
                  btnName={en ? "Open prototype" : "Otevřít prototyp"}
                  en={en && en}
                  src="/images/save-and-budget/prototype.png"
                  alt="prototype"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="row mb-3">
          <h5>Mockups - responsive design of homepage</h5>
          <div className="d-md-flex align-items-center justify-content-center">
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "250px" }}
                className="m-1 border border-secondary"
                src="/images/save-and-budget/mocks/Mobile.png"
                alt="homepage mobile"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "350px" }}
                className="m-1  border border-secondary"
                src="/images/save-and-budget/mocks/tablet.png"
                alt="homepage tablet"
              />
            </span>
            <span className="d-flex align-items-center justify-content-center">
              <img
                style={{ width: "650px" }}
                className="m-1  border border-secondary"
                src="/images/save-and-budget/mocks/Desktop.png"
                alt="homepage desktop"
              />
            </span>
          </div>
        </div>

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

      <div className="p-2"></div>
      <Navbar
        link={"/case-study/virtual-app"}
        en={en && true}
        bgCol={"#e5e2db"}
      />
    </div>
  );
};

export default SaveAndBudgetApp;
