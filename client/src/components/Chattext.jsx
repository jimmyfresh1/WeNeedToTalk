import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { tsunderePrompt } from "../services/prompts";
import useMessageList from "../hooks/useMessageList";
import { sendMessage } from "../services/OpenAICall";

const Chattext = () => {
  const { messages, addMessage } = useMessageList([tsunderePrompt]);
  const [myInput, setMyInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const SubmitHandler = (form) => {
    const newUserMessage = { role: "user", content: myInput };
    addMessage(newUserMessage);
    form.preventDefault();
    sendMessage(messages)
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

  return (
    <div className="chattext">
      {messages.slice(1).map((message, index) => {
        return (
          <div key={index} className="chatbubblecontainer">
            <div className="chatbubble">
              <div className="username">TheChaospower</div>
              <div className="message-body">{message.content}</div>
            </div>
          </div>
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
