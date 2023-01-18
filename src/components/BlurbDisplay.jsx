import React from "react";
import ProjectBlurb from "./ProjectBlurb";
import projectList from "../projects/projectList";

export default function BlurbDisplay() {
  function displayActive(e) {
    console.log(e.target.className);
  }

  return (
    <div id="blurb-container">
      <div id="welcome-blurb" className="blurb" onClick={displayActive}>
        <h1>Howdy</h1>
        <p>
          My name is Corrie Stroup, I'm a Frontend Developer based in Ho Chi
          Minh City, Vietnam. I have developed a variety of different types of
          front-end apps from clones of popular social media websites to
          business UIs.
        </p>
        <p>
          Expressive, creative front-ends are a passion of mine. Bleeding edge
          is where I like to be; the frontier of pixel-perfection and intuitive
          UX.
        </p>
      </div>
      <div id="project-one-blurb" className="blurb hidden">
        <ProjectBlurb
          projectTitle={projectList[0].projectTitle}
          projectImg={projectList[0].projectImg}
          projectLive={projectList[0].projectLive}
          projectRepo={projectList[0].projectRepo}
          projectDescription={projectList[0].projectDescription}
        />
      </div>

      <div id="project-two-blurb" className="blurb hidden">
        <ProjectBlurb
          projectTitle={projectList[1].projectTitle}
          projectImg={projectList[1].projectImg}
          projectLive={projectList[1].projectLive}
          projectRepo={projectList[1].projectRepo}
          projectDescription={projectList[1].projectDescription}
        />
      </div>
      <div id="project-three-blurb" className="blurb hidden">
        <ProjectBlurb
          projectTitle={projectList[2].projectTitle}
          projectImg={projectList[2].projectImg}
          projectLive={projectList[2].projectLive}
          projectRepo={projectList[2].projectRepo}
          projectDescription={projectList[2].projectDescription}
        />
      </div>
      <div id="project-four-blurb" className="blurb hidden">
        <ProjectBlurb
          projectTitle={projectList[3].projectTitle}
          projectImg={projectList[3].projectImg}
          projectLive={projectList[3].projectLive}
          projectRepo={projectList[3].projectRepo}
          projectDescription={projectList[3].projectDescription}
        />
      </div>
    </div>
  );
}
