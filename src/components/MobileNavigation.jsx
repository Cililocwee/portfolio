import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";

export default function MobileNavigation() {
  const [isOpen, setOpen] = useState(false);

  const menu = document.getElementById("mobile-navigation-screen");

  const handleToggle = (toggled) => {
    if (toggled) {
      menu.style.transform = "translateX(0)";
    } else {
      menu.style.transform = "translateX(100%)";
    }

    console.log("fired");
  };

  const handleClose = (e) => {
    // e.stopPropagation();
    menu.style.transform = "translateX(100%)";
    setOpen(false);
  };

  return (
    <div id="mobile-navigation">
      <div id="hamburger">
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          color="#64ffda"
          onToggle={handleToggle}
        />
      </div>

      <div id="mobile-navigation-screen" onClick={handleClose}>
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
      </div>
    </div>
  );
}
