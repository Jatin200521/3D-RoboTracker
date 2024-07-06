import React from "react";
import { Link } from "react-router-dom";
import "../Css/Header.css";
function Header() {
  return (
    <nav className="nav-bar">
      <div className="navigation">
        <Link className="links" to="/3D-RoboTracker">
          Home
        </Link>
        <Link className="links" to="/about">
          About
        </Link>
        <Link className="links" to="/instruction">
          Instruction
        </Link>
        <Link className="links" to="/Contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Header;
