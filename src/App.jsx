import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Start from "./page/Start";
import UserJoinPage from "./page/waitUserJoin";
import LoadGame from "./page/LoadGame";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/start" element={<Start />} />
        <Route path="/join" element={<UserJoinPage />} />
        <Route path="/Join" element={<LoadGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
