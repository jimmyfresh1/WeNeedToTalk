import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Chatbox from "./components/Chatbox";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <Chatbox />
      <div className="blocktest"></div>
    </>
  );
}

export default App;
