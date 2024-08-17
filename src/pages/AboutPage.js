import React, { useEffect, useRef, useState, useCallback } from "react";
import "../App.css";
import Navbar from "../components/NavBar";
import SocialMediaLinks from "../components/SocialMediaLinks";

function AboutPage() {
  const scrollRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const timeoutRef = useRef(null);

  // Memoize the resetScroll function
  const resetScroll = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsScrolling(false);
    timeoutRef.current = setTimeout(() => setIsScrolling(true), 5000);
  }, []);

  useEffect(() => {
    const handleUserInteraction = () => resetScroll();

    window.addEventListener("mousemove", handleUserInteraction);
    window.addEventListener("mousedown", handleUserInteraction);
    window.addEventListener("scroll", handleUserInteraction);

    return () => {
      window.removeEventListener("mousemove", handleUserInteraction);
      window.removeEventListener("mousedown", handleUserInteraction);
      window.removeEventListener("scroll", handleUserInteraction);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [resetScroll]);

  useEffect(() => {
    if (isScrolling) {
      const scrollInterval = setInterval(() => {
        if (scrollRef.current) {
          if (scrollDirection === "down") {
            scrollRef.current.scrollTop += 1;
            if (
              scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
              scrollRef.current.scrollHeight
            ) {
              setScrollDirection("up");
            }
          } else {
            scrollRef.current.scrollTop -= 1;
            if (scrollRef.current.scrollTop <= 0) {
              setScrollDirection("down");
            }
          }
        }
      }, 10);

      return () => clearInterval(scrollInterval);
    }
  }, [isScrolling, scrollDirection]);

  useEffect(() => {
    resetScroll();
  }, [resetScroll]);

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
    flex: "0 0 75%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
  };

  const aboutContentStyle = {
    flex: "0 0 70%",
    display: "flex",
    flexDirection: "column",
    textAlign: "right",
  };

  return (
    <div className="backgroundBox">
      <Navbar />
      <div className="innerBackground">
        <div style={leftDivStyle}>
          <h1 style={{ fontSize: "5vw", fontWeight: "800" }}>ABOUT</h1>
          <div style={descriptionStyle}>
            <div style={{ flex: "0 0 85%" }}>
              <p
                style={{
                  fontSize: "2.2vw",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Hey! I’m a student studying computer science at the University
                of Central Florida
              </p>
              <p
                style={{
                  fontSize: "1.2vw",
                  fontWeight: "bold",
                  marginBottom: "1rem",
                }}
              >
                Born in Queens, NY but raised in Fort Lauderdale, FL I have
                always had a love for learning and solving problems. I started
                seriously applying this love for learning to computer science
                concepts right before college. Since that point I have worked
                every day to get better with my problem solving, critical
                thinking, communication skills, and teamwork. I'm committed to
                putting in effort to learn through work experience and am
                looking forward to growing as I move forward.
              </p>
            </div>
          </div>
          <SocialMediaLinks />
        </div>
        <div style={rightDivStyle} ref={scrollRef}>
          <div style={{ flex: "0 0 8%" }}></div>
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
                <li>Competitive Programming</li>
                <li>Rock Climbing </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
