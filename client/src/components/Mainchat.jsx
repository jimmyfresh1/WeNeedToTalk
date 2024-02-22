import React from "react";
import Chattext from "./Chattext";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Mainchat = () => {
  return (
    <motion.div
      className="mainchat"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 4.8, duration: 0.2 }}
    >
      <Sidebar />
      <Chattext />
    </motion.div>
  );
};

export default Mainchat;
