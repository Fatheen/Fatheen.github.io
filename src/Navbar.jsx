// src/Navbar.jsx
import React from "react";

function Navbar({ onPageChange }) {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="#home" onClick={() => onPageChange("home")}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => onPageChange("about")}>
            About Me
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => onPageChange("projects")}>
            Projects
          </a>
        </li>
        <li>
          <a href="#experience" onClick={() => onPageChange("experience")}>
            Experience
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
