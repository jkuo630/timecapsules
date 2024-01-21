import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Camera.css";
import BackgroundOverlay from "./Animation/BackgroundOverlay";
import Mascot from "./Animation/Mascot";
import { Link } from "react-router-dom";

const videoConstraints = {
  width: 540,
  facingMode: "environment",
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capturePhoto = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setCapturedImage(imageSrc);
  };

  const retakePhoto = () => {
    setCapturedImage(null);
  };

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <BackgroundOverlay />
      <Mascot />
      <div className="photo-container">
        <h1>Take a photo of the label</h1>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter name of medication"
          className="inputStyle"
        />
        <div className="webcam">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/webp" // Set the screenshot format to image/webp
            videoConstraints={videoConstraints}
            mirrored={false}
          />
        </div>
        <div className="photo-buttons">
          <button onClick={capturePhoto}>Capture</button>
          <button onClick={retakePhoto}>Retake</button>

          <button>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/Results"
              state={{ hello: inputValue + " has been added!" }}
            >
              Submit
            </Link>
          </button>
        </div>
        {capturedImage && <img src={capturedImage} alt="Captured Screenshot" />}
      </div>
    </div>
  );
};

export default Camera;
