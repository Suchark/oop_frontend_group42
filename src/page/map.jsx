import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import React, { useEffect, useState } from "react";
import "./map";
import Hexagon from "../componant/hexagon";
import { useNavigate } from "react-router-dom";
import AceEditor from "react-ace";
import CountdownTimer from "./CountdownTimer";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-dracula";
import "ace-builds/src-noconflict/ext-language_tools";

function MapPage() {
  const [territory, setTerritory] = useState([[]]);
  const [plan, setPlan] = useState("");
  const navigate = useNavigate();
  const [timeMin, setTimeMin] = useState(localStorage.getItem("time"));
  const [timeSec, setTimeSec] = useState(0);
  const [startingTimestamp, setStartingTimestamp] = useState(Date.now());
  const [clickChange, setClickChange] = useState(false);

  useEffect(() => {
    if ((clickChange && timeMin !== 0) || timeSec !== 0) {
      if (!localStorage.getItem("timerTimestamp")) {
        const newTimestamp = Date.now() + timeMin * 60 * 1000 + timeSec * 1000;
        setStartingTimestamp(newTimestamp);
        localStorage.setItem("timerTimestamp", newTimestamp);
      }
    }
  }, [clickChange, timeMin, timeSec]);

  const handleChangePlan = () => {
    setClickChange(true);
    setStartingTimestamp(Date.now());
  };
  const handleConfirmPlan = () => {
    setClickChange(false);
    localStorage.removeItem("timerTimestamp");
  };

  const [depositPosition, setDepositPosition] = useState({
    x: 0,
    y: 0,
    deposit: 0,
    owner: null,
  });
  useEffect(() => {
    let temp = [];
    for (let i = 0; i < 15; i++) {
      temp[i] = [];
      for (let j = 0; j < 15; j++) {
        temp[i][j] = {
          row: i,
          col: j,
          deposit: 0.0, //เงินในแต่ละช่อง
          r: 5,
          interest: (0.0 * 5) / 100.0,
          cityCenter: i === 5 && j === 5 ? true : false,
          owner: {
            name:
              i === 5 && j === 5
                ? "123"
                : Math.floor(Math.random() * 2) == 0
                ? "123"
                : "000",
            cityCenter_m: 5,
            cityCenter_n: 5,
            cityCrew_m: 4,
            cityCrew_n: 3,
            budget: 10000,
            lose: false,
          },
        };
      }
    }
    setTerritory(temp);
  }, []);

  const click = (x, y, deposit, owner) => {
    x++;
    y++;
    setDepositPosition({ x, y, deposit, owner });
  };

  return (
    <div className="Map">
      <div id="Clouds" style={{ position: "fixed" }}>
        <img src={Clouds} alt="Clouds" />
      </div>{" "}
      <div className="map-page">
        <div className="topBar">
          <img src={logo} style={{ width: "14%" }} alt="Logo" />
          <p className=" User-Join-name">User Join :</p>
        </div>
        <div className="container-content">
          <div className="map-show-regions">
            {territory.map((row, rowIndex) => (
              <div className="rowcss" key={rowIndex}>
                {row.map((col, colIndex) => (
                  <Hexagon
                    key={`${rowIndex}${colIndex}`}
                    x={territory[rowIndex][colIndex]["row"]}
                    y={territory[rowIndex][colIndex]["col"]}
                    deposit={territory[rowIndex][colIndex]["deposit"]}
                    isCityCenter={territory[rowIndex][colIndex]["cityCenter"]}
                    owner={territory[rowIndex][colIndex]["owner"]}
                    click={click}
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="container-plan">
            {/* budget รวมของแต่ละผู้เล่นคนนี้ */}
            <div className="budget-box">BUDGET : {0}</div>
            <div className="plan">
              <p>USER PLAN :</p>
              {clickChange ? (
                <CountdownTimer
                  countdownTimestampMs={startingTimestamp}
                  minutes={timeMin}
                  seconds={timeSec}
                />
              ) : (
                <p>
                  {timeMin < 10 ? `0${timeMin}` : timeMin}:
                  {timeSec < 10 ? `0${timeSec}` : timeSec}
                </p>
              )}
            </div>
            <div className="inputplan">
              <AceEditor
                height="100%"
                name="plan"
                mode="java"
                theme="dracula"
                editorProps={{ $blockScrolling: true }}
                fontSize="15px"
                setOptions={{
                  fontFamily: "'JetBrains Mono', monospace",
                  enableBasicAutocompletion: true,
                  enableLiveAutocompletion: true,
                  enableSnippets: true,
                  enableMultiselect: true,
                }}
                onChange={(event) => setPlan(event)}
              />
            </div>
            <div className="button-container">
              <button
                className="Change-button"
                onClick={() => handleChangePlan()}
              >
                CHANGE
              </button>
              <button
                className="End-button"
                onClick={() => handleConfirmPlan()}
              >
                CONFIRM
              </button>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
export default MapPage;
