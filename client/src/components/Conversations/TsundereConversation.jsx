import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { tsunderePrompt, tsunderePrepopulation } from "../../services/prompts";
import useMessageList from "../../hooks/useMessageList";
import { sendMessage } from "../../services/OpenAICall";
import ChatBubble from "../Chatbubble";
import imsend from "../../assets/imsend.mp3";
import imreceive from "../../assets/imreceive.mp3";
import send from "../../assets/send.png";

const TsundereConversation = () => {
  const { messages, addMessage } = useMessageList([tsunderePrompt]);

  useEffect(() => {
    const elem = document.getElementById("chatscroll");
    elem.scrollTop = elem.scrollHeight;
  }, [messages]);

  const imSend = new Audio(imsend);
  imSend.volume = 0.3;
  const imReceive = new Audio(imreceive);
  imReceive.volume = 0.2;
  const [myInput, setMyInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const SubmitHandler = (form) => {
    const newUserMessage = { role: "user", content: myInput };
    addMessage(newUserMessage);
    form.preventDefault();
    imSend.play();
    sendMessage(messages)
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

  return (
    <div className=" chatmain tsundere-chat" id="chatscroll">
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
    </div>
  );
};

export default TsundereConversation;
