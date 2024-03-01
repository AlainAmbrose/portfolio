import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import GitHubWhite from "../images/GitHub-White.svg";
import LinkedInWhite from "../images/LinkedIn-White.svg";
import InstagramWhite from "../images/Instagram-White.svg";
import Navbar from "../components/NavBar";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

function AboutPage() {
  const navigate = useNavigate();

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
    overflow: "auto",
    scrollbarWidth: "none",
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
          <h1 style={{ fontSize: "5vw", fontWeight: "800" }}> ABOUT </h1>
        </div>
        <div style={descriptionStyle}>
          <div style={{ flex: "0 0 70%" }}>
            <p
              style={{
                fontSize: "2.2vw",
                fontWeight: "bold",
                marginBottom: "1rem",
              }}
            >
              Hey! I’m a student studying computer science at the University of
              Central Florida
            </p>
            <p>
              Born in Queens, NY but raised in Fort Lauderdale, FL I have always
              had a love for learning and solving problems. I started seriously
              applying this love for learning to computer science concepts right
              before college. Since that point I have worked every day to get
              better with my problem solving, critical thinking, communication
              skills, and teamwork. I'm committed to putting in effort to learn
              through work experience and am looking forward to growing as I
              move forward.
            </p>
          </div>
        </div>
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
      </div>
      <div style={rightDivStyle}>
        <div style={aboutContentStyle}>
          <h1>Coursework</h1>
          <section id="coursework">
            <ul className="info-list">
              <li>Data Structures and Algorithms </li>
              <li>Security in Computing</li>
              <li>Object Oriented Programming</li>
              <li>Algorithms for Machine Learning</li>
              <li>Software Engineering</li>
            </ul>
          </section>
          <h1>Awards</h1>
          <section id="awards">
            <ul className="info-list">
              <li>Pegasus Gold Scholarship </li>
              <li>CECS Dean’s List</li>
              <li>CECS President’s Honor Roll</li>
              <li>Hack Georgia Tech Division Winner</li>
            </ul>
          </section>
          <h1>Hobbies</h1>
          <section id="hobbies">
            <ul className="info-list">
              <li>Music</li>
              <li>Skateboarding</li>
              <li>Competetive Programming</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
