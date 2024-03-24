import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import region from "../image/region.png";
import cityCenter from "../image/city_center.png";
import cityCrew from "../image/city_crew.png";
import city from "../image/city.png";
import "../page/map.css";

export default function Hexagon({ x, y, deposit, isCityCenter, owner, click }) {
  function setRegion() {
    if (isCityCenter && owner["name"] === localStorage.getItem("name")) {
      return cityCenter;
    } else if (
      owner != null &&
      owner["name"] === localStorage.getItem("name") &&
      x === owner["cityCrew_m"] &&
      y === owner["cityCrew_n"]
    ) {
      return cityCrew;
    } else if (
      owner != null &&
      owner["name"] === localStorage.getItem("name")
    ) {
      return city;
    } else {
      return region;
    }
  }

  return (
    <img
      className={y % 2 === 0 ? "low" : null}
      style={{ width: "10%" }}
      src={setRegion()}
      onClick={() => click(x, y, deposit, owner)}
    />
  );
}
