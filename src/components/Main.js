import React, { useState } from "react";
import resume from "../assets/sudhan.pdf";

function Main() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="main-content">
      <div className="text">
        <h1>
          Hi, I’m <br /> <span>Sudharshan</span>
        </h1>

        <p>
          A passionate <strong>Web Designer & Frontend Developer</strong> who
          loves creating clean, responsive, and user-friendly web interfaces.
          I focus on modern design principles and real-world usability.
        </p>

        <div className="home-actions">
          <button onClick={() => setShowResume(true)}>
            View Resume
          </button>

          <a
            href="https://github.com/Sudharshan1904"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
           <button> GitHub Profile</button>
          </a>
        </div>
      </div>

      
      {showResume && (
        <div className="resume-overlay">
          <div className="resume-modal">
            <button
              className="close-btn"
              onClick={() => setShowResume(false)}
            >
              ✕
            </button>

            <iframe
              src={resume}
              title="Sudhan Resume"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Main;
