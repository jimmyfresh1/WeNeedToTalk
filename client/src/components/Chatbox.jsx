import React from "react";
import { motion } from "framer-motion";

import Header from "./Header";
import Mainchat from "./Mainchat";
const Chatbox = () => {
  return (
    <motion.div
      className="chatbox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.3, duration: 0.2 }}
    >
      <Header />
      <Mainchat />
    </motion.div>
  );
};

export default Chatbox;
