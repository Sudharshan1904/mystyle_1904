import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <img src={profileImg} alt="profile" />
      <h2>Sudharshan</h2>
      <p className="role">Web Designer</p>

      <ul className="menu">
       <li><Link to="/">Home</Link></li>
<li><Link to="/about">About</Link></li>

       
     
      
        
       
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
