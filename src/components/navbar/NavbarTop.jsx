import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";

const NavbarTop = () => {
  return (
    <>
      <Navbar
        fixed="top"
        key={"md"}
        expand={"md"}
        className="bg-body-tertiary"
        style={{ backgroundColor: "white" }}
      >
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${"md"}`} />
          <Navbar.Offcanvas>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <Nav.Link href="#about">About project</Nav.Link>
                <Nav.Link href="#research">Research study details</Nav.Link>
                <Nav.Link href="#concepts">Initial design concepts</Nav.Link>

                <Nav.Link href="#usability">Usability study</Nav.Link>
                <Nav.Link href="#final">Final design</Nav.Link>
                <Nav.Link href="#conclusion">Conclusion</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarTop;
