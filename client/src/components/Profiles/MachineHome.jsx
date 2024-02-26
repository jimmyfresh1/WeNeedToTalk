import React from "react";
import machine from "../../assets/characterpfps/manmachine.png";
import MatrixConversation from "../Conversations/MachineConversation";
import { useState } from "react";

const MachineHome = () => {
  const [inConvo, setInConvo] = useState(false);

  return (
    <>
      {inConvo ? (
        <MatrixConversation />
      ) : (
        <div className="machine-home chatmain char-home" id="chatscroll">
          <h1>Alias: MAN IN THE MACHINE</h1>
          <img src={machine} alt="" className="pfp" />
          <h2>Real Name: What's even real anymore?</h2>
          <button onClick={() => setInConvo(true)}>enter convo </button>
        </div>
      )}
      ;
    </>
  );
};

export default MachineHome;
