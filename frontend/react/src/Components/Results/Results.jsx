import React from "react";
import "./Results.css";
import { Link } from "react-router-dom";
import BackgroundOverlay from "./Animation/BackgroundOverlay";
import Mascot from "./Animation/Mascot";
import { Checkmark } from "react-checkmark";

const Results = () => {
  return (
    <div>
      <BackgroundOverlay />
      <Mascot />
      <div className="success-box">
        <Checkmark size="100px" color="#EA8A8A" />
        <h1>Success!</h1>
        <div>
          Your TimeCapsule was successfully created and the medication has been
          added to your phone number. Please ensure text notifications are on.
        </div>
        <div className="sucess-buttons">
        <button>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/webcam"
          >
            Add another medication
          </Link>
        </button>
        <button>
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to="/"
          >
            Home
          </Link>
        </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
