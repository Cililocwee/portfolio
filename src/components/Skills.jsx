import React from "react";

import AngularIcon from "../assets/skills/angular.svg";
import DockerIcon from "../assets/skills/docker.svg";
import GitIcon from "../assets/skills/git.svg";
import JavaIcon from "../assets/skills/java.svg";
import JavascriptIcon from "../assets/skills/javascript.svg";
import MongoIcon from "../assets/skills/mongo.svg";
import MysqlIcon from "../assets/skills/mysql.svg";
import NodeIcon from "../assets/skills/nodejs.svg";
import PhpIcon from "../assets/skills/php.svg";
import PythonIcon from "../assets/skills/python.svg";
import ReactJSIcon from "../assets/skills/react.svg";
import SassIcon from "../assets/skills/sass.svg";
import TypescriptIcon from "../assets/skills/typescript.svg";
import UbuntuIcon from "../assets/skills/ubuntu.svg";
import WordPressIcon from "../assets/skills/wordpress.svg";

export default function Skills() {
  const icons = [
    JavascriptIcon,
    TypescriptIcon,
    ReactJSIcon,
    WordPressIcon,
    PythonIcon,
    DockerIcon,
    AngularIcon,
    JavaIcon,
    MongoIcon,
    PhpIcon,
    UbuntuIcon,
    GitIcon,
    MysqlIcon,
    NodeIcon,
  ];

  return (
    <div id="skills" className="section">
      <div id="icon-container">
        {icons.map((icon, index) => (
          <img
            src={icon}
            key={index}
            className="skills-icon bouncy"
            alt="skill icon"
          />
        ))}
      </div>
    </div>
  );
}
