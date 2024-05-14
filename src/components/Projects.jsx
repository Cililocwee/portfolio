import React from "react";
import projectList from "../helpers/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="section">
      <h2>Here's where my projects go</h2>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet
        sed nulla sed sollicitudin. Aliquam elementum hendrerit luctus. Vivamus
        pulvinar fermentum laoreet. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Nullam aliquet diam a finibus congue. Nam ac lacus
        felis. Aenean scelerisque nisi sed lorem porttitor, vitae elementum
        velit convallis.
      </p>
      <div className="card-container">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.projectTitle}
            image={project.projectImg}
            description={project.projectDescription}
          />
        ))}
      </div>
    </div>
  );
}
