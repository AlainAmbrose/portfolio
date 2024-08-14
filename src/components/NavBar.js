import "../App.css";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ currentLocation }) => {
  const navigate = useNavigate();
  const handleNavClick = (event, location) => {
    event.preventDefault();
    navigate(`/${location}`);
  };

  return (
    <div>
      <div className="navbar">
        <ul className="navigation">
          <li className="navbarLi" style={{ float: "left", margin: ".5vw" }}>
            <button
              type="button"
              onClick={(event) => handleNavClick(event, "")}
              style={{ fontSize: "1.5vw" }}
            >
              Home
            </button>
          </li>
          <li className="navbarLi" style={{ float: "left", margin: ".5vw" }}>
            <button
              type="button"
              onClick={(event) => handleNavClick(event, "about")}
              style={{ fontSize: "1.5vw" }}
            >
              About
            </button>
          </li>
          <li className="navbarLi" style={{ float: "left", margin: ".5vw" }}>
            <button
              type="button"
              onClick={(event) => handleNavClick(event, "projects")}
              style={{ fontSize: "1.5vw" }}
            >
              Projects
            </button>
          </li>
          <li className="navbarLi" style={{ float: "left", margin: ".5vw" }}>
            <button
              type="button"
              onClick={(event) => handleNavClick(event, "experience")}
              style={{ fontSize: "1.5vw" }}
            >
              Experience
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
