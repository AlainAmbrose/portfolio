import "./App.css";
import LandingPage from "./pages/LandingPage.js";
import AboutPage from "./pages/AboutPage.js";
import SkillsPage from "./pages/SkillsPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import ExperiencePage from "./pages/ExperiencePage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <CSSTransition
              in={true} // You can determine whether the transition should happen based on some condition
              timeout={300}
              className="fade-enter"
              unmountOnExit
            >
              <LandingPage />
            </CSSTransition>
          }
        />
        <Route
          path="/about"
          element={
            <CSSTransition
              in={true} // You can determine whether the transition should happen based on some condition
              timeout={300}
              className="fade-enter"
              unmountOnExit
            >
              <AboutPage />
            </CSSTransition>
          }
        />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
}

export default App;
