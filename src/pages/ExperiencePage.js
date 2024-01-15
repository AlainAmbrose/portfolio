import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";

function ExperiencePage() {
  const leftDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "scroll",
  };

  const descriptionStyle = {
    flex: "0 0 70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
  };

  const aboutContentStyle = {
    flex: "0 0 70%",
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    marginRight: "25px",
  };

  return (
    <div className="backgroundBox">
      <div style={leftDivStyle}>
        <div style={{ flex: "0 0 15%" }}>
          <h1 style={{ fontSize: "5vw", fontWeight: "800" }}> EXPERIENCE </h1>
        </div>
        <div>
          <a href="https://www.github.com/AlainAmbrose">
            <img
              src={GitHubSVG}
              alt="GitHub Link"
              style={{ marginRight: "10px", height: "50px", width: "50px" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/alain-ambrose">
            <img
              src={LinkedInSVG}
              alt="LinkedIn Link"
              style={{ marginRight: "10px", height: "50px", width: "50px" }}
            />
          </a>
          <a href="https://www.instagram.com/alainambrose911/">
            <img
              src={InstagramSVG}
              alt="Instagram Link"
              style={{ marginRight: "10px", height: "50px", width: "50px" }}
            />
          </a>
        </div>
      </div>
      <div style={rightDivStyle}>
        <p>Experience Content</p>
      </div>
    </div>
  );
}

export default ExperiencePage;
