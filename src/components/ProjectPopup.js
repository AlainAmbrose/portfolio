import React from "react";
import "../App.css";

const ProjectPopup = ({ isOpen, onClose, content }) => {
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="popup-title">{content.title}</h1>
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
        <div>
          <p className="project-description">{content.description}</p>
        </div>
        <h3>Stack</h3>
        {content.stack.map((item, index) => (
          <p
            key={index}
            style={{
              fontSize: "1.2vw",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ProjectPopup;
