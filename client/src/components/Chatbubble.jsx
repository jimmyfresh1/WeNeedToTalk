import React from "react";
import { motion } from "framer-motion";

const ChatBubble = ({ username, message, role }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.35 }}
    className="chatbubblecontainer"
  >
    <div className={`chatbubble ${role}`}>
      <div className="username">{username}</div>
      <div className="message-body">{message}</div>
    </div>
  </motion.div>
);

export default ChatBubble;
