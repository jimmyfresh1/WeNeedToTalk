import React from "react";
import tsundere from "../assets/characterpfps/tsundere.png";
import dad from "../assets/characterpfps/dad.png";
import detective from "../assets/characterpfps/detective.png";
import alessia from "../assets/characterpfps/alessia.png";
import friend from "../assets/characterpfps/friend.png";
import Ted from "../assets/characterpfps/TedNaddakiller.png";
import katarina from "../assets/characterpfps/katarinagpt.png";
import manmachine from "../assets/characterpfps/manmachine.png";
import { useContext, useState } from "react";
import { PromptContext } from "../App.jsx";

import {
  tsunderePrompt,
  tsunderePrepopulation,
  matrixPrompt,
  matrixPrepopulation,
} from "../services/prompts.jsx";

const CharacterSelect = () => {
  const { prompt, setPrompt } = useContext(PromptContext);
  const [val, setVal] = useState("");
  const promptHandler = (character) => {
    setVal(character);

    if (val == "tsundere") {
      setPrompt([tsunderePrompt, tsunderePrepopulation]);
    }
    if (val == "machine") {
      setPrompt([matrixPrompt, matrixPrepopulation]);
    }
  };

  return (
    <div className="character-selector">
      <img
        src={tsundere}
        onClick={(e) => promptHandler("tsundere")}
        className="char1"
        alt=""
      />
      <img src={alessia} className="char2" alt="" />
      <img src={detective} className="char3" alt="" />
      <img src={Ted} className="char4" alt="" />
      <img src={katarina} className="char5" alt="" />
      <img
        src={manmachine}
        onClick={(e) => promptHandler("machine")}
        className="char6"
        alt=""
      />
      <img src={dad} className="char7" alt="" />
      <img src={friend} className="char8" alt="" />
    </div>
  );
};

export default CharacterSelect;
