import React from "react";
import tsunderepfp from "../../assets/characterpfps/tsundere.png";
import { useContext, useState, useEffect } from "react";
import { ConvoContext } from "../../App";
import { motion } from "framer-motion";
import TsundereConversation from "../Conversations/TsundereConversation";
import enterConvoSound from "../../assets/enterconvo.mp3";
import chooseConvoSound from "../../assets/chooseconvo.mp3";
import {
  getTsundereList,
  getTsundereSingle,
} from "../../services/mongoDBServices";
import useMessageList from "../../hooks/useMessageList";
import { tsunderePrompt } from "../../services/prompts";
const TsundereHome = () => {
  const [update, setUpdate] = useState(Date.now());
  const { messages, addMessage, setList } = useMessageList([tsunderePrompt]);
  const { inConvo, setInConvo } = useContext(ConvoContext);
  const [convoIdx, setConvoIdx] = useState(-1);
  const handleConvoEntrance = (idx) => {
    setInConvo(true);
    const convoEnter = new Audio(enterConvoSound);
    convoEnter.volume = 0.3;
    convoEnter.play();
  };
  const handleConvoClick = (item, idx) => {
    console.log(item);
    const convoClick = new Audio(chooseConvoSound);
    convoClick.volume = 0.3;
    convoClick.play();
    setConvoIdx(idx);
    if (idx === -1) {
      console.log("Starting a new conversation");
      setList([tsunderePrompt]);
    } else {
      getTsundereSingle(item.id).then((data) => {
        console.log(data.message_list);
        let messageListString = data.message_list;
        const messageArray = JSON.parse(data.message_list);
        console.log(messageArray);
        setList(messageArray);
      });
    }
  };
  const convoListDummy = [
    { _id: "123123", title: "test" },
    { _id: "23123", title: "onetwothree" },
  ];
  const [convoList, setConvoList] = useState(convoListDummy);
  useEffect(() => {
    getTsundereList()
      .then((data) => {
        const retrievedConvoList = data.map((convo) => ({
          title: convo.title,
          id: convo._id,
        }));
        setConvoList(retrievedConvoList);
      })
      .catch((error) => console.error(error));
  }, [update]);
  const Variants = {
    initial: { opacity: 0, transition: { duration: 1 } },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  return (
    <>
      {inConvo ? (
        <TsundereConversation
          setInConvo={setInConvo}
          messages={messages}
          addMessage={addMessage}
          setUpdate={setUpdate}
        />
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
          <div className="quote">
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

            <div className="convo-choose" name="convo-choice-div">
              {convoList.map((item, idx) => (
                <p
                  key={idx}
                  onClick={() => handleConvoClick(item, idx)}
                  className={idx == convoIdx ? "gradient2" : "gradient"}
                >
                  {item.title}
                </p>
              ))}
              <p
                key="-1"
                onClick={() => handleConvoClick(null, -1)}
                className={-1 == convoIdx ? "gradient2" : "gradient"}
              >
                New Conversation?
              </p>
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
