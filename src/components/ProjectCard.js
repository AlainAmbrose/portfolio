import "../App.css";

// projects will be objects that have a title, picture,
// and description
const ProjectCard = ({ project, height, width, color, title }) => {
  const cardStyle = {
    height: "35vh",
    backgroundColor: color,
    borderRadius: "10px",
    flex: "0 0 49%",
    marginBottom: "30px",
  };

  return (
    <div style={cardStyle}>
      {/* <p style={{ color: "#0E2C04" }}>{title}</p> */}
    </div>
  );
};

export default ProjectCard;
