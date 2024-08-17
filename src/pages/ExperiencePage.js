import "../App.css";
import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/NavBar";
import ExperienceCard from "../components/ExperienceCard";
import SocialMediaLinks from "../components/SocialMediaLinks";

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
    flex: "0 0 48%",
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
    scrollbarWidth: "none",
    marginTop: "2vh",
  };

  const skillsStyle = {
    flex: "0 0 80%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    overflow: "scroll",
    marginTop: "2vh",
  };

  const experienceContentStyle = {
    flex: "0 0 70%",
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
    marginRight: "25px",
  };

  const creditKarmaContent1 = {
    title: "Credit Karma",
    link: "https://www.intuit.com/intuitassist/",
    description: [
      {
        date: "May 2024 — Aug 2024",
        title: "Software Engineering Intern (Gen AI)",
        bullets: [
          "Created RPC endpoints allowing for suggested user prompts to be displayed to over 200m+ users providing them with relevant follow up prompts allowing them to continue engaging with the AI assistant.",
          "Decreased LLM response render latency by 15% by optimizing the backend call structure to more efficiently display resources.",
          "Incorporated novel integration tests into a CI/CD workflow using CircleCI ensuring that pre-existing RPC calls between several microservices function as expected.",
        ],
      },
    ],
  };

  const creditKarmaContent2 = {
    title: "Credit Karma",
    link: "https://www.creditkarma.com/ck-money/savings",
    description: [
      {
        date: "May 2023 — Aug 2023",
        title: "Software Engineering Intern (CK Money)",
        bullets: [
          "Implemented novel push/email notifications supporting the mobile check deposit feature to enhance the user experience for 600,000+ members during check rejection events via a Thrift + Kafka pipeline.",
          "Created an ETL pipeline from our real-time event queue to BigQuery to enhance analytics and BI processes around check deposit events.",
          "Utilized an internal experimentation platform to design statistically sound A-B testing for new notifications to determine impact on deposit re-submission success rates.",
        ],
      },
    ],
  };

  const nsbeUCFContent = {
    title: "NSBE UCF",
    link: "https://www.nsbeucf.org",
    description: [
      {
        date: "Aug 2023 — Present",
        title: "Developer",
        bullets: [
          "Developing an app that will allow the UCF chapter of the National Society of Black Engineers' members to stay updated on meeting information, keep track of their application and chapter status, and view convention information.",
          "Volunteering with the TORCH committee to bring engineering concepts to the attention of underprivileged children.",
        ],
      },
    ],
  };

  return (
    <div className="backgroundBox">
      <Navbar />
      <div className="innerBackground">
        <div style={leftDivStyle}>
          <h1 style={{ fontSize: "5vw", fontWeight: "800" }}>EXPERIENCE</h1>
          <div style={skillsStyle}>
            <div style={{ flex: "0 0 70%" }}>
              <ul className="skills">
                <li className="skillsLi">
                  <button type="button" onClick={() => toggleVisibility(0)}>
                    Languages
                  </button>
                  {isParagraphVisible[0] && (
                    <ul className="info-list">
                      <li>Java</li>
                      <li>Python</li>
                      <li>C</li>
                      <li>Scala</li>
                      <li>JavaScript</li>
                      <li>TypeScript</li>
                    </ul>
                  )}
                </li>
                <li className="skillsLi">
                  <button type="button" onClick={() => toggleVisibility(1)}>
                    Technologies
                  </button>
                  {isParagraphVisible[1] && (
                    <ul className="info-list">
                      <li>Git</li>
                      <li>Kafka</li>
                      <li>Thrift</li>
                      <li>BigQuery</li>
                      <li>CircleCI</li>
                      <li>React</li>
                      <li>Node.js</li>
                      <li>MongoDB</li>
                    </ul>
                  )}
                </li>
                {/* <li className="skillsLi">
                  <button type="button" onClick={() => toggleVisibility(2)}>
                    Philosophies
                  </button>
                  {isParagraphVisible[2] && (
                    <ul className="info-list">
                      <li>Scrum</li>
                      <li>Agile</li>
                      <li>Kanban</li>
                    </ul>
                  )}
                </li> */}
              </ul>
            </div>
          </div>
          <SocialMediaLinks />
        </div>
        <div style={rightDivStyle}>
          <ExperienceCard content={creditKarmaContent1} />
          <ExperienceCard content={creditKarmaContent2} />
          <ExperienceCard content={nsbeUCFContent} />
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
