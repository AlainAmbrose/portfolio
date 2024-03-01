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

  const topDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  };

  const bottomDivStyle = {
    flex: "0 0 80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "auto",
    scrollbarWidth: "none",
    flexWrap: "wrap",
  };

  const interpreterArray = [
    "Developed a program that is able to detect hand signs and translate them into text with a team of 5.",
    "Integrated an object detection algorithm using RoboFlow",
    "Languages & Technologies: Python, OpenCV, Jupyter Notebooks",
  ];
  const topTierArray = [
    "Developed a website that allows users to catalog and rank video-games.",
    "Implemented logic that integrates a relational database of users and games in order to provide a seamless user experience.",
    "Implemented JSON web tokenization and email authentication to increase application security.",
    "Languages & Technologies: React, Node.js, MongoDB, JWT, Nodemailer",
  ];
  const pl0Array = [
    "Designed a compiler for the PL-0 programming language in a team of 2.",
    "Implemented logic in order to parse code for grammar and syntax checking",
    "Developed an algorithm for the generation of assembly code from novel PL/0 code.",
    "Languages & Technologies: C",
  ];
  const infoVentureArray = [
    "Wrote a role-playing game designed to help supplement learning in underprivileged areas.",
    "Prompted the user to complete tasks and provided new information with each task completed.",
    "Languages & Technologies: C#, Unity, Visual Studio",
  ];

  return (
    <div className="backgroundBox" style={{ flexDirection: "Column" }}>
      <div style={topDivStyle}>
        <div style={{ flex: "0 0 15%" }}>
          <h1 style={{ fontSize: "5vw", fontWeight: "800" }}> PROJECTS </h1>
        </div>
        <Navbar />
      </div>
      <div style={bottomDivStyle}>
        <ProjectCard
          project={"placeholder"}
          title={"ASL Interpreter"}
          color={"#ffffff"}
          height={"40vh"}
          width={"41vw"}
          descriptionArray={interpreterArray}
        />
        <ProjectCard
          project={"placeholder"}
          title={"TopTier"}
          color={"#ffffff"}
          height={"40vh"}
          width={"41vw"}
          descriptionArray={topTierArray}
        />
        <ProjectCard
          project={"placeholder"}
          title={"PL0 Compiler"}
          color={"#ffffff"}
          height={"40vh"}
          width={"41vw"}
          descriptionArray={pl0Array}
        />
        <ProjectCard
          project={"placeholder"}
          title={"InfoVenture"}
          color={"#ffffff"}
          height={"40vh"}
          width={"41vw"}
          descriptionArray={infoVentureArray}
        />
      </div>
    </div>
  );
}

export default ProjectsPage;
