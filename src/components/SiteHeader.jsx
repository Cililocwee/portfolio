import React from "react";
import ProfilePicture from "../assets/johnsmith.jpg";
import GHIcon from "../assets/github.png";
import LIIcon from "../assets/linkedin.png";
import GMIcon from "../assets/gmail.png";
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
        <img className="connect-icon" src={GHIcon} alt="" />
        <img className="connect-icon" src={LIIcon} alt="" />
        <img className="connect-icon" src={GMIcon} alt="" />
      </div>
    </div>
  );
}
