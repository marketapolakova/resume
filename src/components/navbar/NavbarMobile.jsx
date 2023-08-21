import React from "react";
import { NavDropdown } from "react-bootstrap";

const NavbarMobile = ({ en, link }) => {
  return (
    <div className="d-sm-none">
      <div className="row py-2">
        <a
          className=" ms-2 col d-flex align-items-center  "
          href={`${en ? "/en" : "/"}`}
        >
          <img
            style={{ width: "30px" }}
            className=" border border-secondary rounded  "
            src="/images/logo.png"
            alt="logo"
          />
        </a>
        <span className="col d-flex align-items-center justify-content-end me-3">
          <NavDropdown id="nav-dropdown-dark-example" title={en ? "EN" : "CZ"}>
            <NavDropdown.Item href={`${link}/en`}>EN</NavDropdown.Item>
            <NavDropdown.Item href={link}>CZ</NavDropdown.Item>
          </NavDropdown>
        </span>
      </div>
    </div>
  );
};

export default NavbarMobile;
