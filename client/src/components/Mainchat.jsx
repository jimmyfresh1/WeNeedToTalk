import React from "react";
import Chattext from "./Chattext";
import Sidebar from "./Sidebar";
const Mainchat = () => {
  return (
    <div className="mainchat">
      <Sidebar />
      <Chattext />
    </div>
  );
};

export default Mainchat;
