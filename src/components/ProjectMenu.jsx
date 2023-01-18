import React from "react";

export default function ProjectMenu({ visibilityToggle }) {
  return (
    <div id="project-menu">
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-one-blurb")}
      >
        Project 1
      </a>
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-two-blurb")}
      >
        <p>Project 2</p>
      </a>
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-three-blurb")}
      >
        Project 3
      </a>
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-four-blurb")}
      >
        Project 4
      </a>
    </div>
  );
}
