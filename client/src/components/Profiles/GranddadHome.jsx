import React from "react";
import granddad from "../../assets/characterpfps/dad.png";
import { motion } from "framer-motion";
import chooseConvoSound from "../../assets/chooseconvo.mp3";
import { useState } from "react";

const GranddadHome = () => {
  const Variants = {
    initial: { opacity: 0, transition: { duration: 1 } },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  const [convoIdx, setConvoIdx] = useState(-1);

  const handleConvoClick = (idx) => {
    const convoClick = new Audio(chooseConvoSound);
    convoClick.volume = 0.3;
    convoClick.play();
    setConvoIdx(idx);
  };

  const convoList = [
    "midnightThoughts",
    "timeTravelWhatIfs",
    "bestPizzaToppings?",
    "codingstruggles",
    "superpowersWishlist",
    "whyCatsRule",
    "movieMarathonEndgame",
    "DIYdisastersOrTriumphs",
    "HiddenGemsInCity",
    "theBookshelfDilema",
    "fitnessJourneyUps&Downs",
    "Quest4PerfectCoffee",
    "fanTheoriesExploded",
    "gamingGlitches_n_Glory",
    "MusicThatMoves",
    "artProjects&inspo",
    "techGadgetsWishList!!!",
    "TravelDreams&Dests",
    "memeSharing_corner",
    "lifeHacksYouSwearBy",
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={Variants}
      className="your-granddad-home chatmain char-home"
      id="chatscroll"
    >
      {" "}
      <div className="bio">
        <h3>Alias: HiHungryI'mDad</h3>
        <h4>Real Name: Dad</h4>
        <h4>Status: A little peckish, why do you ask?</h4>
        <h4>Favorite foods: Sandwiches</h4>
      </div>
      <img src={granddad} alt="" className="pfp" />
      <div>
        <h2>Quotes for wisdom:</h2>
        <h4>
          I thought the dryer was shrinking my clothes. Turns out it was the
          refrigerator all along.
        </h4>
      </div>
      <div className="bottom-half bottom-half-dad">
        <div className="dad-blurb blurb ">
          <div className="date-and-title">
            <h2>Tuesday I think </h2>
            <h2>Or was it Wednesday?</h2>
          </div>

          <p>
            Watered the plants yesterday, but I think I over watered them. Or
            was it today? Do I need to water them again today?
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
        </div>
      </div>{" "}
    </motion.div>
  );
};

export default GranddadHome;
