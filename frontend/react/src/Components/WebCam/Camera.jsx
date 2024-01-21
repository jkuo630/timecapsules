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

  return (
    <div className="container">
      <h1>Take a picture of the bottle!</h1>
      <Webcam
        ref={webcamRef}
        audio={false}
        screenshotFormat="image/webp" // Set the screenshot format to image/webp
        videoConstraints={videoConstraints}
        mirrored={false}
      />
      <button onClick={capturePhoto}>Capture</button>
      <button onClick={retakePhoto}>Retake</button>
      <button onClick={retakePhoto}>Confirm</button>
      {capturedImage && (
        <img
          className="captured"
          src={capturedImage}
          alt="Captured Screenshot"
        />
      )}
    </div>
  );
};

export default Camera;
