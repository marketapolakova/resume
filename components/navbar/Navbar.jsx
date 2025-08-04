import React from "react";
import styles from "../../styles/components/navbar.module.css";
import { FaHome } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";

const Navbar = ({ bgCol, en, link }) => {
  return (
    <div>
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
              <a
                className={`px-3 ${styles.navbarLine}`}
                href={`${en ? "/en" : "/"}`}
              >
                <FaHome />
              </a>
            </strong>
            <strong>
              <a
                className={`px-3 ${styles.navbarLine}`}
                href={`${en ? "/en/resume" : "/resume"}`}
              >
                Resume
              </a>
            </strong>
            <strong>
              <a
                className={`px-3 ${styles.navbarLine}`}
                href={`${en ? "/en/skills" : "/skills"}`}
              >
                {en ? "Skills" : "Dovednosti"}
              </a>
            </strong>
            <strong>
              <a
                className={`px-3 ${styles.navbarLine}`}
                href={`${en ? "/en/portfolio" : "/portfolio"}`}
              >
                Portfolio{" "}
              </a>
            </strong>
            <strong>
              <a href={`${en ? "/en/contact" : "/contact"}`} className="px-3">
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
              <NavDropdown.Item href={`/en/${link}`}>EN</NavDropdown.Item>
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
              <a
                className={`px-1 ${styles.navbarLine}`}
                href={`${en ? "/en" : "/"}`}
              >
                <FaHome />
              </a>
            </strong>
            <strong>
              <a
                className={`px-1 ${styles.navbarLine}`}
                href={`${en ? "/en/resume" : "/resume"}`}
              >
                Resume
              </a>
            </strong>
            <strong>
              <a
                className={`px-1 ${styles.navbarLine}`}
                href={`${en ? "/en/skills" : "/skills"}`}
              >
                {en ? "Skills" : "Dovednosti"}
              </a>
            </strong>
            <strong>
              <a
                className={`px-1 ${styles.navbarLine}`}
                href={`${en ? "/en/portfolio" : "/portfolio"}`}
              >
                Portfolio{" "}
              </a>
            </strong>
            <strong>
              <a href={`${en ? "/en/contact" : "/contact"}`} className="px-1">
                {en ? "Contact" : "Kontakt"}
              </a>
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
