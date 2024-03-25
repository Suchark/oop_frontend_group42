import "./Setting.css";
import wallpaper from "../image/wallpaper.jpg";
import Clouds from "../image/Cloud.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SettingPage() {
  const navigate = useNavigate();
  const [numPlayer, setNumPlayer] = useState("");
  const [map, setMap] = useState("");
  const [time, setTime] = useState("");

  const navigateToReset = () => {
    setNumPlayer("");
    setMap("");
    setTime("");
    localStorage.removeItem("numPlayer");
    localStorage.removeItem("map");
    localStorage.removeItem("time");
  };

  // Function to navigate to join page
  const navigateToConfirm = () => {
    localStorage.setItem("numPlayer", numPlayer);
    if (map == "ramdom") {
      const rand = Math.floor(Math.random() * 3);
      if (rand == 0) {
        setMap("7x7");
      } else if (rand == 1) {
        setMap("11x11");
      } else {
        setMap("15x15");
      }
    }
    const rowCol = map.split("x");
    localStorage.setItem("row", rowCol[0]);
    localStorage.setItem("col", rowCol[1]);
    localStorage.setItem("time", time);
    navigate("/Start");
  };

  return (
    <div className="App">
      <div id="wallpaper">
        <img src={wallpaper} alt="Wallpaper" />
      </div>{" "}
      <div id="Clouds" style={{ position: "fixed" }}>
        <img src={Clouds} alt="Clouds" />
      </div>{" "}
      <div style={{ position: "relative" }}>
        <div className="buttonSetting-container">
          <button className="buttonSetting-button">GAME PLAY SETTING</button>
        </div>{" "}
        <div className="playerString">
          <p className="playerHead">PLAYERS</p>
          <p className="playerTwo">
            <input
              type="radio"
              checked={numPlayer === 2}
              onClick={() => setNumPlayer(2)}
              id="radioisTwoPlayer"
            />{" "}
            2 PLAYER
          </p>

          <p className="playerThree">
            <input
              type="radio"
              checked={numPlayer === 3}
              onClick={() => setNumPlayer(3)}
              id="radioisThreePlayer"
            />{" "}
            3 PLAYER
          </p>
        </div>
        <div className="playerSpace">
          <p className="playerSpaceHead">PLAYSPACE</p>
          <p className="seven">
            <input
              type="radio"
              checked={map == "7x7"}
              onClick={() => setMap("7x7")}
              id="radioisSevenSpace"
            />{" "}
            7x7
          </p>

          <p className="eleven">
            <input
              type="radio"
              checked={map == "11x11"}
              onClick={() => setMap("11x11")}
              id="radioiselevenSpace"
            />{" "}
            11x11
          </p>

          <p className="fifteen">
            <input
              type="radio"
              checked={map == "15x15"}
              onClick={() => setMap("15x15")}
              id="radioisFifteenSpace"
            />{" "}
            15x15
          </p>

          <p className="random">
            <input
              type="radio"
              checked={map == "random"}
              onClick={() => setMap("random")}
              id="radioisRandomSpace"
            />{" "}
            RANDOM
          </p>

          <div className="playerTime">
            <p className="playerTimeHead">PLAYSPACE</p>
            <p className="fifteenMin">
              <input
                type="radio"
                checked={time == 15}
                onClick={() => setTime(15)}
                id="radioisFifteenSpace"
              />{" "}
              15 MINS
            </p>

            <p className="thirtyMin">
              <input
                type="radio"
                checked={time == 30}
                onClick={() => setTime(30)}
                id="radioisTimethirtyMin"
              />{" "}
              30 MINS
            </p>

            <p className="fortyfiveMin">
              <input
                type="radio"
                checked={time == 45}
                onClick={() => setTime(45)}
                id="radioisTimefortyfiveMin"
              />{" "}
              45 MINS
            </p>
            <p className="noLimitn">
              <input
                type="radio"
                checked={time === 0}
                onClick={() => setTime(0)}
                id="radioisTimenoLimitMin"
              />{" "}
              NO LIMIT
            </p>
          </div>
        </div>
      </div>
      <div className="Confirm-button-container">
        <button
          className="Confirm-button"
          onClick={navigateToConfirm}
          disabled={numPlayer === "" || map === "" || time === ""}
        >
          CONFIRM
        </button>
      </div>
      <div className="Reset-button-container">
        <button className="Reset-button" onClick={navigateToReset}>
          RESET
        </button>
      </div>
    </div>
  );
}

export default SettingPage;
