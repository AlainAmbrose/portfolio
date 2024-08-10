import "../App.css";
import "../App.css";

// projects will be objects that have a title, picture,
// and description
const ProjectCard = ({ title }) => {
  return (
    <div className="project-card">
      <div style={{ flex: "0 0 70%" }}>
        <h1 className="project-card-title">{title}</h1>
      </div>
    </div>
  );
};

export default ProjectCard;
