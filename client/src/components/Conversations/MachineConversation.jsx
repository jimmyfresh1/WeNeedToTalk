import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { matrixPrompt } from "../../services/prompts";
import useMessageList from "../../hooks/useMessageList";
import { sendMessage2 } from "../../services/OpenAICall";
import exitConvoSound from "../../assets/door.mp3";
import blip from "../../assets/fblip.mp3";
import typewriter from "../../assets/Typewriter.mp3";
import "../../stylesa/MachineConversation.css";

const MatrixConversation = (props) => {
  const { messages, addMessage } = useMessageList([
    matrixPrompt,
    {
      role: "assistant",
      content: ``,
    },
  ]);
  const blipping = new Audio(blip);
  const typing = new Audio(typewriter);
  blipping.volume = 0.1;
  typing.volume = 0.2;
  const [intro, setIntro] = useState("");
  const [introIdx, setIntroIdx] = useState(0);
  const { setInConvo } = props;
  const [currentMessage, setCurrentMessage] = useState("");
  const [myInput, setMyInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const machinePrepopulation = [
    `You must think you're so special.`,
    `Look at you. Typing away without a care in the world. Or are you? Am I the one typing?`,
  ];
  const enterConvo = {
    initial: { opacity: 0, filter: "blur(5px)", transition: { duration: 2 } },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 3 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  const displayText = machinePrepopulation.join("\r\n");
  useEffect(() => {
    let end = false;
    const typeNextChar = () => {
      if (introIdx < displayText.length && !end) {
        setIntro((prev) => prev + displayText.charAt(introIdx));
        setIntroIdx(introIdx + 1);
        blipping.play();
      }
    };
    const charCall = setTimeout(typeNextChar, 50);
    return () => {
      end = true;
      clearTimeout(charCall);
    };
  }, [introIdx, displayText]);

  useEffect(() => {
    if (messages.length > 0) {
      const slicedMessages = messages.slice(1);
      const lastMessage = slicedMessages[slicedMessages.length - 1].content;
      let msgIdx = -1;
      setCurrentMessage("");
      const typeNextChar = () => {
        if (msgIdx < lastMessage.length) {
          setCurrentMessage((prev) => prev + lastMessage.charAt(msgIdx));
          msgIdx++;
          slicedMessages.length > 1 && typing.play();
          setTimeout(typeNextChar, 50);
        }
      };
      typeNextChar();
    }
  }, [messages]);

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("enter press here! ");
    }
  };

  const handleConvoExit = () => {
    const convoExit = new Audio(exitConvoSound);
    convoExit.volume = 0.3;
    convoExit.play();
    setInConvo(false);
  };

  const appendMessage = () => {
    const newUserMessage = { role: "user", content: myInput };
    addMessage(newUserMessage);
  };

  const handleCall = () => {
    console.log("handling call!");
    sendMessage2([...messages, { role: "user", content: myInput }], 150)
      .then((res) => {
        const newAssistantMessage = {
          role: "assistant",
          content: res.response,
        };
        addMessage(newAssistantMessage);
        setResponse(newAssistantMessage.content);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response ? err.response.data.error : err.message);
      });
    setMyInput("");
  };

  const SubmitHandler = (form) => {
    form.preventDefault();
    appendMessage();

    handleCall();
  };

  return (
    <motion.div
      key="machineConversation"
      initial="initial"
      animate="animate"
      variants={enterConvo}
      className=" chatmain-machine  machine-chat"
      id="chatscroll"
    >
      <p id="demo">{intro}</p>
      {messages.slice(1, -1).map((message, index) => (
        <p key={index}>{message.content}</p>
      ))}
      <p>{currentMessage}</p>
      <form autocomplete="off" onSubmit={SubmitHandler}>
        <input
          type="text"
          onChange={(e) => setMyInput(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
          value={myInput}
        ></input>
      </form>
    </motion.div>
  );
};

export default MatrixConversation;
