import React from "react";
import socrates from "../../assets/characterpfps/socrates.png";
const SocratesHome = () => {
  return (
    <div className="socrates-home chatmain char-home" id="chatscroll">
      <h1>Alias: Graecian Gadfly</h1>
      <img src={socrates} className="pfp" alt="" />
      <h2>Real Name: Socrates Socrates</h2>
    </div>
  );
};

export default SocratesHome;
