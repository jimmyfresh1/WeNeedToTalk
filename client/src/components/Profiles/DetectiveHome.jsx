import React from "react";
import detective from "../../assets/characterpfps/detective.png";

const DetectiveHome = () => {
  return (
    <div className="detective-home chatmain char-home" id="chatscroll">
      <h1>Alias: AmericanSherlock</h1>
      <img src={detective} className="pfp" alt="" />
      <h2>Real Name: Asher Helms</h2>
    </div>
  );
};

export default DetectiveHome;
