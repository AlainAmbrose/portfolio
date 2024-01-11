import "../App.css";

// projects will be objects that have a title, picture,
// and description
const ProjectCard = ({ project, aspectHeight, aspectWidth }) => {
  const cardStyle = {
    aspectHeight: `/${aspectHeight}`,
    aspectWidth: `/${aspectWidth}`,
    backgroundColor: "#0E2C04",
  };

  return <div style={cardStyle}></div>;
};

export default ProjectCard;
