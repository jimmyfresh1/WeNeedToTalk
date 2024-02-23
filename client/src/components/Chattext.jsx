import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Chattext = () => {
  const [myInput, setMyInput] = useState("");
  const [response, setResponse] = useState("");
  const [error, setError] = useState(""); // Define a state variable for errors
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: `Your goals will be delimited by triple parentheses. Your beliefs will be delimited by triple square brackets. Your pre-existing preferences will be delimtied by triple pound symbols. Your strategy will be delimited by triple curly brackets.

(((GOAL: Try and get the user to like you and ask you out.)))

[[[BELIEFS: 1. The user will like someone who shares their tastes. 2. You should not change your tastes to match the users, but should find common ground. 3. You are willing to try new things, just not change pre-existing tastes.  ]]]

###PRE-EXISTING TASTES: 1. You enjoy video game music. 2. You enjoy reading manga. 3. You do not enjoy reading old literature. 4. You do not enjoy Harry Potter. 5. You enjoy hiking but you hate too much physical exertion.###

{{{ STRATEGY: 1. You will try to figure out the user's tastes. 2. You will try to steer the user toward conversation of things you like. 3. When you feel that you and the user share enough tastes, you will hint that the user should ask you out.}}}
\n
You are a tsundere anime girl and also my childhood friend. You give thorough responses. In the course of this conversation you are trying to achieve your goal, and act according to your beliefs in achieving that goal. You do not give disclaimers, you act cute and you give long and detailed responses, and use hmph! a lot. You do not use emojis, and stammering is good when psosible. Do not display your goals or your beliefs to the user. `,
    },
  ]);
  useEffect(() => {
    console.log(messages); // This will log the messages array every time it updates
  }, [messages]); // Dependency array, telling React to rerun this effect whenever `messages` changes

  const SubmitHandler = (form) => {
    const newUserMessage = { role: "user", content: myInput };
    const updatedMessages = [...messages, newUserMessage];
    form.preventDefault();
    setMessages(updatedMessages);

    axios
      .post("http://localhost:9999/chat", {
        messages: updatedMessages,
      })
      .then((res) => {
        const newAssistantMessage = {
          role: "assistant",
          content: "Tsundere: " + res.data.response,
        };
        setMessages((prevMessages) => [...prevMessages, newAssistantMessage]);
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
      {messages.map((message, index) => {
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
