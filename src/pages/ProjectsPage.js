import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import ProjectCard from "../components/ProjectCard";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

function ProjectsPage() {
  const navigate = useNavigate();

  const topDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const bottomDivStyle = {
    flex: "0 0 80%",
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    overflow: "scroll",
    flexWrap: "wrap",
  };

  return (
    <div className="backgroundBox" style={{ flexDirection: "Column" }}>
      <div style={topDivStyle}>
        <div style={{ flex: "0 0 15%" }}>
          <h1 style={{ fontSize: "5vw", fontWeight: "800" }}> PROJECTS </h1>
        </div>
        <button
          style={{ height: "75px", width: "75px" }}
          onClick={() => navigate("/")}
        >
          <ChevronLeftIcon
            style={{ height: "75px", width: "75px" }}
            aria-hidden="true"
          />
        </button>
      </div>
      <div style={bottomDivStyle}>
        <ProjectCard
          project={"placeholder"}
          title={"TopTier"}
          color={"#ffffff"}
        />
        <ProjectCard color={"#ffffff"} />
        <ProjectCard color={"#ffffff"} />
        <ProjectCard color={"#ffffff"} />
        <ProjectCard color={"#ffffff"} />
        <ProjectCard color={"#ffffff"} />
      </div>
    </div>
  );
}

export default ProjectsPage;
