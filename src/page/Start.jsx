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
        <div id="logoStart">
          <img src={logo} alt="Logo" />
        </div>
        <div className="name-box">
          <input
            className="nameinput-container"
            name="name"
            placeholder="INPUT YOUR NAME . . ."
            onChange={(event) => handleNameChange(event.target.value)}
          />
        </div>
      </div>
      <div className="JoinStart-button-container">
        <button className="JoinStart-button" onClick={navigateToJoin}>
          JOIN
        </button>
      </div>{" "}
    </div>
  );
}

export default StartPage;
