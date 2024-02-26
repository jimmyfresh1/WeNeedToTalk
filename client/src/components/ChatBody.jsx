import React, { useState } from "react";
import ChatMain from "./ChatMain";
import ChatSidebar from "./ChatSidebar";
import { motion } from "framer-motion";
import select from "../assets/sega1.wav";

const ChatBody = () => {
  const [character, setCharacter] = useState(null);
  const handleCharacterSelect = (char) => {
    const selectAudio = new Audio(select);
    selectAudio.volume = 0.4;
    selectAudio.play();
    setCharacter(char);
  };

  return (
    <motion.div
      className="chatbody"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.8, duration: 0.2 }}
    >
      <ChatSidebar handleCharacterSelect={handleCharacterSelect} />
      <ChatMain />
    </motion.div>
  );
};

export default ChatBody;
