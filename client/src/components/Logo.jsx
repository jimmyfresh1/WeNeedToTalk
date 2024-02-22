import React from "react";
import weNeedLogo from "../assets/welogo.png";
const Logo = () => {
  return (
    <div className="logo">
      <img src={weNeedLogo} className="logo" alt="chat logo" />

      <h1 className="syncopate-regular gradient">We Need To Talk</h1>
      <h2 className="pixelify-sans gradient">A James Fern Project!</h2>
      <h2 className="pixelify-sans gradient">Backgrounds by aconfuseddragon</h2>
    </div>
  );
};

export default Logo;
