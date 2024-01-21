import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./Camera.css";

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
    <div className="container">
      <h1>Take a picture of the bottle!</h1>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/webp" // Set the screenshot format to image/webp
        videoConstraints={videoConstraints}
        mirrored={false}
      />
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={retakePhoto}>Retake</button>
      <button>Confirm</button>
      {capturedImage && <img src={capturedImage} alt="Captured Screenshot" />}
    </div>
  );
};

export default Camera;
