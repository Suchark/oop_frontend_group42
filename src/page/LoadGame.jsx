import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./LoadGame.css";
import { useNavigate } from "react-router-dom";
import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import styled, { keyframes } from "styled-components";

function LoadGamePage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Map");
    }, 8 * 1000);
  }, []);
  return (
    <div className="App">
      <div id="wallpaper">
        <img src={wallpaper} alt="Wallpaper" />
      </div>
      <div id="Clouds">
        <img src={Clouds} alt="Clouds" />
      </div>
      <div id="Loadlogo">
        <img src={logo} alt="Logo" />
        {/* ตัวโหลดที่เป็นหลอดแนวนอน */}
        <div className="loading-tube-horizontal">
          <div className="liquid-horizontal"></div>
        </div>
      </div>
      <p id="Wait">
        <BouncingText>waiting for another player...</BouncingText>
      </p>
    </div>
  );
}

const bounceAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
  100% { transform: translateY(0); }
`;

const BouncingText = styled.span`
  display: inline-block;
  animation: ${bounceAnimation} 0.5s ease infinite;
`;

export default LoadGamePage;
