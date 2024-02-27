import React from "react";
import granddad from "../../assets/characterpfps/dad.png";
const GranddadHome = () => {
  return (
    <div className="your-granddad-home chatmain char-home" id="chatscroll">
      <h1>Alias: HiHungryI'mDad</h1>
      <img src={granddad} className="pfp" alt="" />
      <h2>Real Name: Mmm, what was it again???</h2>
    </div>
  );
};

export default GranddadHome;
