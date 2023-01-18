import { useState } from "react";
import "./App.css";
import BackgroundLayer from "./components/BackgroundLayer";
import BlurbDisplay from "./components/BlurbDisplay";
import ProjectMenu from "./components/ProjectMenu";
import SiteHeader from "./components/SiteHeader";

function App() {
  function displayBlurb(blurb) {
    const blurbs = document.getElementsByClassName("blurb");
    console.log(blurbs);
    for (let i = 0; i < blurbs.length; i++) {
      blurbs[i].classList.add("hidden");
    }

    document.getElementById(blurb).classList.remove("hidden");
  }

  return (
    <div className="App">
      <BackgroundLayer position="top" />
      <SiteHeader visibilityToggle={displayBlurb} />
      <BlurbDisplay />

      <div id="project-menu-container">
        <ProjectMenu visibilityToggle={displayBlurb} />
      </div>

      <div id="footer">©2023 Corrie Stroup</div>
      <BackgroundLayer position="bottom" />
    </div>
  );
}

export default App;
