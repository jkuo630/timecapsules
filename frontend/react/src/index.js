import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import WebCam from "./Components/WebCam/WebCam";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./Components/LandingPage/LandingPage"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/webcam" element={<WebCam />} />
      <Route path="/loginform" element={<App />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
