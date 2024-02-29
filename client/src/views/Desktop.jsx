import React from "react";
import parsec from "../assets/parsec2.png";
import world from "../assets/world.png";
import twitter from "../assets/ARTIST.png";
import { motion } from "framer-motion";
import Chatbox from "../components/Chatbox";

const Desktop = (props) => {
  const { handleLogout } = props;
  const backgroundVariants = {
    initial: { opacity: 0, transition: { duration: 2 } },
    animate: { opacity: 1, transition: { duration: 4 } },
    exit: { opacity: 0, transition: { duration: 2 } },
  };
  return (
    <motion.div
      key="mainScreen"
      initial="initial"
      animate="animate"
      variants={backgroundVariants}
      className="newRoot backgroundImage"
    >
      <Chatbox />
      <motion.img
        className="icon"
        src={parsec}
        alt=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.1 }}
      />
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 0.1 }}
        onClick={handleLogout}
        className="icon2"
        src={world}
        alt=""
      />
      <a className="icon3" href="https://twitter.com/aconfuseddragon?lang=en">
        <motion.img
          className="icon3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.6, duration: 0.1 }}
          onClick={handleLogout}
          src={twitter}
          alt=""
        />
      </a>
    </motion.div>
  );
};

export default Desktop;
