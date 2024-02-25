import React from "react";
import weNeedLogo from "../assets/welogo.png";

const ChatHeader = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={weNeedLogo} className="logo" alt="chat logo" />

        <h1 className="syncopate-regular gradient">We Need To Talk</h1>
        <div className="credits">
          <h2 className="pixelify-sans gradient">
            An Abisai Escobar and James Fern Production
          </h2>
          <h2 className="pixelify-sans gradient">
            Backgrounds by aconfuseddragon
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
