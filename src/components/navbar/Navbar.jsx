import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";

const Navbar = ({ bgCol, en, link }) => {
  return (
    <div className="py-3 fixed-bottom row " style={{ backgroundColor: bgCol }}>
      <span className="col  d-flex align-items-center justify-content-center">
        <strong>
          <a className="navbar-line px-3" href={`${en ? "/en" : "/"}`}>
            <FaHome />
          </a>
        </strong>
        <strong>
          <a
            className="navbar-line px-3 "
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

        {/* <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <HiLanguage />
            {en ? "en" : "cz"}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href={`${link}/en`}>En</Dropdown.Item>
            <Dropdown.Item href={link}>Cz</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </span>
    </div>
  );
};

export default Navbar;
