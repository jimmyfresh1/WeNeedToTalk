import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { tsunderePrompt, tsunderePrepopulation } from "../../services/prompts";
import useMessageList from "../../hooks/useMessageList";
import { sendMessage, sendMessage2 } from "../../services/OpenAICall";
import { createConversation } from "../../services/mongoDBServices";
import ChatBubble from "../Chatbubble";
import imsend from "../../assets/imsend.mp3";
import imreceive from "../../assets/imreceive.mp3";
import send from "../../assets/send.png";
import exitConvoSound from "../../assets/door.mp3";
const TsundereConversation = (props) => {
  const { messages, addMessage, setUpdate } = props;
  const imSend = new Audio(imsend);
  imSend.volume = 0.3;
  const imReceive = new Audio(imreceive);
  imReceive.volume = 0.2;
  const { setInConvo } = props;
  const enterConvo = {
    initial: { opacity: 0, filter: "blur(5px)", transition: { duration: 2 } },
    animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 3 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };

  const handleConvoExit = () => {
    const convoExit = new Audio(exitConvoSound);
    convoExit.volume = 0.3;
    convoExit.play();
    setInConvo(false);
  };

  useEffect(() => {
    const elem = document.getElementById("chatscroll");
    elem.scrollTop = elem.scrollHeight;
  }, [messages]);
  const [myInput, setMyInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");
  const [prompt, setPrompt] = useState({
    role: "user",
    content: "Please respond with the word bird thrice.",
  });
  const [saveMode, setSaveMode] = useState(false);
  const [convoName, setConvoName] = useState("");
  const [title, setTitle] = useState("");
  const appendMessage = () => {
    const newUserMessage = { role: "user", content: myInput };
    addMessage(newUserMessage);
    imSend.play();
  };

  const handleCall = () => {
    console.log("handling call!");
    sendMessage2([...messages, { role: "user", content: myInput }])
      .then((res) => {
        const newAssistantMessage = {
          role: "assistant",
          content: res.response,
        };
        addMessage(newAssistantMessage);
        imReceive.play();
        setResponse(newAssistantMessage.content);
      })
      .catch((err) => {
        console.log(err);
        setError(err.response ? err.response.data.error : err.message);
      });
    setMyInput("");
  };

  const SubmitHandler = (form) => {
    appendMessage();
    form.preventDefault();
    handleCall();
  };

  const SaveHandler = () => {
    setSaveMode(true);
  };
  const SaveHandler2 = () => {
    setSaveMode(false);
  };
  const confirmSave = () => {
    const messageString = JSON.stringify(messages);
    console.log(messageString);
    console.log(title);
    const saveObject = {
      title,
      character: "tsundere",
      message_list: messageString,
    };
    console.log(saveObject);
    createConversation(saveObject);
    setUpdate(Date.now());
    setSaveMode(false);
    alert("Saved!");
  };

  return (
    <motion.div
      key="tsundereConversation"
      initial="initial"
      animate="animate"
      variants={enterConvo}
      className=" chatmain tsundere-chat"
      id="chatscroll"
    >
      {tsunderePrepopulation()}
      {messages.slice(1).map((message, index) => {
        return (
          <ChatBubble
            role={message.role}
            key={index}
            username={
              message.role === "user" ? "TheChaospower" : "MaterialGirl95"
            }
            message={message.content}
          />
        );
      })}
      <form autocomplete="off" onSubmit={SubmitHandler}>
        <label className="chatLabel pixelify-sans" htmlFor="chat">
          Chat here
        </label>
        <input
          className="chatInput"
          type="text"
          name="Chat"
          value={myInput}
          onChange={(e) => setMyInput(e.target.value)}
        />
        <input
          type="image"
          src={send}
          alt="Submit Form"
          className="inputImage"
        />
      </form>
      <div className="end-save">
        <button
          className="start-convo"
          onClick={() => handleConvoExit()}
          style={{ visibility: saveMode ? "hidden" : "visible" }}
        >
          End Conversation?
        </button>
        <button
          className="start-convo"
          onClick={() => SaveHandler()}
          style={{ display: saveMode ? "none" : "inline-block" }}
        >
          Save conversation?
        </button>
        <input
          type="text"
          style={{ visibility: saveMode ? "visible" : "hidden" }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="start-convo"
          style={{ visibility: saveMode ? "visible" : "hidden" }}
          onClick={() => confirmSave()}
        >
          Confirm
        </button>
        <button
          className="start-convo"
          onClick={() => SaveHandler2()}
          style={{ visibility: saveMode ? "visible" : "hidden" }}
        >
          Cancel
        </button>
      </div>
    </motion.div>
  );
};

export default TsundereConversation;
