import React from "react";
import ChatConversation from "./ChatConversation";
import { useState } from "react";
import ChatHome from "./ChatHome";
const ChatMain = () => {
  const [inConvo, setInConvo] = useState();

  let renderChatMain;
  switch (true) {
    default:
      renderChatMain = <ChatHome />;
  }
  return <>{renderChatMain}</>;
};

export default ChatMain;
