import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Start from "./page/Start";
import UserJoinPage from "./page/waitUserJoin";
import LoadGame from "./page/LoadGame";
import Setting from "./page/Setting";
import MapPage from "./page/map";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/join" element={<UserJoinPage />} />

        <Route path="/startload" element={<LoadGame />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
