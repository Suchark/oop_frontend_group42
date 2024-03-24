import "./waitUserJoin.css";
import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserJoinPage() {
  const navigate = useNavigate();
  const navigateToStart = () => {
    navigate("/startLoad");
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
        <div id="logoWait">
          <img src={logo} alt="Logo" />
        </div>
      </div>{" "}
      <div>
        {localStorage.getItem("host") === "true" && (
          <div className="startWait-button-container">
            <button className="startWait-button" onClick={navigateToStart}>
              START
            </button>
          </div>
        )}{" "}
      </div>
      <div>
        <div className="centered-box">
          <div className="empty-frame"></div>
        </div>
      </div>
    </div>
  );
}

export default UserJoinPage;
