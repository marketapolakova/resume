import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";

const Navbar = ({ bgCol }) => {
  return (
    <div
      className="text-center py-3 fixed-bottom"
      style={{ backgroundColor: bgCol }}
    >
      <strong>
        <a className="navbar-line px-3" href="/">
          <FaHome />
        </a>
      </strong>
      <strong>
        <a className="navbar-line px-3 " href="/resume">
          Resume
        </a>
      </strong>
      <strong>
        <a className="navbar-line px-3" href="/skills">
          Dovednosti
        </a>
      </strong>
      {/* <strong>
        <a className="navbar-line px-3" href="/">
          Portfolio{" "}
        </a>
      </strong> */}
      <strong>
        <a href="/contact" className="px-3">
          Kontakt{" "}
        </a>
      </strong>
    </div>
  );
};

export default Navbar;
