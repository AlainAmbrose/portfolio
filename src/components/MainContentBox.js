import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";

function Content() {
  const boxStyle = {
    margin: "2.5vh",
    padding: "20px",
    border: "1px solid #000",
    height: "95vh",
    boxSizing: "border-box",
    borderRadius: "10px",
    backgroundColor: "#f0f0f0",
    opacity: 0.5,
    display: "flex",
    justifyContent: "space-between",
  };

  const leftDivStyle = {
    flex: "0 0 48%", // Adjusted width to leave space between innerDiv1 and innerDiv2
  };

  const rightDivStyle = {
    flex: "0 0 48%", // Adjusted width to leave space between innerDiv1 and innerDiv2
    display: "flex",
    flexDirection: "column",
  };

  const linksContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    alignSelf: "flex-end", // Align the container to the flex-end
    marginTop: "auto", // Push the container to the bottom
  };

  const logosContainerStyle = {
    marginTop: "99%", // Push logos to the bottom
    marginBottom: "10px", // Add some margin for spacing
  };

  return (
    <div style={boxStyle}>
      <div style={leftDivStyle}>
        <img
          src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=30&pause=1000&color=0E2C04&random=false&width=250&height=50&lines=Hi%2C+I'm;Hola%2C+soy;%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF+;Salut%2C+je+suis;%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C+%D1%8F"
          alt="Typing SVG"
        />
        <h1> Alain Ambrose </h1>
        <div style={logosContainerStyle}>
          {/* Add your logo links here */}
          <a href="https://www.github.com/AlainAmbrose">
            <img
              src={GitHubSVG}
              alt="GitHub Link"
              style={{ marginRight: "10px", height: "5vh", width: "5vw" }}
            />
          </a>
          <a href="https://www.linkedin.com/in/alain-ambrose">
            <img
              src={LinkedInSVG}
              alt="LinkedIn Link"
              style={{ marginRight: "10px", height: "5vh", width: "5vw" }}
            />
          </a>
          <a href="https://www.instagram.com/alainambrose911/">
            <img
              src={InstagramSVG}
              alt="Instagram Link"
              style={{ marginRight: "10px", height: "5vh", width: "5vw" }}
            />
          </a>
          {/* Add more logos as needed */}
        </div>
      </div>
      <div style={rightDivStyle}>
        <div style={linksContainerStyle}>
          <ul className="navigation">
            <li className="navLi">
              <a>About</a>
            </li>
            <li className="navLi">
              <a>Skills</a>
            </li>
            <li className="navLi">
              <a>Projects</a>
            </li>
            <li className="navLi">
              <a>Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;
