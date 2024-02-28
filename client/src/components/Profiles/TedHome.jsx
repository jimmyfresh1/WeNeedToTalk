import React from "react";
import tedpfp from "../../assets/characterpfps/TedNaddakiller.png";
import { useState } from "react";
import { motion } from "framer-motion";
import chooseConvoSound from "../../assets/chooseconvo.mp3";
import { fredData } from "./ProfilePageComponents/characterData";
const TedHome = () => {
  const {
    alias,
    realName,
    status,
    favoriteFoods,
    quote,
    date,
    title,
    message,
  } = fredData;
  const [convoIdx, setConvoIdx] = useState(-1);
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

  const handleConvoClick = (idx) => {
    const convoClick = new Audio(chooseConvoSound);
    convoClick.volume = 0.3;
    convoClick.play();
    setConvoIdx(idx);
  };
  const Variants = {
    initial: { opacity: 0, transition: { duration: 1 } },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={Variants}
      id="chatscroll"
      className="ted-home chatmain char-home"
      id="chatscroll"
    >
      <div className="bio">
        <h3>Alias: {alias}</h3>
        <h4>Real Name: {realName}</h4>
        <h4>Status: {status}</h4>
        <h4>Favorite foods: {favoriteFoods}</h4>
      </div>
      <img src={tedpfp} className="pfp" alt="" />
      <div className="quote">
        <h2>Quotes for wisdom:</h2>
        <h4>{quote}</h4>
      </div>{" "}
      <div className="bottom-half bottom-half-friend">
        <div className="blurb">
          <div className="date-and-title-fred">
            <h2>{date}</h2>
            <h2>{title}</h2>
          </div>
          <p>{message}</p>
        </div>
        <div className="convo-choose" id="fred-choose">
          {convoList.map((item, idx) => (
            <p
              key={idx}
              onClick={() => handleConvoClick(idx)}
              className={idx == convoIdx ? "gradient2" : "gradient"}
            >
              {item}{" "}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TedHome;
