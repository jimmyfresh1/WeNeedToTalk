import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { tsunderePrompt } from "../services/prompts";
import useMessageList from "../hooks/useMessageList";
import { sendMessage } from "../services/OpenAICall";
import ChatBubble from "./Chatbubble";
import { tsunderePrepopulation } from "../services/prompts";
import imsend from "../assets/imsend.mp3";
import imreceive from "../assets/imreceive.mp3";

const Chattext = () => {
  const imSend = new Audio(imsend);
  imSend.volume = 0.3;
  const imReceive = new Audio(imreceive);
  imReceive.volume = 0.2;
  const { messages, addMessage } = useMessageList([tsunderePrompt]);
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
    <div className="chattext">
      {tsunderePrepopulation()}
      {messages.slice(1).map((message, index) => {
        return (
          <ChatBubble
            role={message.role}
            key={index}
            username={
              message.role === "user" ? "TheChaospower" : "Material Girl"
            }
            message={message.content}
          />
        );
      })}
      <form onSubmit={SubmitHandler}>
        <label htmlFor="chat">Chat here</label>
        <input
          className="chatInput"
          type="text"
          name="Chat"
          value={myInput}
          onChange={(e) => setMyInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Chattext;
