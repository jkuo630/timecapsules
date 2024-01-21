import React, { useEffect } from 'react';
import KUTE from 'kute.js';
import './BackgroundOverlay.css';


const BackgroundOverlay = () => {
  useEffect(() => {
    const tween = KUTE.fromTo(
      '#blob1',
      { path: '#blob1' },
      { path: '#blob2' },
      { repeat: 999, duration: 3000, yoyo: true }
    );
    tween.start();
  }, []);

  return (
    <div className="background-overlay">
      <svg
        id="visual"
        viewBox="0 0 900 600"
        width="450"
        height="300"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <g transform="translate(424.27247525536524 293.67311088156885) ">
          <path
            id="blob1"
            d="M167.3 -163C213.5 -121.2 245.2 -60.6 240.8 -4.5C236.3 51.6 195.6 103.2 149.4 153.2C103.2 203.2 51.6 251.6 8.1 243.5C-35.4 235.4 -70.7 170.7 -102.2 120.7C-133.7 70.7 -161.4 35.4 -177.4 -16C-193.4 -67.4 -197.8 -134.8 -166.3 -176.7C-134.8 -218.5 -67.4 -234.7 -3.4 -231.3C60.6 -227.9 121.2 -204.8 167.3 -163"
            fill="#222831"
          ></path>
        </g>{' '}
        <g
          transform="translate(473.05591687712337 317.4145693751798)"
          style={{ visibility: 'hidden' }}
        >
          <path
            id="blob2"
            d="M166.4 -189.3C191.4 -141.4 170.7 -70.7 162.2 -8.5C153.7 53.7 157.5 107.5 132.5 147.5C107.5 187.5 53.7 213.7 -7.2 220.9C-68.1 228.1 -136.2 216.2 -176.1 176.2C-215.9 136.2 -227.5 68.1 -223.8 3.7C-220.1 -60.8 -201.3 -121.6 -161.5 -169.5C-121.6 -217.3 -60.8 -252.1 4.9 -257.1C70.7 -262 141.4 -237.1 166.4 -189.3"
            fill="#222831"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default BackgroundOverlay;
