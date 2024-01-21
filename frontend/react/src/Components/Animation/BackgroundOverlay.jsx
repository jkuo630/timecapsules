import React, { useEffect } from "react";
import KUTE from "kute.js";
import "./BackgroundOverlay.css";
import Mascot from "./Mascot";

const BackgroundOverlay = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      "#blob1",
      { path: "#blob1" },
      { path: "#blob2" },
      { repeat: 999, duration: 2500, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div className="background-overlay">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width= "200%"
        height= "200%"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(455.5037124126003 299.3593338771859)">
          <path
            id="blob1"
            d="M135.7 -180.6C183.3 -152.3 234.3 -122.5 249.7 -80C265 -37.5 244.7 17.7 221.2 66.2C197.6 114.7 170.8 156.4 133.4 188.1C96 219.8 48 241.4 1.4 239.5C-45.3 237.6 -90.5 212.3 -136.3 183.3C-182.1 154.4 -228.5 121.8 -250.6 76.2C-272.6 30.5 -270.4 -28.3 -248.2 -75.7C-226 -123.1 -183.8 -159 -139.1 -188.3C-94.4 -217.6 -47.2 -240.3 -1.6 -238.2C44.1 -236 88.2 -209 135.7 -180.6"
            fill="#222831"
          ></path>
        </g>
        <g transform="translate(468.3213411744043 284.46446649422535)"
           style={{ visibility: "hidden" }}>
          <path
           id="blob2"
            d="M136.1 -184.3C174.6 -159.3 202.9 -117.2 216.5 -71.3C230.2 -25.3 229.2 24.4 216.7 72.8C204.3 121.2 180.3 168.2 142.3 204C104.2 239.8 52.1 264.4 2.4 261C-47.2 257.7 -94.4 226.3 -136 191.6C-177.5 157 -213.3 119 -236.5 71.3C-259.6 23.6 -270.1 -33.8 -258 -87.7C-245.8 -141.7 -211.1 -192.2 -164.3 -214.5C-117.6 -236.8 -58.8 -230.9 -5 -224C48.8 -217.2 97.6 -209.3 136.1 -184.3"
            fill="#222831"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default BackgroundOverlay;
