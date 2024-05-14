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
        <a href={live}>Live</a>
        <a href={github}>Github</a>
      </div>
    </div>
  );
}
