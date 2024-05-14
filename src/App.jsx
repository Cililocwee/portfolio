import "./App.css";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ReturnToTopButton from "./components/ReturnToTopButton";
import Skills from "./components/Skills";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="content">
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </div>
      <Footer />
      <ReturnToTopButton />
    </div>
  );
}

export default App;
