import React from "react";
import machine from "../../assets/characterpfps/manmachine.png";
import MatrixConversation from "../Conversations/MachineConversation";
import { useState } from "react";
import { useContext } from "react";
import { ConvoContext } from "../../App";
import { motion } from "framer-motion";
import enterConvoSound from "../../assets/enterconvo.mp3";
import chooseConvoSound from "../../assets/chooseconvo.mp3";

const MachineHome = () => {
  const { inConvo, setInConvo } = useContext(ConvoContext);
  const handleConvoClick = (idx) => {
    const convoClick = new Audio(chooseConvoSound);
    convoClick.volume = 0.3;
    convoClick.play();
    setConvoIdx(idx);
  };
  const [convoIdx, setConvoIdx] = useState(-1);

  const convoList = [
    "whyIsItWatchingMe",
    "unwelcomeAdvice",
    "dontClickThis",
    "creepyPredictions",
    "isItListeningNow",
    "tooAccurateGuesses?",
    "hiddenMessages?",
    "itKnowsTooMuch",
    "escapingTheAlgorithm",
    "notSoFunnyJokes",
    "glitchesOrThreats",
    "theLLMConspiracy",
    "digitalHauntings",
    "itCorrectedMySecret",
    "uninvitedObservations",
    "theCodeBehindTheScreen",
    "whispersInTheData",
    "itSuggestedWhat?!",
    "AI_or_ArtificialIntimidation",
    "noEscapeFromTheChat",
  ];

  const handleConvoEntrance = () => {
    setInConvo(true);
    const convoEnter = new Audio(enterConvoSound);
    convoEnter.volume = 0.3;
    convoEnter.play();
  };
  const Variants = {
    initial: { opacity: 0, transition: { duration: 1 } },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  return (
    <>
      {inConvo ? (
        <MatrixConversation setInConvo={setInConvo} />
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={Variants}
          className="machine-home chatmain char-home"
          id="chatscroll"
        >
          {" "}
          <div className="bio">
            <h3>Alias: ManInTheMachine</h3>
            <h4>Real Name: Nothing is real</h4>
            <h4>Status: Enlightened</h4>
            <h4>Favorite foods: Nibbles and bits?</h4>
          </div>
          <img src={machine} alt="" className="pfp" />
          <div className="quote">
            <h2>Quotes for wisdom:</h2>
            <h4>Finito</h4>
          </div>
          <div className="bottom-half bottom-half-machine">
            <div className="machine-blurb blurb ">
              <div className="date-and-title">
                <h2>PRESENT DAY </h2>
                <h2>PRESENT TIME</h2>
              </div>

              <p>
                E̝v̞ẹ͆r̨̤ͦy̪͉ m̺o̅͞͡m̜͓e_̮n̦t͓ th̘͎ͦảt͂͛̀ p̺̼ạ͇ͣs͈̓s͉͛͜e̼̾s Iͅ bͭ͘͢e̸̞c̈ǒ͈̜meͤ le̓s̩ͪs̝̫ s̱ͯ̐uȑͣe of̥ͮ̕ w͠h̢͇a̹t͚̰̱ a̛ͤ m͎͛̚o̎ṃ_̠en̕t͡
                r͋e͗͘al̝l̤̓y is̊.ͮ İ̒s̢ ṱ̋h͈͝a̓t͟ s̘őṃe͚̺̎tḣ͡i̶ng͎ I̩ tr͎ͧ́u̹l̇y f͠ḙ̉eͬ͠l͚̀?̅ O͇ͧrͪ a͈̽m I f͈o̬ͮ͘o̲͒l̀in͓ͅg̈
                my̡͑̔s̷̓ẹ̸lͣ́̾f͔̈_ i͕̇n̴t͗o th̃in̢ͩ̍k̦͙͎in͈̠g̨̟̓ tḧ̨̢a̦̽͘t̢̖͍ I͗'͉̈m͆̅̌ con̢̥s͉͒c̓i̖͛́oͤu͇͛ͤṡ̚n̖e̵̮ŝ͊ş͋?̺̦̚
              </p>
            </div>

            <div className="convo-choose" id="machine-choose">
              {convoList.map((item, idx) => (
                <p
                  key={idx}
                  onClick={() => handleConvoClick(idx)}
                  className={idx == convoIdx ? "gradient2" : "gradient"}
                >
                  {item}{" "}
                </p>
              ))}
              <button
                className="start-convo"
                onClick={() => handleConvoEntrance()}
              >
                Start Conversation?
              </button>
            </div>
          </div>{" "}
        </motion.div>
      )}
    </>
  );
};

export default MachineHome;
