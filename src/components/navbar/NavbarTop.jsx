import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import "./navbar.css";

const NavbarTop = ({ activeSection, en, link }) => {
  return (
    <>
      <Navbar
        closeButton
        fixed="top"
        key={"md"}
        expand={"md"}
        className="bg-body-tertiary shadow  bg-white rounded mb-3"
        style={{ backgroundColor: "white" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md}`} />
          <Offcanvas.Title
            className="d-sm-none"
            id={`offcanvasNavbarLabel-expand-md`}
          >
            <a
              className=" col d-flex align-items-center"
              href={`${en ? "/en" : "/"}`}
            >
              <img
                style={{ width: "30px" }}
                className=" border border-secondary rounded "
                src="/images/logo.png"
                alt="logo"
              />
            </a>
          </Offcanvas.Title>
          <Navbar.Offcanvas>
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link
                  href="#about"
                  style={
                    activeSection === "about"
                      ? { backgroundColor: "#e5e2db", borderRadius: "5px" }
                      : {}
                  }
                >
                  About project
                </Nav.Link>
                <Nav.Link
                  href="#research"
                  style={
                    activeSection === "research"
                      ? { backgroundColor: "#e5e2db", borderRadius: "5px" }
                      : {}
                  }
                >
                  Research study details
                </Nav.Link>
                <Nav.Link
                  href="#concepts"
                  style={
                    activeSection === "concepts"
                      ? { backgroundColor: "#e5e2db", borderRadius: "5px" }
                      : {}
                  }
                >
                  Initial design concepts
                </Nav.Link>

                <Nav.Link
                  href="#usability"
                  style={
                    activeSection === "usability"
                      ? { backgroundColor: "#e5e2db", borderRadius: "5px" }
                      : {}
                  }
                >
                  Usability study
                </Nav.Link>
                <Nav.Link
                  href="#final"
                  style={
                    activeSection === "final"
                      ? { backgroundColor: "#e5e2db", borderRadius: "5px" }
                      : {}
                  }
                >
                  Final design
                </Nav.Link>
                <Nav.Link
                  href="#conclusion"
                  style={
                    activeSection === "conclusion"
                      ? { backgroundColor: "#e5e2db", borderRadius: "5px" }
                      : {}
                  }
                >
                  Conclusion
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="d-sm-none">
            <div className="row py-2">
              <span className="col d-flex align-items-center justify-content-end me-3">
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={en ? "EN" : "CZ"}
                >
                  <NavDropdown.Item href={`${link}/en`}>EN</NavDropdown.Item>
                  <NavDropdown.Item href={link}>CZ</NavDropdown.Item>
                </NavDropdown>
              </span>
            </div>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
