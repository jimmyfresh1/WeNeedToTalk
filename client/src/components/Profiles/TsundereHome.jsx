import React from "react";
import tsunderepfp from "../../assets/characterpfps/tsundere.png";
import { useState } from "react";
import TsundereConversation from "../Conversations/TsundereConversation";
const TsundereHome = () => {
  const [inConvo, setInConvo] = useState(false);

  return (
    <>
      {inConvo ? (
        <TsundereConversation />
      ) : (
        <div className="tsundere-home chatmain char-home" id="chatscroll">
          <h1>Alias: MaterialGirl95</h1>
          <img src={tsunderepfp} className="pfp" alt="" />
          <h2>
            Real Name: <br></br>You're not that close yet!
          </h2>
          <button onClick={() => setInConvo(true)}>enter convo </button>
        </div>
      )}
    </>
  );
};

export default TsundereHome;
