import React from "react";
import "../App.css";

const ProjectPopup = ({ isOpen, onClose, description }) => {
  return (
    <div className={`popup-overlay ${isOpen ? "open" : ""}`} onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close-button" onClick={onClose}>
          &times;
        </button>
        <div className="popup-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopup;
