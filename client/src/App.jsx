import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/Chatbox";
import autumnFeels from "./assets/autumn-feels.gif";
import parsec from "./assets/parsec2.png";
import "./App.css";
import "./index.css";

function App() {
  return (
    <div id="root" className="backgroundImage aesthetic-effect-crt">
      {/* <img src={autumnFeels} alt="" /> */}
      <Chatbox />
      <img className="icon" src={parsec} alt="" />
      <div className="aesthetic-effect-crt"></div>
    </div>
  );
}

export default App;
