import React from "react";
import ProfilePicture from "../assets/profilepicture.jpg";
import GHIcon from "../assets/github.png";
import LIIcon from "../assets/linkedin.png";
import GMIcon from "../assets/gmail.png";
import Blog from "../assets/blog.svg";
import "./components.css";

export default function SiteHeader({ visibilityToggle }) {
  return (
    <div id="site-header">
      <img
        onClick={() => visibilityToggle("welcome-blurb")}
        id="profile-picture"
        src={ProfilePicture}
        alt=""
      />
      <div id="connect-box">
        <a href="https://github.com/Cililocwee">
          <img className="connect-icon" src={GHIcon} alt="github profile" />
        </a>
        <a href="https://www.linkedin.com/in/corriestroup/">
          <img className="connect-icon" src={LIIcon} alt="linkedin profile" />
        </a>
        <a href="mailto:corrie.stroup@gmail.com">
          <img
            className="connect-icon"
            src={GMIcon}
            alt="email: corrie.stroup@gmail.com"
          />
        </a>
        <a href="https://corries-devblog.web.app">
          <img id="blog-icon" src={Blog} alt="github profile" />
        </a>
      </div>
    </div>
  );
}
