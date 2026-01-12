import React, { useState } from "react";
import resume from "../assets/sudhan.pdf";

function Main() {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="main">
      <div className="text">
        <h1>
          I am <br /> a Designer
        </h1>

        <button onClick={() => setShowResume(true)}>
          View Resume
        </button>
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
