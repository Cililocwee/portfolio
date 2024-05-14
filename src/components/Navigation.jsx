import React from "react";
import "./components.css";

export default function Navigation() {
  return (
    <nav>
      <h1>
        <a href="#">Corrie Stroup</a>
      </h1>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
