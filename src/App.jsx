import "./App.css";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

import Introduction from "./sections/Introduction";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
