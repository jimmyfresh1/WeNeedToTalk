import React from "react";
import katarina from "../../assets/characterpfps/katarinagpt.png";
const KatarinaHome = () => {
  return (
    <div className="katarina-home chatmain char-home" id="chatscroll">
      <h1>Alias: Katarina Gepetto</h1>
      <img src={katarina} className="pfp" alt="" />
      <div>
        <h2>Real Name: That IS her real name</h2>
        <h3>...but her friends call her "Kat GPT"</h3>
      </div>
    </div>
  );
};

export default KatarinaHome;
