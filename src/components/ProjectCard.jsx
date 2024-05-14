import React from "react";
import "./components.css";

export default function ProjectCard({ title, image, description }) {
  return (
    <div className="card">
      <div className="card-title">{title}</div>
      <div className="card-image-container">
        <img src={image} alt={title} className="card-image" />
      </div>
      <div className="card-description">{description}</div>
      <div className="card-link-container">
        <a href="#projects">Live</a>
        <a href="#projects">Github</a>
      </div>
    </div>
  );
}
