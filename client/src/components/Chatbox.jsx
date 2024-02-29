import React from "react";
import { motion } from "framer-motion";

import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
const Chatbox = (props) => {
  return (
    <motion.div
      className="chatbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.2, duration: 0.2 }}
    >
      <ChatHeader />
      <ChatBody />
    </motion.div>
  );
};

export default Chatbox;
