import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";

function ExperiencePage() {
  const leftDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    backgroundColor: "#f0f0f0",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightDivStyle = {
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
  };

  return (
    <div className="backgroundBox">
      <div style={leftDivStyle}>
        <div style={{ flex: "0 0 85%" }}>
          <img
            src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=30&pause=1000&color=0E2C04&random=false&width=250&height=50&lines=Hi%2C+I'm;Hola%2C+soy;%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF+;Salut%2C+je+suis;%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C+%D1%8F"
            alt="Typing SVG"
          />
          <h1> Alain Ambrose </h1>
        </div>
        <div>
          <p>Orlando, FL</p>
          <p>ambrosealain@gmail.com</p>
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
        <div>
          <h1>EXPERIENCE PAGE!!!</h1>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
