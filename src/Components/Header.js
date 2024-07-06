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
      </div>
    </nav>
  );
}

export default Header;
