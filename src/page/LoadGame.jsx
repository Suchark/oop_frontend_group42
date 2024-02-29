import { Link } from "react-router-dom";
import "./LoadGame.css";
import LoadGame from "./LoadGame";
import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";

function LoadGamePage() {
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
        </div>
        <p id="Wait">waiting for another player...</p>
      </div>
    </div>
  );
}

export default LoadGamePage;
