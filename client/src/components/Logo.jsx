import React from "react";
import weNeedLogo from "../assets/welogo.png";
import rotate from "../assets/rotate_earth.gif";
const Logo = () => {
  return (
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
  );
};

export default Logo;
