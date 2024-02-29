import wallpaper from "../image/wallpaper.jpg";
import logo from "../image/LOGO.png";
import Clouds from "../image/Cloud.png";
import React from "react";
import "./Map.css";

return MapPage(
  <div className="App">
    <div id="wallpaper">
      <img src={wallpaper} alt="Wallpaper" />
    </div>{" "}
    <div id="Clouds">
      <img src={Clouds} alt="Clouds" />
    </div>{" "}
    <div>
      <div id="logoMap">
        <img src={logo} alt="Logo" />
      </div>
    </div>
  </div>
);

export default MapPage;
