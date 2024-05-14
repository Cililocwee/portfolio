import React from "react";
import projectList from "../helpers/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div id="projects" className="section">
      <h2>Portfolio</h2>

      <div className="card-container">
        {projectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.projectTitle}
            image={project.projectImg}
            // description={project.projectDescription}
          />
        ))}
      </div>
    </div>
  );
}
