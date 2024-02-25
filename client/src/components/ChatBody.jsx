import React from "react";
import ChatMain from "./ChatMain";

import ChatSidebar from "./ChatSidebar";
import { motion } from "framer-motion";

const ChatBody = () => {
  return (
    <motion.div
      className="chatbody"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.8, duration: 0.2 }}
    >
      <ChatSidebar />
      <ChatMain />
    </motion.div>
  );
};

export default ChatBody;
