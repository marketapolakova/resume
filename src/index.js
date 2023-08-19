import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import ResumePage from "./pages/resumePage/ResumePage";
import SkillsPage from "./pages/skillsPage/SkillsPage";
import ContactPage from "./pages/contactPage/ContactPage";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import VirtualApp from "./pages/caseStudies/VirtualApp";
import DanceClasses from "./pages/caseStudies/DanceClasses";
import SaveAndBudgetApp from "./pages/caseStudies/SaveAndBudgetApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/case-study/virtual-app" element={<VirtualApp />} />
          <Route path="/case-study/dance-classes" element={<DanceClasses />} />
          <Route
            path="/case-study/save-and-budget"
            element={<SaveAndBudgetApp />}
          />

          <Route path="/en" element={<HomePage en={true} />} />
          <Route path="/resume/en" element={<ResumePage en={true} />} />
          <Route path="/skills/en" element={<SkillsPage en={true} />} />
          <Route path="/portfolio/en" element={<PortfolioPage en={true} />} />
          <Route path="/contact/en" element={<ContactPage en={true} />} />
          <Route
            path="/case-study/virtual-app/en"
            element={<VirtualApp en={true} />}
          />
          <Route
            path="/case-study/dance-classes/en"
            element={<DanceClasses en={true} />}
          />
          <Route
            path="/case-study/save-and-budget/en"
            element={<SaveAndBudgetApp en={true} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
