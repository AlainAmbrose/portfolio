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
    <ul className="navigation">
      <li className="navLi" style={{ float: "left", marginRight: "1vw" }}>
        <button
          type="button"
          onClick={(event) => handleNavClick(event, "")}
          style={{ fontSize: "1.5vw" }}
        >
          Home
        </button>
      </li>
      <li className="navLi" style={{ float: "left", marginRight: "1vw" }}>
        <button
          type="button"
          onClick={(event) => handleNavClick(event, "about")}
          style={{ fontSize: "1.5vw" }}
        >
          About
        </button>
      </li>
      <li className="navLi" style={{ float: "left", marginRight: "1vw" }}>
        <button
          type="button"
          onClick={(event) => handleNavClick(event, "projects")}
          style={{ fontSize: "1.5vw" }}
        >
          Projects
        </button>
      </li>
      <li className="navLi" style={{ float: "left", marginRight: "1vw" }}>
        <button
          type="button"
          onClick={(event) => handleNavClick(event, "experience")}
          style={{ fontSize: "1.5vw" }}
        >
          Experience
        </button>
      </li>
    </ul>
  );
};

export default Navbar;
