import "../App.css";
import ProjectCard from "../components/ProjectCard";
import Navbar from "../components/NavBar";

function ProjectsPage() {
  const topTierContent = {
    title: "TopTier",
    description:
      "TopTier is an interactive platform designed for gaming enthusiasts to explore, catalog, rank, and review their favorite video games. The application allows users to create personal accounts, browse through a comprehensive list of video games, and contribute by adding their own ratings and reviews. The platform features JWT authentication, RESTful API's, and a MongoDB database.",
    stack: ["React", "Node.js", "MongoDB"],
  };

  const infoVentureContent = {
    title: "InfoVenture",
    description:
      "Infoventure is an educational game developed for ShellHacks, designed to empower students from underrepresented communities by teaching essential life lessons through interactive gameplay. The game leverages the Unity platform to create an engaging and immersive experience.",
    stack: ["C#", "Unity"],
  };

  const distributedWebAppContent = {
    title: "C.R.U.D",
    description:
      "C.R.U.D is a multi-tier web app that allows users to read existing records, update information, and delete records related to Olympic events and NASCAR races.  Built as a distributed system, C.R.U.D utilizes Java Servlets and the Tomcat server to handle client requests and manage data across multiple layers. The frontend of the application was developed using HTML and CSS, providing a clean and user-friendly interface. ",
    stack: ["Java", "Tomcat", "HTML", "CSS"],
  };

  const handSignInterpreterContent = {
    title: "ASL Interpreter",
    description:
      "The American Sign Language (ASL) Letter Interpreter is a Python-based application designed to recognize and interpret hand signs representing letters of the American Sign Language alphabet. The application captures real-time input and outputs the corresponding letter to the terminal, making it a useful tool for learning and practicing ASL.",
    stack: ["Python", "OpenCV", "MediaPipe"],
  };

  const pl0CompilerContent = {
    title: "PL-0 compiler",
    description:
      "The PL-0 Compiler is a project developed entirely in C, designed to parse, analyze, and compile code written in a novel version of the PL/0 programming language. This compiler not only checks the grammar and syntax of the PL/0 code but also generates corresponding assembly code.",
    stack: ["C"],
  };

  const cueClashContent = {
    title: "Cue Clash!",
    description:
      "Cue Clash! is an interactive web-based 8-ball pool game developed entirely in JavaScript. The game offers players a realistic and engaging online pool experience, complete with smooth animations and responsive gameplay.",
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
