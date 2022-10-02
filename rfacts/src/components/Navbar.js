import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="nav1">
        <h1>React Facts</h1>
        <ul className="nav2">
          <li>pricing</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
