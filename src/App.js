import "./App.css";
import LandingPage from "./pages/LandingPage.js";
import AboutPage from "./pages/AboutPage.js";
import ProjectsPage from "./pages/ProjectsPage.js";
import ExperiencePage from "./pages/ExperiencePage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [visiblePage, setVisiblePage] = useState([
    "Landing",
    "About",
    "Projects",
    "Experience",
  ]);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  if (isMobile) {
    return (
      <div className="mobile-message">
        <h1>Mobile Experience Not Supported Yet</h1>
        <p>Please visit my website on a desktop or tablet device.</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </Router>
  );
};

export default App;
