import "./Home.css";
import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import React from "react";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const navigateToStart = () => {
    navigate("/start");
  };
  const navigateToJoin = () => {
    navigate("/join");
  };

  return (
    <div className="App">
      <div id="wallpaper">
        <img src={wallpaper} alt="Wallpaper" />
      </div>{" "}
      <div id="Clouds">
        <img src={Clouds} alt="Clouds" />
      </div>{" "}
      <div>
        <div id="logo">
          <img src={logo} alt="Logo" />
          <div className="start-button-container">
            <button className="start-button" onClick={navigateToStart}>
              START
            </button>
          </div>{" "}
          <div className="Join-button-container">
            <button className="Join-button" onClick={navigateToJoin}>
              JOIN
            </button>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default Home;
