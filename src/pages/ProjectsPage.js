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
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
