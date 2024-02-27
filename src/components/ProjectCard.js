import "../App.css";

// projects will be objects that have a title, picture,
// and description
const ProjectCard = ({ project, height, width, color, title }) => {
  const cardStyle = {
    height: height,
    width: width,
    backgroundColor: color,
    // display: "flex",
    position: "relative",
    borderRadius: "10px",
    margin: "2vw",
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
      </div>
    </div>
  );
};

export default ProjectCard;
