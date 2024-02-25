import React from "react";
import Login from "../components/Login";
import { motion } from "framer-motion";
import "../Startup.css";

const loginVariants = {
  initial: { opacity: 0, transition: { duration: 2 } },
  animate: { opacity: 1, transition: { duration: 2 } },
  exit: { opacity: 0, transition: { duration: 2 } },
};

const Windows = (props) => {
  const { handleLogin } = props;
  return (
    <motion.div
      key="loginScreen"
      initial="initial"
      animate="animate"
      variants={loginVariants}
      className="newRoot loginBackground"
    >
      <Login handleLogin={handleLogin} />
    </motion.div>
  );
};

export default Windows;
