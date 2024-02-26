import React from "react";
import weNeedLogo from "../assets/welogo.png";

const ChatHeader = () => {
  return (
    <div className="header">
      <div className="logo gradient2">
        <h1 className="syncopate-regular gradient">
          We Need To <span id="talk">Talk</span>
        </h1>
        <img src={weNeedLogo} className="logo" alt="chat logo" />
        <h2 className="pixelify-sans gradient2 ">
          An Abisai Escobar and James Fern Production
        </h2>
        <h2 className="pixelify-sans ">Backgrounds by aconfuseddragon</h2>
      </div>
    </div>
  );
};

export default ChatHeader;
