import React from "react";
import "./LoginForm.css";
import PhoneNumberInput from "./PhoneNumberInput";
import TimeInput from "./TimeInput";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";
import { Link } from "react-router-dom";
import BackgroundOverlay from "./Animation/BackgroundOverlay";
import Mascot from "./Animation/Mascot";
import { IoPersonSharp } from "react-icons/io5";

const LoginForm = () => {
  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h1>Set up your Time Capsules</h1>
          <div className="input-box">
            <input type="text" placeholder="Name" required />
            <IoPersonSharp className="icon" />
          </div>
          <div className="input-box">
            <PhoneNumberInput />
            <FaPhone className="icon" />
          </div>
          <div className="input-box">
            <input type="number" placeholder="Age" min="1" max="120" required />
            <FaBirthdayCake className="icon" />
          </div>
          <div className="input-box">
            <TimeInput />
            <IoIosAlarm className="icon" />
          </div>
          <Link to="/WebCam">
            <button type="submit">Begin</button>
          </Link>
        </form>
      </div>
      <BackgroundOverlay />
      <Mascot />
    </div>
  );
};

export default LoginForm;
