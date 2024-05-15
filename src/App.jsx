import "./App.css";
import Contact from "./components/Contact";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import ReturnToTopButton from "./components/ReturnToTopButton";
import Skills from "./components/Skills";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";
import MobileNavigation from "./components/MobileNavigation";

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
      <MobileNavigation />
    </div>
  );
}

export default App;
