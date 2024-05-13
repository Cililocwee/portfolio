import React from "react";
import projectList from "../../projects/projectList";

export default function ProjectMenu({ visibilityToggle }) {
  return (
    <div id="project-menu">
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-one-blurb")}
      >
        <p>{projectList[0].projectTitle}</p>
      </a>
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-two-blurb")}
      >
        <p>{projectList[1].projectTitle}</p>
      </a>
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-three-blurb")}
      >
        <p>{projectList[2].projectTitle}</p>
      </a>
      <a
        className="decorated-anchor"
        onClick={() => visibilityToggle("project-four-blurb")}
      >
        <p>{projectList[3].projectTitle}</p>
      </a>
    </div>
  );
}
