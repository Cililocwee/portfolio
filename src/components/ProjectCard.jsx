import React from "react";
import "./components.css";

export default function ProjectCard({ type, image, title, live, github }) {
  return (
    <div className="card">
      <div className="card-type">{type ? <p>{type}</p> : <p>Portfolio</p>}</div>
      <div
        className="card-image-container"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="card-image-title">{title}</div>
      </div>
      <div className="card-links">
        {live != "#" && (
          <a href={live} className="card-link" target="_blank">
            Live
          </a>
        )}
        {github != "#" && (
          <a href={github} className="card-link" target="_blank">
            Github
          </a>
        )}
      </div>
    </div>
  );
}
