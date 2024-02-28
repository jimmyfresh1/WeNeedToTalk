import React from "react";
import parsec from "../assets/parsec2.png";
import world from "../assets/world.png";
import { motion } from "framer-motion";
import Chatbox from "../components/Chatbox";
import axios from 'axios'

const Desktop = (props) => {

  const { handleLogout } = props;

  const deleteCookie = (e) => {
    e.preventDefault()
    axios.post("http://localhost:9999/api/logout")
      .then(res => {
        console.log(res)
        handleLogout()
      })
      .catch((err) => {
        console.log(err)
      })
    }

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
        onClick={deleteCookie}
        className="icon2"
        src={world}
        alt=""
        />
    </motion.div>
  );
};

export default Desktop;
