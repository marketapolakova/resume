import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";

const Navbar = ({ bgCol, en, link }) => {
  return (
    <>
      <div className="d-none d-sm-block">
        <div
          className="py-3 fixed-bottom row "
          style={{ backgroundColor: bgCol }}
        >
          <a className="navbar-brand ms-4 col-1" href={`${en ? "/en" : "/"}`}>
            <img
              style={{ width: "30px" }}
              className=" border border-secondary rounded  "
              src="/images/logo.png"
              alt="logo"
            />
          </a>

          <span className="col  d-flex align-items-center justify-content-center">
            <strong>
              <a className="navbar-line px-3" href={`${en ? "/en" : "/"}`}>
                <FaHome />
              </a>
            </strong>
            <strong>
              <a
                className="navbar-line px-3"
                href={`${en ? "/resume/en" : "/resume"}`}
              >
                Resume
              </a>
            </strong>
            <strong>
              <a
                className="navbar-line px-3"
                href={`${en ? "/skills/en" : "/skills"}`}
              >
                {en ? "Skills" : "Dovednosti"}
              </a>
            </strong>
            <strong>
              <a
                className="navbar-line px-3"
                href={`${en ? "/portfolio/en" : "/portfolio"}`}
              >
                Portfolio{" "}
              </a>
            </strong>
            <strong>
              <a href={`${en ? "/contact/en" : "/contact"}`} className="px-3">
                {en ? "Contact" : "Kontakt"}
              </a>
            </strong>
          </span>
          <span className="col-1">
            <NavDropdown
              drop="up"
              id="nav-dropdown-dark-example"
              title={en ? "EN" : "CZ"}
            >
              <NavDropdown.Item href={`${link}/en`}>EN</NavDropdown.Item>
              <NavDropdown.Item href={link}>CZ</NavDropdown.Item>
            </NavDropdown>
          </span>
        </div>
      </div>
      <div className="d-sm-none">
        <div
          className="py-3 fixed-bottom row "
          style={{ backgroundColor: bgCol }}
        >
          <span className=" d-flex align-items-center justify-content-center">
            <strong>
              <a className="navbar-line px-1" href={`${en ? "/en" : "/"}`}>
                <FaHome />
              </a>
            </strong>
            <strong>
              <a
                className="navbar-line px-1"
                href={`${en ? "/resume/en" : "/resume"}`}
              >
                Resume
              </a>
            </strong>
            <strong>
              <a
                className="navbar-line px-1"
                href={`${en ? "/skills/en" : "/skills"}`}
              >
                {en ? "Skills" : "Dovednosti"}
              </a>
            </strong>
            <strong>
              <a
                className="navbar-line px-1"
                href={`${en ? "/portfolio/en" : "/portfolio"}`}
              >
                Portfolio{" "}
              </a>
            </strong>
            <strong>
              <a href={`${en ? "/contact/en" : "/contact"}`} className="px-1">
                {en ? "Contact" : "Kontakt"}
              </a>
            </strong>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
