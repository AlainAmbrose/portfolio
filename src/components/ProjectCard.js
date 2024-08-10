import "../App.css";
import "../App.css";
import ProjectPopup from "./ProjectPopup";
import { useState } from "react";

// projects will be objects that have a title, picture,
// and description
const ProjectCard = ({ title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="project-card"
        onClick={() => {
          setOpen(true);
          console.log("clicked");
        }}
      >
        <div style={{ flex: "0 0 70%" }}>
          <h1 className="project-card-title">{title}</h1>
        </div>
      </div>

      <ProjectPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        description="This is a project description"
      />
    </>
  );
};

export default ProjectCard;
