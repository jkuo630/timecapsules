import React, { useState } from "react";
import "./LoginForm.css";
// import PhoneNumberInput from "./PhoneNumberInput";
// import TimeInput from "./TimeInput";
import { FaBirthdayCake } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosAlarm } from "react-icons/io";
import { Link } from "react-router-dom";
import BackgroundOverlay from "./Animation/BackgroundOverlay";
import Mascot from "./Animation/Mascot";
import { IoPersonSharp } from "react-icons/io5";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    time: "",
  });

  const sendDataToBackend = async () => {
    try {
      // Assuming your Flask backend is running on http://localhost:5000
      const response = await axios.post(
        "http://localhost:8000/api/endpoint",
        formData
      );
      console.log("Response from backend:", response.data);
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="wrapper">
        <form action="">
          <h1>Set up your Time Capsules</h1>
          <div className="input-box">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <IoPersonSharp className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Cell Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <FaPhone className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Age"
              required
              name="age"
              value={formData.age}
              onChange={handleInputChange}
            />
            <FaBirthdayCake className="icon" />
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Enter 24-hour time (HH:mm)"
              required
              value={formData.time}
              name="time"
              onChange={handleInputChange}
            />
            <IoIosAlarm className="icon" />
          </div>
          <Link to="/WebCam">
            <button type="submit" onClick={sendDataToBackend}>
              Begin
            </button>
          </Link>
        </form>
      </div>
      <BackgroundOverlay />
      <Mascot />
    </div>
  );
};

export default LoginForm;
