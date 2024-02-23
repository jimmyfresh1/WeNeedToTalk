import React from "react";

const ChatBubble = ({ username, message, role }) => (
  <div className="chatbubblecontainer">
    <div className={`chatbubble ${role}`}>
      <div className="username">{username}</div>
      <div className="message-body">{message}</div>
    </div>
  </div>
);

export default ChatBubble;
