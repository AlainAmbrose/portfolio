import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import ProjectCard from "../components/ProjectCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";

function ProjectsPage() {
  const navigate = useNavigate();

  const topTierContent = {
    title: "TopTier",
    description:
      "TopTier is a web app that allows for cataloging and ranking video-games",
    stack: ["React", "Node.js", "MongoDB"],
  };

  const infoVentureContent = {
    title: "InfoVenture",
    description: "This is a project description",
    stack: ["C#", "Unity"],
  };

  const distributedWebAppContent = {
    title: "C.R.U.D",
    description: "This is a project description",
    stack: ["Java", "Tomcat"],
  };

  const handSignInterpreterContent = {
    title: "Hand Sign Interpreter",
    description: "This is a project description",
    stack: ["Python", "OpenCV"],
  };

  const pl0CompilerContent = {
    title: "PL-0 compiler",
    description: "This is a project description",
    stack: ["C"],
  };

  const cueClashContent = {
    title: "Cue Clash!",
    description: "This is a project description",
    stack: ["C#", "Unity"],
  };

  const projectContainerStyle = {
    display: "grid",
    fontSize: "0",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "auto",
    gridGap: "3vh",
    justifyContent: "center",
    alignItems: "center",
  };

  const innerBackground = {
    boxSizing: "border-box",
    height: "75vh",
    borderRadius: "10px",
  };

  return (
    <div
      className="backgroundBox"
      style={{ flexDirection: "Column", paddingBottom: "0" }}
    >
      <div className="pageHeader">
        <h1 style={{ fontSize: "5vw", fontWeight: "800", flex: "0 0 30%" }}>
          PROJECTS
        </h1>
        <Navbar />
      </div>
      <div style={innerBackground}>
        <div style={projectContainerStyle}>
          <ProjectCard content={topTierContent} />
          <ProjectCard content={infoVentureContent} />
          <ProjectCard content={distributedWebAppContent} />
          <ProjectCard content={handSignInterpreterContent} />
          <ProjectCard content={pl0CompilerContent} />
          <ProjectCard content={cueClashContent} />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
