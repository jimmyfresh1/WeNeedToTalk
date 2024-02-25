import React from "react";
import weNeedLogo from "../assets/welogo.png";

const ChatHeader = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1 className="syncopate-regular gradient">
          We Need To <span id="talk">Talk</span>
        </h1>
        <img src={weNeedLogo} className="logo" alt="chat logo" />
        <h2 className="pixelify-sans gradient" id="credit1">
          An Abisai Escobar and James Fern Production
        </h2>
        <h2 className="pixelify-sans gradient" id="credit2">
          Backgrounds by aconfuseddragon
        </h2>
      </div>
    </div>
  );
};

export default ChatHeader;
