import "./waitUserJoin.css";
import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import React from "react";

function UserJoinPage() {
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
        <div className="startWait-button-container">
          <button className="startWait-button">START</button>
        </div>{" "}
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
