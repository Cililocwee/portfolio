import React from "react";
import "./components.css";
import CoolIcon from "../assets/coolicon.png";

export default function Navigation() {
  return (
    <nav>
      <a href="#">
        <div className="nav-banner">
          <img src={CoolIcon} alt="A pretty cool icon, I promise you" />
          <h1 className="highlight">Corrie Stroup</h1>
        </div>
      </a>

      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#projects">Portfolio</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
