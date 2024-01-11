import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import ProjectCard from "../components/ProjectCard";

function ProjectsPage() {
  const topDivStyle = {
    display: "flex",
    backgroundColor: "#f0f0f0",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const bottomDivStyle = {
    flex: "0 0 80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "scroll",
    flexWrap: "wrap",
  };

  return (
    <div className="backgroundBox" style={{ flexDirection: "Column" }}>
      <div style={topDivStyle}>
        <div style={{ flex: "0 0 15%" }}>
          <h1 style={{ fontSize: "5vw", fontWeight: "800" }}> PROJECTS </h1>
        </div>
      </div>
      <div style={bottomDivStyle}>
        <ProjectCard project={"placeholder"} />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
}

export default ProjectsPage;
