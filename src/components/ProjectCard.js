import "../App.css";
import "../App.css";

// projects will be objects that have a title, picture,
// and description
const ProjectCard = ({ title }) => {
  const cardStyle = {
    height: "20vh",
    maxWidth: "100%",
    position: "relative",
    borderRadius: "10px",
    overflow: "scroll",
    backgroundColor: "#F6F6F6",
  };

  const cardTitleStyle = {
    fontSize: "2vw",
    fontWeight: "800",
    color: "#0E2C04",
    position: "absolute",
    left: 20,
    top: 20,
  };

  return (
    <div style={cardStyle}>
      <div style={{ flex: "0 0 15%" }}>
        <h1 style={cardTitleStyle}>{title}</h1>
        <ul
          className="project-description"
          style={{ position: "absolute", left: 20, top: 50 }}
        ></ul>
      </div>
    </div>
  );
};

export default ProjectCard;
