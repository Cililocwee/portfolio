import "./App.css";
import BackgroundLayer from "./components/BackgroundLayer";
import BlurbDisplay from "./components/BlurbDisplay";
import ProjectMenu from "./components/ProjectMenu";
import SiteHeader from "./components/SiteHeader";

function App() {
  function displayBlurb(blurb) {
    const blurbs = document.getElementsByClassName("blurb");
    for (let i = 0; i < blurbs.length; i++) {
      blurbs[i].classList.add("hidden");
    }

    document.getElementById(blurb).classList.remove("hidden");
  }

  return (
    <div className="App">
      <div id="page-container">
        <BackgroundLayer position="top" />
        <BackgroundLayer position="bottom" />

        <SiteHeader visibilityToggle={displayBlurb} />

        <div id="layout-container">
          <BlurbDisplay />

          <div id="project-menu-container">
            <h2 id="projects-label">Projects</h2>
            <ProjectMenu visibilityToggle={displayBlurb} />
          </div>
        </div>

        <div id="footer">©2023 Corrie Stroup</div>
      </div>
    </div>
  );
}

export default App;
