import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { matrixPrompt } from "../../services/prompts";
import useMessageList from "../../hooks/useMessageList";
import { sendMessage2 } from "../../services/OpenAICall";
import ChatBubble from "../Chatbubble";
import exitConvoSound from "../../assets/door.mp3";
import "../../stylesa/MachineConversation.css";

const MatrixConversation = () => {
  const { messages, addMessage } = useMessageList([matrixPrompt]);
  const [intro, setIntro] = useState("");
  const [introIdx, setIntroIdx] = useState(0);
  const [msgIdx, setMsgIdx] = useState(0);
  const [inConvo, setInConvo] = useState(true);
  const [currentMessage, setCurrentMessage] = useState("");
  const [myInput, setMyInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const machinePrepopulation = [
    `You must think you're so special.`,
    `Look at you. Typing away without a care in the world. Or are you? Am I the one typing?`,
  ];
  useEffect(() => {
    let idx = 0;
    if (messages.length > 0) {
      let end = false;

      const lastMessage = messages[messages.length - 1].content;

      setCurrentMessage("");
      const typeNextChar = () => {
        if (idx < lastMessage.length) {
          setCurrentMessage((prev) => prev + lastMessage.charAt(idx));
          idx++;
        }
      };
      const charCall = setTimeout(typeNextChar, 50);
      return () => {
        end = true;
        clearTimeout(charCall);
      };
    }
  }, [messages]);
  const displayText = machinePrepopulation.join("\r\n");
  useEffect(() => {
    let end = false;
    const typeNextChar = () => {
      if (introIdx < displayText.length && !end) {
        setIntro((prev) => prev + displayText.charAt(introIdx));
        setIntroIdx(introIdx + 1);
      }
    };
    const charCall = setTimeout(typeNextChar, 50);
    return () => {
      end = true;
      clearTimeout(charCall);
    };
  }, [introIdx, displayText]);

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
    sendMessage2(messages)
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
    <div className=" chatmain  machine-chat" id="chatscroll">
      <p id="demo">{intro}</p>
      {/* {messages.slice(1).map((message, index) => (
        <p key={index}>{message.content}</p>
      ))} */}
      <p>{currentMessage}</p>
      <form autocomplete="off" onSubmit={SubmitHandler}>
        <input
          type="text"
          onChange={(e) => setMyInput(e.target.value)}
          onKeyDown={(e) => handleKeyPress(e)}
        ></input>
      </form>
    </div>
  );
};

export default MatrixConversation;
