import React from "react";
import "../App.css";

const ProjectPopup = ({ isOpen, onClose, title, stack, description }) => {
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h1 className="popup-title">{title}</h1>
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-description">
          <p>{description}</p>
        </div>
        <h3>Stack</h3>
        {stack.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ProjectPopup;
