import React from "react";

function Project() {
  return (
    <div className="project-wrapper">
      <h1 className="project-title">My Projects</h1>

      {/* Project 1 */}
      <div className="project-card">
        <h2>MERN Stack Data Storage Web Application</h2>
        <p>
          Developed a full-stack web application that allows users to store
          personal data and task reminders efficiently.
        </p>
        <ul>
          <li>Built responsive UI using React.js</li>
          <li>Used MongoDB for storing and managing user data</li>
          <li>Implemented notification alerts for reminders</li>
        </ul>
        <p className="tech">Tech Stack: React, MongoDB, Node.js</p>
      </div>

      {/* Project 2 */}
      <div className="project-card">
        <h2>Smart IoT Traffic Signal System</h2>
        <p>
          Designed an IoT-based intelligent traffic control system that detects
          emergency vehicles and dynamically manages traffic signals.
        </p>
        <ul>
          <li>Emergency vehicle detection using sensors</li>
          <li>Automatic signal prioritization logic</li>
          <li>Simulated real-time urban traffic scenarios</li>
        </ul>
        <p className="tech">Tech Stack: IoT, Microcontrollers, Sensors</p>
      </div>

      {/* Project 3 */}
      <div className="project-card">
        <h2>IoT-Based Smart Energy Metering & Alert System</h2>
        <p>
          Developed a smart energy monitoring system for domestic electrical
          distribution using IoT and cloud technologies.
        </p>
        <ul>
          <li>Real-time power monitoring using ESP32</li>
          <li>AI-based power consumption prediction</li>
          <li>Automatic overload detection and alerts</li>
          <li>Manual and auto control via dashboard</li>
        </ul>
        <p className="tech">Tech Stack: ESP32, IoT, Cloud, Machine Learning</p>
      </div>
    </div>
  );
}

export default Project;
