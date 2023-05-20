import React from "react";

export default function ProjectBlurb({
  projectTitle,
  projectImg,
  projectDescription,
  projectRepo,
  projectLive,
}) {
  return (
    <div className="blurb-transition">
      <div className="project-title">
        <h2>{projectTitle}</h2>
      </div>
      <div className="project-blurb">
        <div className="project-img">
          <img src={projectImg} alt="" />
        </div>
        <div className="project-description">{projectDescription}</div>
        <div className="project-links">
          <a className="decorated-anchor" href={projectLive}>
            Live
          </a>
          <a className="decorated-anchor" href={projectRepo}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
}
