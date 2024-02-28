import { useState } from "react";

const useMessageList = (initialMessages = []) => {
  const [messages, setMessages] = useState(initialMessages);
  function setList(messageList) {
    setMessages(messageList);
  }
  function addMessage(message) {
    setMessages((prevMessages) => [...prevMessages, message]);
  }
  return { messages, addMessage };
};

export default useMessageList;
