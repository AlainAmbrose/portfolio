import "../App.css";
import ProjectPopup from "./ProjectPopup";
import { useState } from "react";

// projects will be objects that have a title, picture,
// and description
const ProjectCard = ({ content }) => {
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
          <h1 className="project-card-title">{content.title}</h1>
        </div>
      </div>

      <ProjectPopup
        isOpen={open}
        onClose={() => setOpen(false)}
        content={content}
      />
    </>
  );
};

export default ProjectCard;
