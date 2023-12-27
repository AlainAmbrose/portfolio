import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";

function AboutPage() {
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
    overflow: "scroll",
  };

  const descriptionStyle = {
    flex: "0 0 70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
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
                color: "#0E2C04",
              }}
            >
              Hey! I’m a student studying computer science at the University of
              Central Florida
            </p>
            <p
              style={{
                color: "#0E2C04",
              }}
            >
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
        <div></div>
      </div>
    </div>
  );
}

export default AboutPage;
