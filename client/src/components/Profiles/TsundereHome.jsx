import React from "react";
import tsunderepfp from "../../assets/characterpfps/tsundere.png";
import { useContext, useState } from "react";
import { ConvoContext } from "../../App";
import { motion } from "framer-motion";
import TsundereConversation from "../Conversations/TsundereConversation";
import enterConvoSound from "../../assets/enterconvo.mp3";
import chooseConvoSound from "../../assets/chooseconvo.mp3";

const TsundereHome = () => {
  const { inConvo, setInConvo } = useContext(ConvoContext);
  const [convoIdx, setConvoIdx] = useState(-1);
  const handleConvoEntrance = (idx) => {
    setInConvo(true);
    const convoEnter = new Audio(enterConvoSound);
    convoEnter.volume = 0.3;
    convoEnter.play();
  };
  const handleConvoClick = (idx) => {
    const convoClick = new Audio(chooseConvoSound);
    convoClick.volume = 0.3;
    convoClick.play();
    setConvoIdx(idx);
  };
  const convoList = [
    "test",
    "onetwothree",
    "a really good conversation",
    "another good one",
    "this one touched me deeply",
    "yes this was a good one",
    "test",
    "onetwothree",
    "a really good conversation",
    "another good one",
    "this one touched me deeply",
    "yes this was a good one",
    "test",
    "onetwothree",
    "a really good conversation",
    "another good one",
    "this one touched me deeply",
    "yes this was a good one",
  ];
  const Variants = {
    initial: { opacity: 0, transition: { duration: 1 } },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  return (
    <>
      {inConvo ? (
        <TsundereConversation setInConvo={setInConvo} />
      ) : (
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={Variants}
          id="chatscroll"
          className="tsundere-home chatmain char-home"
        >
          <div className="bio">
            <h3>Alias: MaterialGirl95</h3>
            <h4>Real Name: We're not that close yet!!!</h4>
            <h4>Status: As if I'd tell you?</h4>
            <h4>Favorite foods: Burgers, ramen, ice cream</h4>
          </div>
          <img src={tsunderepfp} className="pfp" alt="" />
          <div>
            <h2>Quotes for wisdom:</h2>
            <h4>
              If you've got time to ask stupid questions, why not spend a little
              time thinking about it yourself?
            </h4>
          </div>
          <div className="bottom-half bottom-half-tsundere">
            <div className="tsundere-blurb blurb ">
              <div className="date-and-title">
                <h2>Oct. 7 199X </h2>
                <h2>Maybe it's bothersome</h2>
              </div>

              <p>
                Maybe it's not. But in life you still have to try. Sometimes I
                hate how harsh I am on others when I know that I need to put in
                the effort myself. That's why my message is to keep trying no
                matter what, and people will see you for the real you.
              </p>
            </div>

            <div className="convo-choose">
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
          </div>
        </motion.div>
      )}
    </>
  );
};

export default TsundereHome;
