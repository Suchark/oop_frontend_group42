import "./Start.css";
import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

function StartPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const handleNameChange = (value) => {
    setName(value);
  };
  const navigateToJoin = () => {
    localStorage.setItem("name", name);
    navigate("/join");
  };

  const navigateToSetting = () => {
    localStorage.setItem("host", true);
    navigate("/Setting");
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
        <div id="logoStart">
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <div className="name-box">
            <input
              className="nameinput-container"
              name="name"
              placeholder="INPUT YOUR NAME . . ."
              onChange={(event) => handleNameChange(event.target.value)}
            />
            {/* เดี๋ยวกลับมาแก้นะจ้ะ */}
            {/ /g.test(name) && <p>ห้ามใส้เว้นวรรคนะ</p>}
          </div>
        </div>
      </div>
      <div className="JoinStart-button-container">
        <button
          className="JoinStart-button"
          onClick={navigateToJoin}
          disabled={
            / /g.test(name) || !name.length || !localStorage.getItem("time")
          }
        >
          JOIN
        </button>
      </div>{" "}
      <div className="setting-button-container">
        <button className="setting-button" onClick={navigateToSetting}>
          SETTING
        </button>
      </div>
    </div>
  );
}

export default StartPage;
