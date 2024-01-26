import "../App.css";
import GitHubSVG from "../images/GitHub.svg";
import LinkedInSVG from "../images/LinkedIn.svg";
import InstagramSVG from "../images/Instagram.svg";
import "../App.css";
import SunGreen from "../images/Sun-Green.svg";
import GitHubWhite from "../images/GitHub-White.svg";
import LinkedInWhite from "../images/LinkedIn-White.svg";
import InstagramWhite from "../images/Instagram-White.svg";
import SunWhite from "../images/Sun-White.svg";
import MoonWhite from "../images/Moon-White.png";
import React, { useState } from "react";

function ExperiencePage() {
  const [isParagraphVisible, setIsParagraphVisible] = useState([
    false,
    false,
    false,
  ]);

  const toggleVisibility = (index) => {
    const updatedVisibility = [...isParagraphVisible];
    updatedVisibility[index] = !updatedVisibility[index];
    setIsParagraphVisible(updatedVisibility);
  };

  const leftDivStyle = {
    flex: "0 0 38%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const rightDivStyle = {
    flex: "0 0 58%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    overflow: "scroll",
  };

  const skillsStyle = {
    flex: "0 0 70%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
  };

  const experienceContentStyle = {
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
        <div style={skillsStyle}>
          <div style={{ flex: "0 0 70%" }}>
            <ul className="skills">
              <li className="skillsLi">
                <button type="button" onClick={() => toggleVisibility(0)}>
                  Languages
                </button>
                {isParagraphVisible[0] && <p>Paragraph 1 content goes here.</p>}
              </li>
              <li className="skillsLi">
                <button type="button" onClick={() => toggleVisibility(1)}>
                  Technologies
                </button>
                {isParagraphVisible[1] && <p>Paragraph 2 content goes here.</p>}
              </li>
              <li className="skillsLi">
                <button type="button" onClick={() => toggleVisibility(2)}>
                  Philosophies
                </button>
                {isParagraphVisible[2] && <p>Paragraph 3 content goes here.</p>}
              </li>
            </ul>
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
        <div style={experienceContentStyle}>
          <h1>Credit Karma</h1>
          <section id="Credit-Karma">
            <ul className="info-list">
              <li>
                Implemented novel push/email notifications supporting the mobile
                check deposit feature to enhance the user experience for
                600,000+ members during check rejection events via a Thrift +
                Kafka pipeline{" "}
              </li>
              <li>
                Created an ETL pipeline from our real-time event queue to
                BigQuery to enhance analytics and BI processes around check
                deposit events
              </li>
              <li>
                Utilized an internal experimentation platform to design
                statistically sound A-B testing for new notifications to
                determine impact on deposit re-submission success rates
              </li>
            </ul>
          </section>
          <h1>NSBE UCF</h1>
          <section id="NSBE">
            <ul className="info-list">
              <li>
                Developing an app that will allow the UCF chapter of the
                National Society of Black Engineers' members to stay updated on
                meeting information, keep track of their application and chapter
                status, and view convention information{" "}
              </li>
              <li>
                Volunteer with the TORCH committee to bring engineering concepts
                to the attention of underprivileged children
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
