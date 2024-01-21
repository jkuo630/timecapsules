import React from "react";
import "./Results.css";
import { Link } from "react-router-dom";
import BackgroundOverlay from "./Animation/BackgroundOverlay";
import Mascot from "./Animation/Mascot";

const Results = () => {
  return (
    <div>
    <BackgroundOverlay />
      <Mascot />
    <div className="landing-container">
      <h1 className="landing-header">TimeCapsules</h1>
      <div className="landing-body">
      Take your capsules on time. Using Computer Vision and AI to innovate how we take medication.
      </div>
      <Link to="/LoginForm">
        <button type="submit">Start</button>
      </Link>
    </div>
    </div>
  );
};

export default Results;
