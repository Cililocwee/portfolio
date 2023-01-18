import React from "react";

export default function ProjectMenu({ visibilityToggle }) {
  return (
    <div id="project-menu">
      <li onClick={() => visibilityToggle("project-one-blurb")}>Project 1</li>
      <li onClick={() => visibilityToggle("project-two-blurb")}>Project 2</li>
      <li onClick={() => visibilityToggle("project-three-blurb")}>Project 3</li>
      <li onClick={() => visibilityToggle("project-four-blurb")}>Project 4</li>
    </div>
  );
}
