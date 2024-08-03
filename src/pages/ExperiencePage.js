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
import React, { useState, useRef, useEffect } from "react";
import Navbar from "../components/NavBar";

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

  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [timeoutId, setTimeoutId] = useState(null);

  const resetScroll = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsScrolling(false);
    setTimeoutId(setTimeout(() => setIsScrolling(true), 5000));
  };

  useEffect(() => {
    const handleUserInteraction = () => resetScroll();

    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("mousedown", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("mousedown", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
    };
  }, [timeoutId]);

  useEffect(() => {
    let scrollInterval;
    if (isScrolling) {
      scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          if (scrollDirection === "down") {
            scrollRef.current.scrollTop += 1;
            if (
              scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
              scrollRef.current.scrollHeight
            ) {
              setTimeout(() => {
                setScrollDirection("up");
              }, 2000);
            }
          } else {
            scrollRef.current.scrollTop -= 1;
            if (scrollRef.current.scrollTop <= 0) {
              setTimeout(() => {
                setScrollDirection("down");
              }, 2000);
            }
          }
        }
      }, 10);
    } else if (scrollInterval) {
      clearInterval(scrollInterval);
    }

    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isScrolling, scrollDirection]);

  useEffect(() => {
    resetScroll();
  }, []);

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
    overflow: "auto",
    scrollbarWidth: "none",
  };

  const skillsStyle = {
    flex: "0 0 90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    overflow: "scroll",
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
      <div className="pageHeader">
        <h1 style={{ fontSize: "5vw", fontWeight: "800", flex: "0 0 30%" }}>
          EXPERIENCE
        </h1>
        <Navbar />
      </div>
      <div className="innerBackground">
        <div style={leftDivStyle}>
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
                      <li>Kubernetes</li>
                      <li>JavaScript</li>
                    </ul>
                  )}
                </li>
                <li className="skillsLi">
                  <button type="button" onClick={() => toggleVisibility(1)}>
                    Technologies
                  </button>
                  {isParagraphVisible[1] && (
                    <ul className="info-list">
                      <li>Kafka</li>
                      <li>Kubernetes</li>
                      <li>Git</li>
                      <li>BigQuery</li>
                      <li>GCP</li>
                    </ul>
                  )}
                </li>
                <li className="skillsLi">
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
        <div style={rightDivStyle} ref={scrollRef}>
          <div style={experienceContentStyle}>
            <h1>Credit Karma</h1>
            <section id="Credit-Karma">
              <ul className="info-list">
                <li>
                  <h3 style={{ margin: "0" }}>Software Engineering Intern</h3>
                </li>
                <li>
                  <h4 style={{ margin: "0" }}>May 2024 - Aug 2024</h4>
                </li>
                <li>
                  Created RPC endpoints allowing for suggested user prompts to
                  be displayed to over 200m+ users providing them with relevant
                  follow up prompts allowing them to continue engaging with the
                  AI assistant.
                </li>
                <li>
                  Decreased LLM response render latency by 15% by optimizing the
                  backend call structure to more efficiently display resources.
                </li>
                <li>
                  Incorporated novel integration tests into a CI/CD workflow
                  using CircleCI ensuring that pre-existing RPC calls between
                  several microservices function as expected.
                </li>
                <li>
                  <h3 style={{ margin: "0" }}>Software Engineering Intern</h3>
                </li>
                <li>
                  <h4 style={{ margin: "0" }}>May 2024 - Aug 2024</h4>
                </li>
                <li>
                  Implemented novel push/email notifications supporting the
                  mobile check deposit feature to enhance the user experience
                  for 600,000+ members during check rejection events via a
                  Thrift + Kafka pipeline{" "}
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
                  National Society of Black Engineers' members to stay updated
                  on meeting information, keep track of their application and
                  chapter status, and view convention information{" "}
                </li>
                <li>
                  Volunteer with the TORCH committee to bring engineering
                  concepts to the attention of underprivileged children
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperiencePage;
