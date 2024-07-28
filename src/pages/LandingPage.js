import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import SunGreen from "../images/Sun-Green.svg";
import GitHubWhite from "../images/GitHub-White.svg";
import LinkedInWhite from "../images/LinkedIn-White.svg";
import InstagramWhite from "../images/Instagram-White.svg";
import SunWhite from "../images/Sun-White.svg";
import MoonWhite from "../images/Moon-White.png";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LandingPage() {
  const navigate = useNavigate();

  const handleNavClick = (event, location) => {
    event.preventDefault();
    navigate(`/${location}`);
  };

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
    justifyContent: "space-between",
  };

  const contactNavStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  };

  return (
    <div className="backgroundBox">
      <div className="innerBackground" style={{ flex: "0 0 100%" }}>
        <div style={leftDivStyle}>
          <div style={{ flex: "0 0 10%" }}>
            <img
              src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&size=30&pause=1000&color=ffffff&random=false&width=250&height=50&lines=Hi%2C+I'm;Hola%2C+soy;%E4%BD%A0%E5%A5%BD%EF%BC%8C%E6%88%91%E6%98%AF+;Salut%2C+je+suis;%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%2C+%D1%8F"
              alt="Typing SVG"
            />
            <h1> Alain Ambrose </h1>
          </div>
          <div style={contactNavStyle}>
            <div>
              <a href="https://www.github.com/AlainAmbrose">
                <img
                  src={GitHubWhite}
                  alt="GitHub Link"
                  style={{ marginRight: "10px", height: "50px", width: "50px" }}
                />
              </a>
              <a href="https://www.linkedin.com/in/alain-ambrose">
                <img
                  src={LinkedInWhite}
                  alt="LinkedIn Link"
                  style={{ marginRight: "10px", height: "50px", width: "50px" }}
                />
              </a>
              <a href="https://www.instagram.com/alainambrose911/">
                <img
                  src={InstagramWhite}
                  alt="Instagram Link"
                  style={{ marginRight: "10px", height: "50px", width: "50px" }}
                />
              </a>
            </div>
            <div>
              <p>Orlando, FL</p>
              <p>ambrosealain@gmail.com</p>
            </div>
          </div>
        </div>
        <div style={rightDivStyle}>
          <div style={{ flex: "0 0 10%" }}></div>
          <nav>
            <ul className="navigation">
              <li className="navLi">
                <button
                  type="button"
                  onClick={(event) => handleNavClick(event, "about")}
                >
                  About
                </button>
              </li>
              {/* <li className="navLi">
                    <button
                      type="button"
                      onClick={(event) => handleNavClick(event, "skills")}
                    >
                      Skills
                    </button>
                  </li> */}
              <li className="navLi">
                <button
                  type="button"
                  onClick={(event) => handleNavClick(event, "projects")}
                >
                  Projects
                </button>
              </li>
              <li className="navLi">
                <button
                  type="button"
                  onClick={(event) => handleNavClick(event, "experience")}
                >
                  Experience
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
