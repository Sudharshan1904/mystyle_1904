import React from "react";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Sidebar />

      <div className="main">
        <Routes>
          {/* Default Home Page */}
          <Route path="/" element={<Main />} />

          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback: redirect any unknown route to Home */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
