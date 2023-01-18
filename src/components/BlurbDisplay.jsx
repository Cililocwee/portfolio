import React from "react";
import ProjectBlurb from "./ProjectBlurb";

export default function BlurbDisplay() {
  function displayActive(e) {
    console.log(e.target.className);
  }
  return (
    <div id="blurb-container">
      <div id="welcome-blurb" className="blurb" onClick={displayActive}>
        <h1>Howdy</h1>
        <p>Welcome to my site.</p>
      </div>
      <div id="project-one-blurb" className="blurb hidden">
        <ProjectBlurb projectTitle="Project Alpha" />
      </div>

      <div id="project-two-blurb" className="blurb hidden">
        <ProjectBlurb projectTitle="Project Beta" />
      </div>
      <div id="project-three-blurb" className="blurb hidden">
        <ProjectBlurb projectTitle="Project Gamma" />
      </div>
      <div id="project-four-blurb" className="blurb hidden">
        <ProjectBlurb projectTitle="Project Delta" />
      </div>
    </div>
  );
}
