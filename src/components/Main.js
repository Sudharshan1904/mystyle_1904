import React from "react";
import designerImg from "../assets/designer.jpg";

function Main() {
  return (
    <div className="main">
      <div className="text">
        <h1>
          I am <br /> a Designer
        </h1>
        
        <button>View Resume</button>
      </div>

      <div className="image">
        <img src={designerImg} alt="designer" />
      </div>
    </div>
  );
}

export default Main;
