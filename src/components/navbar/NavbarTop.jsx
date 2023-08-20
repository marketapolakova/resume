import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import "./navbar.css";

const NavbarTop = ({ activeSection }) => {
  return (
    <>
      <Navbar
        fixed="top"
        key={"md"}
        expand={"md"}
        className="bg-body-tertiary shadow  bg-white rounded mb-3"
        style={{ backgroundColor: "white" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas>
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
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
